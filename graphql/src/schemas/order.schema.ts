import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Order>;

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
  order_name: string;
  @Prop({
    type: String,
    required: true,
  })
  order_delivery: string;
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
