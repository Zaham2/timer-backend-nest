import { Module } from '@nestjs/common';
import { TimerModule } from './timer/timer.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DevicesModule } from './devices/devices.module';
import { UsersModule } from './users/users.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/timer-db'),
    EventEmitterModule.forRoot(),
    TimerModule,
    DevicesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
