import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne, Relation, BaseEntity } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @OneToMany(() => UserAttachments, (attachments) => attachments.user, { cascade: true })
  attachments: UserAttachments[]

  @OneToMany(() => Test, (tests) => tests.user, { cascade: true })
  tests: Test[]
}

@Entity({name: 'user_attachments'})
export class UserAttachments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  attachment: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}

@Entity({name: "test"})
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  test: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}