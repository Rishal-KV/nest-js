import { Injectable, NotFoundException } from '@nestjs/common';
import { Auth } from './entities/auth.entity';
import { AuthDto } from './dto/auth-Dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private userModel: Model<Auth>) {}
  async Login(authDto: AuthDto): Promise<string> {
    const user = await this.userModel.findOne({ email: authDto.email });

    if (!user) {
      throw new NotFoundException(
        'User not found. Please register or check your email.',
      );
    }

    // const isMatch = await bcrypt.compare(authDto.password, user.password);

    // if (!isMatch) {
    //   throw new NotFoundException('Invalid credentials. Please try again.');
    // }

    // return `Welcome back, ${user.email}!`;
    return ""
  }
}
