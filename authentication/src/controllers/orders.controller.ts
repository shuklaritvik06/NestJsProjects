import { Controller } from '@nestjs/common';
import { OrderService } from 'src/services/order.service';

@Controller()
export class OrderController {
  constructor(private orderService: OrderService) {}
}
