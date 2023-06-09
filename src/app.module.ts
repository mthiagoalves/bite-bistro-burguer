import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableModule } from './tables/table.module';

@Module({
  imports: [TableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
