import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OrderInput {
  @Field()
  order_name: string;
  @Field()
  order_delivery: string;
}
