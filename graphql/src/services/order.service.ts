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
  async findById(id) {
    const data = await this.orderModel.findOne({
      _id: id,
    });
    return {
      order_name: data?.order_name,
      order_delivery: data?.order_delivery,
    };
  }
  async findAll() {
    const data = await this.orderModel.find({});
    const temp = [];
    console.log(data);

    data.forEach((element) => {
      temp.push({
        order_name: element?.order_name,
        order_delivery: element?.order_delivery,
      });
    });
    console.log(temp);

    return temp;
  }
  createOrder(order: OrderInput): Order {
    const newOrder = new this.orderModel({
      order_name: order.order_name,
      order_delivery: order.order_delivery,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    newOrder.save().then(() => {
      console.log('Added');
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
