import { Controller, Get } from '@nestjs/common';
import { TimerService } from './timer.service';

@Controller('timer')
export class TimerController {
  constructor(private readonly timerService: TimerService) {}

  @Get()
  async getTimer() {
    return await this.timerService.getTimer();
  }
}
