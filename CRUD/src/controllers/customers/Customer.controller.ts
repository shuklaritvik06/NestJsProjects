import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerBody } from 'src/dtos/customers/Customer.dto';
import { CustomerService } from 'src/services/customers/Customer.service';

@Controller('/customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('/all')
  getAll() {
    return this.customerService.getAll();
  }
  @Post('/create')
  createCustomer(@Body() customer: CustomerBody) {
    return this.customerService.createCustomer(customer);
  }
  @Get('/:id')
  getCustomer(@Param('id') id: string) {
    return this.customerService.getCustomer(id);
  }
  @Put('/edit/:id')
  updateCustomer(@Param('id') id: string, @Body() customer: CustomerBody) {
    return this.customerService.updateCustomer(id, customer);
  }
  @Delete('/delete/:id')
  deleteCustomer(@Param('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }
}
