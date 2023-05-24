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
  email: string;
  @Prop({
    type: String,
    required: true,
  })
  username: string;
  @Prop({
    type: String,
    required: true,
  })
  password: string;
  @Prop({
    type: String,
    default: Date.now,
  })
  created_at: string;
  @Prop({
    type: String,
  })
  token: string;
  @Prop({
    type: String,
  })
  refresh_token: string;
  @Prop({
    type: String,
    default: Date.now,
  })
  updated_at: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
