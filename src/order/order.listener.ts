import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OrderService } from './order.service';

@Injectable()
export class OrderListener {
  constructor(
    private readonly orderService: OrderService,
  ) {}

  @OnEvent('order.created')
  async subscribeCreated(payload: any) {
    this.orderService.create(payload);
  }
}
