import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Device } from 'src/devices/devices.entity';
import { Timer } from 'src/timer/timer.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ auto: true, type: mongoose.Schema.Types.ObjectId })
    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: '' })
    salt: string;
    
    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Device' })
    devices: Device[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Timer' })
    timer: Timer; 
}

export const UserSchema = SchemaFactory.createForClass(User);
