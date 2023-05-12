import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffesService: CoffeesService) {}

  @Get()
  index(@Query() paginationQuary) {
    // const { limit, offset } = paginationQuary;
    return this.coffesService.index();
    // return `index limit ${limit} offset ${offset}`;
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.coffesService.show(id);
    // return `show ${id}`;
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffesService.create(createCoffeeDto);
    // return `create ${body.name}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffesService.update(id, updateCoffeeDto);
    // return `update ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffesService.delete(id);
    //   return `delete ${id}`;
  }
}
