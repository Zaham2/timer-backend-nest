import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Device {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;
}
