import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({
  autoCreate: true,
  collection: 'customers',
  minimize: true,
})
export class Customer {
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

export const CustomerSchema = SchemaFactory.createForClass(Customer);
