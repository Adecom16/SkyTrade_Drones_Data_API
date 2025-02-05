import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateRegionDto } from './dto/create-region.dto';

@Injectable()
export class RegionsService {
  constructor(private prisma: PrismaService) {}

  async create(createRegionDto: CreateRegionDto) {
    return this.prisma.location.create({ data: createRegionDto });
  }

  async findAll() {
    return this.prisma.location.findMany({ include: { drones: true } });
  }

  async findOne(id: number) {
    const region = await this.prisma.location.findUnique({ where: { id } });
    if (!region) throw new NotFoundException('Region not found');
    return region;
  }
}
