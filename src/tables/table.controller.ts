import {Controller, Get, Post, Patch} from "@nestjs/common";
import { TableService } from "./table.service";

@Controller('table')
export class TableController {
  constructor(private readonly tableService:TableService){}

  @Get()
  findall(){
    return this.tableService.findAll();
  }

  @Get()
  findOne(){
    return this.tableService.findOne();
  }

  @Post()
  create(){
    return this.tableService.create();
  }

  @Patch()
  update(){
    return this.tableService.update();
  }

}
