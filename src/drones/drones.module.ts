// src/drones/drones.module.ts
import { Module } from '@nestjs/common';
import { DronesService } from './drones.service';
import { DronesController } from './drones.controller';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [DronesController],
  providers: [DronesService, PrismaService],
  exports: [DronesService],
})
export class DronesModule {}
