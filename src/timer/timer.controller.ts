import { Controller, Get, Post, Sse } from '@nestjs/common';
import { TimerService } from './timer.service';
import { map } from 'rxjs';

@Controller('timer')
export class TimerController {
  constructor(private readonly timerService: TimerService) {}

  @Sse('startTimer')
  async events() {
    return (await this.timerService.getTimerUpdates()).pipe(
      map((timer) => ({ data: timer })),
    );
  }

  @Post('stopTimer')
  async stopTimer() {
    return await this.timerService.stopTimer();
  }

  @Get()
  async getTimer() {
    return await this.timerService.getTimer();
  }
}
