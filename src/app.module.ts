import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller'; 
import { Users } from './users/users.entity';
import { Report } from './reports/reports.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'sqlite',
      database : 'db.sqlite',
      entities : [Users, Report],
      synchronize : true
    }), 
    UsersModule, ReportsModule
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
