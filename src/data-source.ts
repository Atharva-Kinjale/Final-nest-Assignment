
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Atharva@123',
  database: 'dummydatabase',
  synchronize: false, // Turn off sync when using migrations
  logging: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [
    // './migrations/*.ts'
  ],

  // migartion with 2 file s1 for create table and one for adding foreign keys
  // migrations: [
  //   './SinglMmigrations/**.ts'
  // ],
  subscribers: [],
});
