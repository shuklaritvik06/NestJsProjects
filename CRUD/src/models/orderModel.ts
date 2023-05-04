import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Customer } from './customerModel';

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
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }] })
  customers: Customer[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
