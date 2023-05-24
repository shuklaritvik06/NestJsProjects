import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Customer } from './customer.model';

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
  order: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }] })
  customer: Customer;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
