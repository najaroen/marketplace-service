import { Field, InputType } from '@nestjs/graphql' 

@InputType()
export class UserDomain {
    @Field()
    readonly id: string;
    @Field()
    readonly email: string;
    @Field()
    readonly name: string;
}