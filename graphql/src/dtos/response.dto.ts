import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Response')
export class ResponseDTO {
  @Field()
  status: string;
  @Field()
  author: string;
  @Field()
  description: string;
  @Field()
  apiVersion: string;
}
