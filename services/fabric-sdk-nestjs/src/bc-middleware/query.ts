import { UtilsConfig } from './utilsconfig';
import { InternalServerErrorException } from '@nestjs/common';
import { AppLogger } from '../logger/logger';
import * as config from '../../config/config';


const controller = 'Query';
const logger = new AppLogger();

export async function query(methodName, args) {
    logger.log(`${new Date().toLocaleString()}: [${controller}] Start query data.`);

    try {
        // Get the network (channel) our contract is deployed to.
        const utilsConfig = UtilsConfig.getInstance();
        const { gateway, network } = await utilsConfig.startNetwork();

        // Get the contract from the network.
        const contract = network.getContract(config.getEnv().contractName);

        // Evaluate the specified transaction.
        const result = await contract.evaluateTransaction(methodName, args);
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        logger.log(`${new Date().toLocaleString()}: [${controller}] Query data successfully.`);

        // Disconnect from the gateway.
        await gateway.disconnect();

        // Return result
        return result.toString() === '' ? [] : JSON.parse(result.toString());

    } catch (error) {
        logger.error(`${new Date().toLocaleString()}: [${controller}] Failed to query transaction.`, error);
        console.error(`Failed to evaluate transaction: ${error}`);
        throw new InternalServerErrorException(`Failed to evaluate transaction: ${error}`);
    }
}
