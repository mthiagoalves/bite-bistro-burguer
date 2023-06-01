import {Controller, Get} from "@nestjs/common";

@Controller('table')
export class TableController {

  @Get()
  findall(){
    return 'Get all tables'
  }
}
