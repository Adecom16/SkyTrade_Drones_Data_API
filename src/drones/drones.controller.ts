// src/drones/drones.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DronesService } from './drones.service';
import { CreateDroneDto } from './dto/create-drone.dto';
import { UpdateDroneDto } from './dto/update-drone.dto';

@Controller('drones')
export class DronesController {
  constructor(private readonly dronesService: DronesService) {}

  @Post()
  async create(@Body() createDroneDto: CreateDroneDto) {
    return this.dronesService.create(createDroneDto);
  }

  @Get()
  async findAll() {
    return this.dronesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.dronesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDroneDto: UpdateDroneDto,
  ) {
    return this.dronesService.update(+id, updateDroneDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.dronesService.remove(+id);
  }
}
