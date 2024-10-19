import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class Auth extends Document {
    @Prop({required:true})
    name : string;

    @Prop({required:true})
    passwrod : string

}
export const userSchema = SchemaFactory.createForClass(Auth)