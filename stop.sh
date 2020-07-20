#!/bin/bash

COMPOSE_FILES="-f ./docker/docker-compose-chaincode-rest-api.yaml -f ./docker/docker-compose-org1.yaml -f ./docker/docker-compose-org2.yaml -f ./docker/docker-compose-orderer.yaml"
IMAGE_TAG=$IMAGETAG docker-compose ${COMPOSE_FILES} down --volumes --remove-orphans

rm -rf ./crypto-material/*
rm -rf ./system-genesis-block/*
rm -rf ./channel-artifacts/*
rm -rf ./services/fabric-sdk-nestjs/wallet
rm -rf ./services/fabric-sdk-nestjs/dist
rm -rf ./services/fabric-sdk-nestjs/node_modules
rm -rf ./chaincode/*/build/*
rm -rf ./chaincode/*/source/node_modules
rm -rf ./chaincode/*/source/dist
rm -rf ./services/stimulus_reflex_todomvc/node_modules
rm -rf ./services/stimulus_reflex_todomvc/tmp
rm -rf ./services/stimulus_reflex_todomvc/pids
