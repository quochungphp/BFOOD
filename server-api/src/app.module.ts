import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import ormconfig from '../ormconfig';
console.log('ormconfig', JSON.stringify(ormconfig));
@Module({
  imports: [GraphQLModule.forRoot({}), TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
