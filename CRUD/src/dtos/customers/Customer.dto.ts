import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CustomerBody {
  @IsNotEmpty()
  @IsString()
  customer_name: string;
  @IsNotEmpty()
  @IsString()
  customer_address: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  customer_phone: string;
  @IsNotEmpty()
  @IsString()
  customer_email: string;
  @IsNotEmpty()
  @IsString()
  customer_father_name: string;
  @Optional()
  created_at: string;
  @Optional()
  updated_at: string;
}
