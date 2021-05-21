import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';

@Module({})
@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [UserController],
  // exports: [UserService],
  // providers: [UserService],
})
export class UserModule {}
