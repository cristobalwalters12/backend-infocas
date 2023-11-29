// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NombreSensoresModule } from './nombre-sensores/nombre-sensores.module';
import { NombreSensor } from './entities/nombre-sensor.entity';
import { SensoresModule } from './sensores/sensores.module';
import { Sensores } from './entities/sensores.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DATABASE_HOST'),
        port: +config.get<string>('DATABASE_PORT'),
        username: config.get<string>('DATABASE_USER'),
        password: config.get<string>('DATABASE_PASSWORD'),
        database: config.get<string>('DATABASE_NAME'),
        entities: [NombreSensor, Sensores],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    NombreSensoresModule,
    SensoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
