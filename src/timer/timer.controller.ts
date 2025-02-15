import { Controller, Get, Post, Sse } from '@nestjs/common';
import { TimerService } from './timer.service';

@Controller('timer')
export class TimerController {
  constructor(private readonly timerService: TimerService) {}

  @Get('startTimer')
  async startTimer() {
    return await this.timerService.startTimer();
  }

  @Post('stopTimer')
  async stopTimer() {
    return await this.timerService.stopTimer();
  }
}
