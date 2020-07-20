/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const FabricCAServices = require('fabric-ca-client');
const { Wallets } = require('fabric-network');
const fs = require('fs');
const path = require('path');
import * as config from '../../config/config';
import { AppLogger } from '../logger/logger';
const controller = 'User';
const logger = new AppLogger();
import * as appService from '../app.service';


export async function registerUser(userName) {
    logger.log(`${new Date().toLocaleString()}: [${controller}] Start registering user.`);

    try {
        // load the network configuration
        const ccpPath = path.resolve(config.getNetworkPath());
        let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new CA client for interacting with the CA.
        const caURL = ccp.certificateAuthorities[Object.keys(ccp.certificateAuthorities)[0]].url;
        const ca = new FabricCAServices(caURL);

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userIdentity = await wallet.get(userName);
        if (userIdentity) {
            logger.log('An identity for the user ' + userName + ' already exists in the wallet');
            return;
        }

        // Check to see if we've already enrolled the admin user.
        const adminIdentity = await wallet.get('admin');
        if (!adminIdentity) {
            logger.log('An identity for the admin user "admin" does not exist in the wallet');
            logger.log('Run the enrollAdmin.ts application before retrying');
            return;
        }

        // build a user object for authenticating with the CA
        const provider = wallet.getProviderRegistry().getProvider(adminIdentity.type);
        const adminUser = await provider.getUserContext(adminIdentity, 'admin');

        // Register the user, enroll the user, and import the new identity into the wallet.
        const secret = await ca.register({
            affiliation: 'org1.department1',
            enrollmentID: userName,
            role: 'member'
        }, adminUser);
        const enrollment = await ca.enroll({
            enrollmentID: userName,
            enrollmentSecret: secret
        });
        const x509Identity = {
            credentials: {
                certificate: enrollment.certificate,
                privateKey: enrollment.key.toBytes(),
            },
            mspId: 'Org1MSP',
            type: 'X.509',
        };
        await wallet.put(userName, x509Identity);
        console.log('Successfully registered and enrolled admin user '+ userName +' and imported it into the wallet');

    } catch (error) {
        logger.error(`${new Date().toLocaleString()}: [${controller}] Failed to register user.`, error);
        console.error(`Failed to register user ${userName}: ${error}`);
        // throw new InternalServerErrorException(error);
        throw appService.buildAPIResponse(500, 'Failed to Register User', {}, error);
    }

}
