// src/providers/jwt.provider.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtProvider {
  constructor(private readonly jwtService: JwtService) {}

  // Method to generate JWT token
  generateToken(payload: any): string {
    return this.jwtService.sign(payload); // Use the sign method to create a token
  }

  // Method to validate the JWT token
  validateToken(token: string): any {
    return this.jwtService.verify(token); // Use the verify method to check the token
  }
}
