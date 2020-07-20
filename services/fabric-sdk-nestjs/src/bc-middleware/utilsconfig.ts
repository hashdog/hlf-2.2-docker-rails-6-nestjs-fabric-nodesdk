import * as log4js from 'log4js';
const logger = log4js.getLogger('RegisterUsers');
import { InternalServerErrorException } from '@nestjs/common';
const { Gateway, Wallets } = require('fabric-network');
const fs = require('fs');
const path = require('path');

import * as config from '../../config/config';

export class UtilsConfig {
    private static instance: UtilsConfig;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): UtilsConfig {
        if (!UtilsConfig.instance) {
            UtilsConfig.instance = new UtilsConfig();
        }

        return UtilsConfig.instance;
    }


    public async startIdentity() {
        const username = config.getEnv().userChaincode

        // load the network configuration
        const ccpPath = path.resolve(config.getNetworkPath());
        const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(config.getEnv().walletPath);
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get(username);
        if (!identity) {
            console.log('An identity for the user "admin" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }
        return { identity, ccp, wallet }
    }

    public async startNetwork() {
        const { identity, ccp, wallet } = await this.startIdentity();
        const username   = config.getEnv().userChaincode
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: username, discovery: { enabled: true, asLocalhost: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork(config.getEnv().channelName);
        
        return {gateway, network};
    }

}
