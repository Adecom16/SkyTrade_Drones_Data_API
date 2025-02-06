// src/regions/regions.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateRegionDto } from './dto/create-region.dto';

@Injectable()
export class RegionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRegionDto) {
    return this.prisma.location.create({ data });
  }

  async findAll() {
    return this.prisma.location.findMany({ include: { drones: true } });
  }

  async findOne(id: number) {
    return this.prisma.location.findUnique({
      where: { id },
      include: { drones: true },
    });
  }
}
