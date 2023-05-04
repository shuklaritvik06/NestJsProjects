import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerBody } from 'src/dtos/customers/Customer.dto';
import { Customer } from 'src/models/customerModel';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  getAll() {
    return this.customerModel.find();
  }
  async createCustomer(customer: CustomerBody) {
    const data = await this.customerModel.create({
      address: customer.customer_address,
      email: customer.customer_email,
      father_name: customer.customer_father_name,
      name: customer.customer_name,
      phone: customer.customer_phone,
      created_at: new Date().toUTCString(),
      updated_at: new Date().toUTCString(),
    });
    return data;
  }
  deleteCustomer(id: string) {
    return this.customerModel.deleteOne({ _id: id });
  }
  async updateCustomer(id: string, customer: CustomerBody) {
    const data = await this.customerModel.updateOne(
      { _id: id },
      {
        address: customer.customer_address,
        email: customer.customer_email,
        father_name: customer.customer_father_name,
        name: customer.customer_name,
        phone: customer.customer_phone,
        updated_at: new Date().toUTCString(),
      },
    );
    return data;
  }
  getCustomer(id: string) {
    return this.customerModel.findById(id);
  }
}
