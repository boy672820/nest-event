import { Module } from '@nestjs/common';
import { OrderListener } from './order.listener';
import { OrderService } from './order.service';

@Module({
  providers: [OrderService, OrderListener],
})
export class OrderModule {}
