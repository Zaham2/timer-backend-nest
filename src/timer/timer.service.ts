import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Timer, TimerDocument } from './timer.entity';
import { Observable } from 'rxjs';

@Injectable()
export class TimerService {
    [x: string]: any;
    constructor(
        @InjectModel(Timer.name) private timerModel: Model<TimerDocument>,
        private eventEmitter: EventEmitter2
    ) {}

    async updateTimer(timerId: string, data: any) {
        const timer = await this.timerModel.findByIdAndUpdate(timerId, data, { new: true });
        if (timer) {
            this.eventEmitter.emit('timer.updated', timer);
        }
        return timer;
    }

    async getTimerUpdates() {
        return new Observable((subscriber) => {
            const handler = (timer) => subscriber.next(timer);
            this.eventEmitter.on('timer.updated', handler);
            
            return () => {
                this.eventEmitter.off('timer.updated', handler);
            };
        });
    }
}
