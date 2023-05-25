import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderResolver } from 'src/resolvers/order.resolver';
import { OrderSchema } from 'src/schemas/order.schema';
import { OrderService } from 'src/services/order.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Order',
        schema: OrderSchema,
      },
    ]),
  ],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}
