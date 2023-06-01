import { Injectable } from '@nestjs/common';

@Injectable()
export class TableService{

  findAll(){
    return 'Get all tables';
  }

  findOne(){
    return 'Find a especific table';
  }

  create() {
    return 'Create one table'
  }

  update() {
    return 'Update table'
  }
}
