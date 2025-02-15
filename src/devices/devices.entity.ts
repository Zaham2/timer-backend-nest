import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema()
export class Device {
    @Prop({ required: true, default: '' })
    _id: string;

    @Prop({ required: true, default: '' })
    name: string;
}