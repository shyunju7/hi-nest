import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getHome() {
    return 'welcome to my Movie API';
  }
}