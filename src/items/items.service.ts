import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
	constructor(
		@InjectModel(Item)
		private itemModel: typeof Item,
	 ) {}

  create(createItemDto: CreateItemDto) {
    try {
      return this.itemModel.create(createItemDto);
    } catch (error) {
      console.log(error)
    }

  }

  findAll() {
    return  this.itemModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(itemid: number, updateItemDto: UpdateItemDto) {
    return this.itemModel.update(updateItemDto, {where: {id: itemid}})
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
