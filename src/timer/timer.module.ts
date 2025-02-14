import { Module } from '@nestjs/common';
import { TimerService } from './timer.service';
import { TimerController } from './timer.controller';
import { TimerSchema } from './timer.entity';
import { Timer } from './timer.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Timer.name, schema: TimerSchema }])],
  controllers: [TimerController],
  providers: [TimerService],
})
export class TimerModule {}
