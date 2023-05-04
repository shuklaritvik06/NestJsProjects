import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderBody } from 'src/dtos/orders/Order.dto';
import { OrderService } from 'src/services/orders/Order.service';

@Controller('/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Get('/all')
  getAll() {
    return this.orderService.getAll();
  }
  @Post('/create')
  createOrder(@Body() order: OrderBody) {
    return this.orderService.createOrder(order);
  }
  @Get('/:id')
  getOrder(@Param('id') id: string) {
    return this.orderService.getOrder(id);
  }
  @Put('/edit/:id')
  updateOrder(@Param('id') id: string, @Body() order: OrderBody) {
    return this.orderService.updateOrder(id, order);
  }
  @Delete('/delete/:id')
  deleteOrder(@Param('id') id: string) {
    return this.orderService.deleteOrder(id);
  }
}
