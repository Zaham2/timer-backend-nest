import { Injectable } from '@nestjs/common';
import { RedisService, DEFAULT_REDIS } from '@liaoliaots/nestjs-redis';
import { Redis } from 'ioredis';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Timer } from './timer.entity';

@Injectable()
export class TimerService {
    private readonly redis: Redis;

    constructor(
        private readonly redisService: RedisService,
        @InjectModel(Timer.name) private timerModel: Model<Timer>
    ) {
        this.redis = this.redisService.getOrThrow();
    }
    
    async startTimer() {
        await this.redis.set('key', 'Redis data!');
        const redisData = await this.redis.get("key");
        console.log(redisData);
        return { redisData };
    }

    async stopTimer() {
        await this.redis.del('key');
        return { message: 'Timer stopped' };
    }
}
