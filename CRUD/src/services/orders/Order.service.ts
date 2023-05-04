import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderBody } from 'src/dtos/orders/Order.dto';
import { Order } from 'src/models/orderModel';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}
  getAll() {
    return this.orderModel.find();
  }
  async createOrder(order: OrderBody) {
    const data = await this.orderModel.create({
      order_name: order.order_name,
      created_at: new Date().toUTCString(),
      updated_at: new Date().toUTCString(),
      order_delivery: order.order_delivery,
    });
    return data;
  }
  deleteOrder(id: string) {
    return this.orderModel.deleteOne({ _id: id });
  }
  async updateOrder(id: string, order: OrderBody) {
    const data = await this.orderModel.updateOne(
      { _id: id },
      {
        order_name: order.order_name,
        updated_at: new Date().toUTCString(),
        order_delivery: order.order_delivery,
      },
    );
    return data;
  }
  getOrder(id: string) {
    return this.orderModel.findById(id);
  }
}
