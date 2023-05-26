import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderInput } from 'inputs/OrderInput';
import { OrderResponse } from 'src/dtos/order-response.dto';
import { ResponseDTO } from 'src/dtos/response.dto';
import { OrderService } from 'src/services/order.service';

@Resolver()
export class OrderResolver {
  constructor(private orderService: OrderService) {}
  @Query(() => ResponseDTO)
  status() {
    return {
      status: 'OK',
      author: 'Ritvik Shukla',
      description: 'NestJS GraphQL API',
      apiVersion: '1.0.0',
    };
  }
  @Query(() => [OrderResponse])
  async getOrders() {
    return await this.orderService.findAll();
  }
  @Query(() => OrderResponse)
  async getOrder(@Args('id') id: string) {
    return await this.orderService.findById(id);
  }
  @Mutation(() => OrderResponse)
  async addOrder(@Args('input') input: OrderInput) {
    const object = this.orderService.createOrder(input);
    const data = await object;
    return {
      order_delivery: data.order_delivery,
      order_name: data.order_name,
    };
  }
  @Mutation(() => OrderResponse)
  async deleteOrder(@Args('id') id: string) {
    return this.orderService.deleteOrder(id);
  }
  @Mutation(() => OrderResponse)
  async updateOrder(@Args('id') id: string, @Args('input') input: OrderInput) {
    return this.orderService.updateOrder(id, input);
  }
}
