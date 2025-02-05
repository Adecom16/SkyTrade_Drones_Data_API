import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DronesModule } from './drones/drones.module';
import { RegionsModule } from './regions/regions.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DronesModule,
    RegionsModule,
  ],
})
export class AppModule {}
