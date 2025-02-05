import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateDroneDto } from './dto/create-drone.dto';
import { UpdateDroneDto } from './dto/update-drone.dto';

@Injectable()
export class DronesService {
  constructor(private prisma: PrismaService) {}

  async create(createDroneDto: CreateDroneDto) {
    return this.prisma.drone.create({ data: createDroneDto });
  }

  async findAll() {
    return this.prisma.drone.findMany({ include: { location: true } });
  }

  async findOne(id: number) {
    const drone = await this.prisma.drone.findUnique({ where: { id } });
    if (!drone) throw new NotFoundException('Drone not found');
    return drone;
  }

  async update(id: number, updateDroneDto: UpdateDroneDto) {
    return this.prisma.drone.update({ where: { id }, data: updateDroneDto });
  }

  async remove(id: number) {
    return this.prisma.drone.delete({ where: { id } });
  }
}
