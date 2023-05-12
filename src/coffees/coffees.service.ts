import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffes: Coffee[] = [
    {
      id: 1,
      name: 'hot coffee',
      brand: 'buddy brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  index() {
    return this.coffes;
  }

  show(id: string) {
    const coffee = this.coffes.find((item) => item.id == +id);
    if (!coffee) {
      throw new NotFoundException(`coffee #${id} not found !`);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    // return this.coffes.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.show(id);
    if (existingCoffee) {
      //update
    }
    // return updateCoffeeDto;
  }

  delete(id: string) {
    const coffeeIndex = this.coffes.findIndex((item) => item.id == +id);
    if (coffeeIndex >= 0) {
      this.coffes.splice(coffeeIndex, 1);
    }
  }
}
