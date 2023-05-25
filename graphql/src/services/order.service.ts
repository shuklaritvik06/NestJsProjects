import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderInput } from 'inputs/OrderInput';
import { Model } from 'mongoose';
import { Order } from 'src/schemas/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}
  findById(id) {
    return this.orderModel.findById(id);
  }
  findAll() {
    return this.orderModel.find();
  }
  createOrder(order: OrderInput): Order {
    console.log(order);

    const newOrder = new this.orderModel({
      order_name: order.order_name,
      order_delivery: order.order_delivery,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    return {
      order_name: newOrder.order_name,
      order_delivery: newOrder.order_delivery,
      created_at: newOrder.created_at,
      updated_at: newOrder.updated_at,
    };
  }
  deleteOrder(id) {
    return this.orderModel.findByIdAndDelete(id);
  }
  updateOrder(id, order: OrderInput) {
    return this.orderModel.findByIdAndUpdate(id, order, {
      new: true,
      useFindAndModify: false,
    });
  }
}
