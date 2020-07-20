#!/bin/bash

. ./utils.sh

#vars
FABRIC_CFG_PATH=$PWD/config/
VERSION=1.0
SEQUENCE=1
CHANNEL_NAME=$2
CC_NAME=$1
DELAY=3
MAX_RETRY=5
CA_CERT=$PWD/crypto-material/ordererOrganizations/ap.com/msp/tlscacerts/tlsca.ap.com-cert.pem
CC_SRC_PATH=/etc/hyperledger/fabric/chaincode/$CC_NAME/source
CC_BUILD_PATH=/etc/hyperledger/fabric/chaincode/$CC_NAME/build

verifyResult() {
  if [ $1 -ne 0 ]; then
    echo "!!!!!!!!!!!!!!! "$2" !!!!!!!!!!!!!!!!"
    echo
    exit 1
  fi
}


packageChaincode() {
  ORG=$1
  set -x
  docker-compose -f docker/docker-compose-chaincode-rest-api.yaml run chaincode-rest-api sh -c "cd /chaincode/${CC_NAME}/source && npm install  && npm run build"
  docker-compose -f docker/docker-compose-org${ORG}-cli.yaml run org${ORG}-cli \
    peer lifecycle chaincode package ${CC_BUILD_PATH}/${CC_NAME}.tar.gz --path ${CC_SRC_PATH} --lang node --label ${CC_NAME}_${VERSION} >&log.txt
  res=$?
  set +x
  cat log.txt
  verifyResult $res "Chaincode packaging on peer0.org${ORG}.ap.com has failed"
  echo "===================== Chaincode is packaged on peer0.org${ORG}.ap.com ===================== "
  echo
}

# installChaincode PEER ORG
installChaincode() {
  ORG=$1
  set -x
  docker-compose -f docker/docker-compose-org${ORG}-cli.yaml run org${ORG}-cli \
    peer lifecycle chaincode install /etc/hyperledger/fabric/chaincode/${CC_NAME}/build/${CC_NAME}.tar.gz >&log.txt
  res=$?
  set +x
  cat log.txt
  verifyResult $res "Chaincode installation on peer0.org${ORG} has failed"
  echo "===================== Chaincode is installed on peer0.org${ORG} ===================== "
  echo
}

# queryInstalled PEER ORG
queryInstalled() {
  ORG=$1
  set -x
  docker-compose -f docker/docker-compose-org${ORG}-cli.yaml run org${ORG}-cli \
    peer lifecycle chaincode queryinstalled >&log.txt
  res=$?
  set +x
  cat log.txt
	PACKAGE_ID=$(sed -n "/${CC_NAME}_${VERSION}/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
  verifyResult $res "Query installed on peer0.org${ORG} has failed"
  echo "===================== Query installed successful on peer0.org${ORG} on channel ===================== "
  echo
}

# approveForMyOrg VERSION PEER ORG
approveForMyOrg() {
  ORG=$1
  set -x
  docker-compose -f docker/docker-compose-org${ORG}-cli.yaml run org${ORG}-cli \
    bash -c \
    "peer lifecycle chaincode approveformyorg -o orderer0.ap.com:7050 --ordererTLSHostnameOverride orderer0.ap.com  \
    --channelID $CHANNEL_NAME --name $CC_NAME --version $VERSION --package-id $PACKAGE_ID --sequence $SEQUENCE --tls \
    --cafile /etc/hyperledger/fabric/ordererMSP/tlscacerts/tlsca.ap.com-cert.pem --init-required"
 >&log.txt
  set +x
  cat log.txt
  verifyResult $res "Chaincode definition approved on peer0.org${ORG} on channel '$CHANNEL_NAME' failed"
  echo "===================== Chaincode definition approved on peer0.org${ORG} on channel '$CHANNEL_NAME' ===================== "
  echo
}

# commitChaincodeDefinition VERSION PEER ORG (PEER ORG)...
commitChaincodeDefinition() {
  ORG=$1
  set -x
  docker-compose -f docker/docker-compose-org${ORG}-cli.yaml run org${ORG}-cli \
    bash -c \
    "peer lifecycle chaincode commit -o orderer0.ap.com:7050 --ordererTLSHostnameOverride orderer0.ap.com \
    --channelID $CHANNEL_NAME --name $CC_NAME --version $VERSION --sequence $SEQUENCE --tls  \
    --cafile /etc/hyperledger/fabric/ordererMSP/tlscacerts/tlsca.ap.com-cert.pem  \
    --peerAddresses peer0.org1.ap.com:7051 --tlsRootCertFiles /etc/hyperledger/fabric/tls/ca.crt  \
    --peerAddresses peer0.org2.ap.com:8051 --tlsRootCertFiles /etc/hyperledger/fabric/ca-tls-org2.crt  \
    --init-required"

  res=$?
  set +x
  cat log.txt
  verifyResult $res "Chaincode definition commit failed on peer0.org${ORG} on channel '$CHANNEL_NAME' failed"
  echo "===================== Chaincode definition committed on channel '$CHANNEL_NAME' ===================== "
  echo
}


chaincodeInvokeInit() {
  ORG=$1
  set -x
  docker-compose -f docker/docker-compose-org${ORG}-cli.yaml run org${ORG}-cli \
  peer chaincode invoke -o orderer0.ap.com:7050 --ordererTLSHostnameOverride orderer0.ap.com --tls \
-C $CHANNEL_NAME -n $CC_NAME  \
  --cafile /etc/hyperledger/fabric/ordererMSP/tlscacerts/tlsca.ap.com-cert.pem  \
  --peerAddresses peer0.org1.ap.com:7051 --tlsRootCertFiles /etc/hyperledger/fabric/tls/ca.crt  \
  --peerAddresses peer0.org2.ap.com:8051 --tlsRootCertFiles /etc/hyperledger/fabric/ca-tls-org2.crt  \
 --isInit -c '{"function":"initLedger","Args":[]}'

  res=$?
  set +x
  cat log.txt
  verifyResult $res "Invoke execution on $PEERS failed "
  echo "===================== Invoke transaction successful on $PEERS on channel '$CHANNEL_NAME' ===================== "
  echo
}

chaincodeQuery() {
  ORG=$1
  echo "===================== Querying on peer0.org${ORG} on channel '$CHANNEL_NAME'... ===================== "
	local rc=1
	local COUNTER=1
	# continue to poll
  # we either get a successful response, or reach MAX RETRY
	while [ $rc -ne 0 -a $COUNTER -lt $MAX_RETRY ] ; do
    sleep $DELAY
    echo "Attempting to Query peer0.org${ORG}, Retry after $DELAY seconds."
    set -x
    docker-compose -f docker/docker-compose-org${ORG}-cli.yaml run org${ORG}-cli \
      peer chaincode query -C $CHANNEL_NAME -n $CC_NAME -c '{"Args":["getAllTodo"]}' >&log.txt
    res=$?
    set +x
		let rc=$res
		COUNTER=$(expr $COUNTER + 1)
	done
  echo
  cat log.txt
  if test $rc -eq 0; then
    echo "===================== Query successful on peer0.org${ORG} on channel '$CHANNEL_NAME' ===================== "
		echo
  else
    echo "!!!!!!!!!!!!!!! After $MAX_RETRY attempts, Query result on peer0.org${ORG} is INVALID !!!!!!!!!!!!!!!!"
    echo
    exit 1
  fi
}

  
export FABRIC_CFG_PATH=${PWD}/config
export PATH=${PWD}/bin:$PATH

printSeparator "Packaging chaincode!"
packageChaincode 1
printSeparator "Installing chaincode on org1"
installChaincode 1
printSeparator "Installing chaincode on org2"
installChaincode 2
printSeparator "Query the chaincode is installed"
queryInstalled 1
printSeparator "Approve the chaincode for org1"
approveForMyOrg 1
printSeparator "Approve the chaincode for org2"
approveForMyOrg 2
printSeparator "Commit the chaincode to org1 and org2"
commitChaincodeDefinition 1
printSeparator "Invoke chaincode"
chaincodeInvokeInit 1
printSeparator "Query Chaincode"
chaincodeQuery 1
printSeparator "Done!"