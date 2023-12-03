import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { EmployersModule } from './employers/employers.module';
import { DepartmentsModule } from './departments/departments.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          load: [databaseConfig],
        }),
      ],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: config.get('type') satisfies PostgresConnectionOptions['type'],
          host: config.get<string>('host'),
          port: config.get<number>('port'),
          username: config.get<string>('user'),
          password: config.get<string>('password'),
          database: config.get<string>('database'),
          autoLoadEntities: true,
        };
      },
    }),
    EmployersModule,
    DepartmentsModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
