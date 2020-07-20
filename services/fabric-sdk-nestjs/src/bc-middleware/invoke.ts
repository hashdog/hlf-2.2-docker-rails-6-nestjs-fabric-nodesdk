import { UtilsConfig } from './utilsconfig';
import { InternalServerErrorException } from '@nestjs/common';
import { AppLogger } from '../logger/logger';
import * as appService from '../app.service';
import * as config from '../../config/config';

const controller = 'Invoke';
const logger = new AppLogger();

export async function invoke(username, method, args) {
    logger.log(`${new Date().toLocaleString()}: [${controller}] Start invoke new data.`);
    try {
        // Get the network (channel) our contract is deployed to.
        const utilsConfig = UtilsConfig.getInstance();
        const { gateway, network } = await utilsConfig.startNetwork();

        // Get the contract from the network.
        const contract = network.getContract(config.getEnv().contractName);

        // Submit the specified transaction.
        const result = await contract.submitTransaction(method, ...args);
        logger.log(`${new Date().toLocaleString()}: [${controller}] Invoke successful.`);
        // Disconnect from the gateway.
        await gateway.disconnect();
        // Return result
        return result.toString();

    } catch (error) {
        logger.error(`${new Date().toLocaleString()}: [${controller}] Failed to invoke transaction.`, error);
        console.error(`Failed to submit transaction: ${error}`);
        throw appService.buildAPIResponse(500, 'Failed to Register User', {}, error);
    }
}
