import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDTO } from 'src/dtos/order.dto';
import { Order } from 'src/models/order.model';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}
  getOrders() {
    return this.orderModel.find();
  }
  addOrder(newOrder: OrderDTO) {
    const order = new this.orderModel({
      order: newOrder.order,
      customer: newOrder.customer,
    });
    return order.save();
  }
  deleteOrder(id: string) {
    return this.orderModel.deleteOne({ _id: id });
  }
  async updateOrder(id: string, updatedOrder: OrderDTO) {
    const order = await this.orderModel.updateOne(
      { _id: id },
      {
        $set: {
          name: updatedOrder.order,
          customer: updatedOrder.customer,
        },
      },
    );
    return order;
  }
  deleteAllOrders() {
    return this.orderModel.deleteMany({});
  }
}
