import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from 'src/controllers/customers/Customer.controller';
import { Customer, CustomerSchema } from 'src/models/customerModel';
import { CustomerService } from 'src/services/customers/Customer.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
