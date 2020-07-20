import { Context, Contract } from 'fabric-contract-api';
import { TodoDto } from './todo_dto';

export class Todo extends Contract {

    public async initLedger(ctx: Context) {
        console.info('============= START : Initialize Ledger ===========');
        const todos: TodoDto[] = [
            {
                action: "shopping today",
                doneAt: "1594941986",
                ownerId: '1',
            },
            {
                action: "wash todo",
                doneAt: null,
                ownerId: '1',
            },
            {
                action: "cook bread",
                doneAt: "1594941986",
                ownerId: '1',
            },
            {
                action: "play guitar",
                doneAt: null,
                ownerId: '1',
            },
        ];

        for (let i = 0; i < todos.length; i++) {
            await ctx.stub.putState('todoId' + i, Buffer.from(JSON.stringify(todos[i])));
            console.info('Added <--> ', todos[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    public async queryTodo(ctx: Context, todoNumber: string): Promise<string> {
        const todoAsBytes = await ctx.stub.getState(todoNumber); // get the todo from chaincode state
        if (!todoAsBytes || todoAsBytes.length === 0) {
            throw new Error(`${todoNumber} does not exist`);
        }
        console.log(todoAsBytes.toString());
        return todoAsBytes.toString();
    }

    public async addTodo(ctx: Context, todoNumber: string, action: string, doneAt: string, ownerId: string) {
        console.info('============= START : Create Todo ===========');
        const todo: TodoDto = {
            action,
            doneAt,
            ownerId,
        };

        await ctx.stub.putState(todoNumber, Buffer.from(JSON.stringify(todo)));
        console.info('============= END : Create Todo ===========');
    }

    public async editTodo(ctx: Context, todoNumber: string, action: string, doneAt: string, ownerId: string) {
        console.info('============= START : Edit Todo ===========');

        const todo: TodoDto = {
            action,
            doneAt,
            ownerId,
        };

        await ctx.stub.putState(todoNumber, Buffer.from(JSON.stringify(todo)));
        console.info('============= END : Edit Todo ===========');
    }


    public async getAllTodo(ctx: Context): Promise<string> {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    public async doneAction(ctx: Context, todoNumber: string, doneAt: string) {
        console.info('============= START : Finish Action ===========');

        const todoAsBytes = await ctx.stub.getState(todoNumber); // get the todo from chaincode state
        if (!todoAsBytes || todoAsBytes.length === 0) {
            throw new Error(`${todoNumber} does not exist`);
        }
        const todo: TodoDto = JSON.parse(todoAsBytes.toString());
        todo.doneAt = doneAt;

        await ctx.stub.putState(todoNumber, Buffer.from(JSON.stringify(todo)));
        console.info('============= END : Finish Action ===========');
    }

}
