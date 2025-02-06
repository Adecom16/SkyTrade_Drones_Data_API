// src/drones/dto/create-drone.dto.ts
import { IsString, IsNumber, IsOptional, IsInt } from 'class-validator';

export class CreateDroneDto {
  @IsString()
  identifier: string;

  @IsString()
  type: string;

  @IsString()
  status: string;

  @IsNumber()
  battery: number;

  @IsNumber()
  altitude: number;

  @IsNumber()
  speed: number;

  @IsNumber()
  direction: number;

  @IsNumber()
  signalStrength: number;

  @IsInt()
  locationId: number;

  @IsOptional()
  @IsInt()
  ownerId?: number;
}
