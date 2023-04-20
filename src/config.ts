import { DataSource } from 'typeorm';
import { Test, User, UserAttachments } from './entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [User, UserAttachments],
  synchronize: true,
  // logging: true,
});
