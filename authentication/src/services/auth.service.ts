import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerDTO } from 'src/dtos/customer.dto';
import { LoginDTO } from 'src/dtos/login.dto';
import { Customer } from 'src/models/customer.model';
import { comparePass, hashPass } from 'src/utils/utils';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
    private readonly jwtService: JwtService,
  ) {}
  getUser(id: string) {
    return this.customerModel.findOne({ _id: id });
  }
  async signup(newUser: CustomerDTO) {
    const userFound = await this.customerModel.findOne({
      username: newUser.username,
    });
    if (userFound) {
      throw new ConflictException(
        `User with username ${newUser.username} already exists`,
      );
    }
    const user = new this.customerModel({
      email: newUser.email,
      name: newUser.name,
      password: await hashPass(newUser.password),
      username: newUser.username,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      token: this.jwtService.sign(
        {
          username: newUser.username,
          sub: newUser.email,
          expiry: new Date().getTime() + 24 * 60 * 60 * 1000,
        },
        {
          secret: process.env.JWT_SECRET,
          algorithm: 'HS256',
        },
      ),
      refresh_token: this.jwtService.sign(
        {
          username: newUser.username,
          sub: newUser.email,
          expiry: new Date().getTime() + 24 * 3 * 60 * 60 * 1000,
        },
        {
          secret: process.env.JWT_SECRET,
          algorithm: 'HS256',
        },
      ),
    });
    return user.save();
  }
  async login(user: LoginDTO) {
    const userFound = await this.customerModel.findOne({
      username: user.username,
    });
    if (userFound) {
      if (comparePass(user.password, userFound.password)) {
        return userFound;
      } else {
        throw new Error('Password is incorrect');
      }
    }
  }
}
