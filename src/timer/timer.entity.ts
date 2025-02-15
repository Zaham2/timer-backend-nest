import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TIMER_SINGLETON_ID } from '../../lib/constants';

export type TimerDocument = Timer & Document;

@Schema()
export class Timer {

  @Prop({ required: true, default: TIMER_SINGLETON_ID })
  _id: string;

  @Prop({ required: true, default: Date.now })
  startTime: Date;

  @Prop({ required: true, default: 0 })
  duration: number;

  @Prop({ required: true, default: false })
  isActive: boolean;

  @Prop({ required: true, default: 0 })
  remainingTime: number;

  @Prop({ default: Date.now })
  lastUpdated: Date;
}

export const TimerSchema = SchemaFactory.createForClass(Timer);
