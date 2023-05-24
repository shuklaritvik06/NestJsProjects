import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({
  autoCreate: true,
  collection: 'orders',
  minimize: true,
})
export class Order {
  @Prop({
    type: String,
    required: true,
  })
  name: string;
  @Prop({
    type: String,
    required: true,
  })
  address: string;
  @Prop({
    type: String,
    required: true,
  })
  phone: string;
  @Prop({
    type: String,
    required: true,
  })
  email: string;
  @Prop({
    type: String,
    required: true,
  })
  father_name: string;
  @Prop({
    type: String,
    required: true,
  })
  created_at: string;
  @Prop({
    type: String,
    required: true,
  })
  updated_at: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
