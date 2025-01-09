import { Module } from '@nestjs/common';
import { VenderService } from './vender.service';
import { VenderController } from './vender.controller';

@Module({
  controllers: [VenderController],
  providers: [VenderService],
})
export class VenderModule {}
