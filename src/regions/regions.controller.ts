import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('regions')
@UseGuards(JwtAuthGuard)
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionsService.create(createRegionDto);
  }

  @Get()
  findAll() {
    return this.regionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionsService.findOne(+id);
  }
}
