// src/drones/drones.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateDroneDto } from './dto/create-drone.dto';
import { UpdateDroneDto } from './dto/update-drone.dto';

@Injectable()
export class DronesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateDroneDto) {
    return this.prisma.drone.create({ data });
  }

  async findAll() {
    return this.prisma.drone.findMany({
      include: { location: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.drone.findUnique({
      where: { id },
      include: { location: true },
    });
  }

  async update(id: number, data: UpdateDroneDto) {
    return this.prisma.drone.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.drone.delete({ where: { id } });
  }
}
