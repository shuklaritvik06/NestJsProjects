import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from 'src/controllers/orders.controller';
import { Order, OrderSchema } from 'src/models/order.model';
import { OrderService } from 'src/services/order.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    OrderModule,
  ],
  providers: [OrderService, JwtService],
  controllers: [OrderController],
})
export class OrderModule {}
