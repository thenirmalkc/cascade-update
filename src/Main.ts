import { DataSource } from 'typeorm';
import { AppDataSource } from './config';
import { User } from './entity';


AppDataSource.initialize().then(async (dataSource: DataSource) => {
  const userRepo = dataSource.getRepository(User)
  await userRepo.save(userRepo.create({
    id: 4,
    name: 'zxc',
    age: 20,
    attachments: [
      { attachment: 'a' },
      { attachment: 'a' }
    ]
  }));
});