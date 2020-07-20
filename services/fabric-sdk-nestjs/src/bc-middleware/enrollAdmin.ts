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
import * as appService from '../app.service';
import { InternalServerErrorException } from '@nestjs/common';

const controller = 'EnrollAdmin';
const logger = new AppLogger();

export async function enrollAdmin() {
    logger.log(`${new Date().toLocaleString()}: [${controller}] Start enroll admin.`);
    try {
        // load the network configuration
        const ccpPath = path.resolve(config.getNetworkPath());
        const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new CA client for interacting with the CA.
        const caInfo = ccp.certificateAuthorities[Object.keys(ccp.certificateAuthorities)[0]];
        const caTLSCACerts = caInfo.tlsCACerts.pem;
        const ca = new FabricCAServices(caInfo.url, { trustedRoots: caTLSCACerts, verify: false }, caInfo.caName);

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the admin user.
        const identity = await wallet.get('admin');
        if (identity) {
            logger.log('An identity for the admin user "admin" already exists in the wallet');
            return;
        }

        // Enroll the admin user, and import the new identity into the wallet.
        const enrollment = await ca.enroll({ enrollmentID: 'admin', enrollmentSecret: 'adminpw' });
        const x509Identity = {
            credentials: {
                certificate: enrollment.certificate,
                privateKey: enrollment.key.toBytes(),
            },
            mspId: 'Org1MSP',
            type: 'X.509',
        };
        await wallet.put('admin', x509Identity);
        logger.log(`${new Date().toLocaleString()}: [${controller}] Successfully enrolled admin user "admin" and imported it into the wallet.`);
        logger.log('Successfully enrolled admin user "admin" and imported it into the wallet');

    } catch (error) {
        logger.error(`${new Date().toLocaleString()}: [${controller}] Failed to enroll admin user admin.`, error);
        throw new InternalServerErrorException(`Failed to enroll admin user "admin": ${error}`);
    }
}

// enrollAdmin();
