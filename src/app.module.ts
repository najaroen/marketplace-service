import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './services/index'
import { UsersController } from './controllers/index'

@Module({
  imports: [],
  controllers: [AppController,UsersController],
  providers: [AppService,UserService],
})
export class AppModule {}
