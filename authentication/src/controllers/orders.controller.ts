import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { OrderDTO } from 'src/dtos/order.dto';
import { JwtGuard } from 'src/guards/jwt.guard';
import { OrderService } from 'src/services/order.service';

@Controller()
@UseGuards(JwtGuard)
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get('orders')
  getOrders() {
    return this.orderService.getOrders();
  }
  @Post('add')
  addOrder(@Body() newOrder: OrderDTO) {
    return this.orderService.addOrder(newOrder);
  }
  @Delete('delete/:id')
  deleteOrder(@Param('id') id: string) {
    return this.orderService.deleteOrder(id);
  }
  @Delete('delete')
  deleteAllOrders() {
    return this.orderService.deleteAllOrders();
  }
  @Put('update/:id')
  updateOrder(@Param('id') id: string, @Body() updatedOrder: OrderDTO) {
    return this.orderService.updateOrder(id, updatedOrder);
  }
}
