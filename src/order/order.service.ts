import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  async create(data: any): Promise<any> {
    console.log('Created order: ', data);
  }
}
