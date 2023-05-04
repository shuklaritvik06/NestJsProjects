import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export class OrderBody {
  @IsNotEmpty()
  @IsString()
  order_name: string;
  @IsNotEmpty()
  @IsString()
  order_delivery: string;
  @IsDateString()
  @Optional()
  created_at: Date;
  @IsDateString()
  @Optional()
  updated_at: Date;
}
