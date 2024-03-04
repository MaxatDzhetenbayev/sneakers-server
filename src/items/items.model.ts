import { Column, Model, Table } from 'sequelize-typescript';


interface ItemAttributes{
	title: string
	image: string
	price: number
}

@Table({tableName: 'items', timestamps: false})
export class Item extends Model<ItemAttributes> {
  @Column
  title: string;
  @Column
  image: string;
  @Column({ defaultValue: true })
  price: boolean;
}