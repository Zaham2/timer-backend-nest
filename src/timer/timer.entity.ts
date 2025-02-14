import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TimerDocument = Timer & Document;

@Schema()
export class Timer {
  @Prop({ required: true })
  startTime: Date;

  @Prop({ required: true })
  duration: number; // Duration in seconds

  @Prop({ required: true, default: false })
  isActive: boolean;

  @Prop({ required: true, default: 0 })
  remainingTime: number; // Remaining time in seconds

  @Prop({ default: Date.now })
  lastUpdated: Date;
}

export const TimerSchema = SchemaFactory.createForClass(Timer);
