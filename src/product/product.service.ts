import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  async create(data: CreateProductDto): Promise<any> {
    this.eventEmitter.emit('order.created', data);
    return data;
  }
}
