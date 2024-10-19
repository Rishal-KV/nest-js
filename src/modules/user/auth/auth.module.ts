import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, userSchema } from './entities/auth.entity';
@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: Auth.name, schema: userSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
