import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class TimerService {

    constructor(@InjectConnection() private readonly connection: Connection) {}

    async getTimer() {
        const timer = await this.connection.db?.admin().ping();
        return timer;
    }
}
