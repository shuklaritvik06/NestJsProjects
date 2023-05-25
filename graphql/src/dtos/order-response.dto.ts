import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Order')
export class OrderResponse {
  @Field()
  order_name: string;
  @Field()
  order_delivery: string;
}
