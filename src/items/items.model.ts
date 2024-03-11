import { Column, Model, Table } from 'sequelize-typescript';


interface ItemAttributes{
  id: number,
	title: string
	imageurl: string
	price: number
}

@Table({tableName: 'items', timestamps: false})
export class Item extends Model<ItemAttributes> {
  @Column
  title: string;
  @Column
  imageurl: string;
  @Column({ defaultValue: true })
  price: boolean;
}