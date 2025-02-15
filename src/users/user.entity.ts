import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Device } from 'src/devices/devices.entity';
import { Timer } from 'src/timer/timer.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true, default: '' })
    _id: string;

    @Prop({ required: true, default: '' })
    name: string;

    @Prop({ required: true, default: '' })
    email: string;

    @Prop({ required: true, default: '' })
    password: string;
    
    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Device' })
    devices: Device[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Timer' })
    timer: Timer; 
}

export const UserSchema = SchemaFactory.createForClass(User);
