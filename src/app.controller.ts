import { Get, Controller } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  root(): any {
    return { status: 'ok' };
  }
}