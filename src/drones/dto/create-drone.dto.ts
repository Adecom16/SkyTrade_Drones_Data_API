import { IsNotEmpty, IsNumber, IsString, Min, Max } from 'class-validator';

export class CreateDroneDto {
  @IsString()
  @IsNotEmpty()
  identifier: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  status: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  battery: number;

  @IsNumber()
  altitude: number;

  @IsNumber()
  speed: number;

  @IsNumber()
  direction: number;

  @IsNumber()
  signalStrength: number;

  @IsNumber()
  locationId: number;
}
