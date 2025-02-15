// src/regions/dto/create-region.dto.ts
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateRegionDto {
  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsNumber()
  altitude?: number;
}
