import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MAX_NAME_LENGTH } from '../user.constant';
import { IsEmail } from 'class-validator';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uid: string;

  @IsEmail()
  @Column()
  email: string;

  @Column({ length: MAX_NAME_LENGTH, default: '' })
  name: string;

  static from(param: Partial<User>): User {
    const user = new User();
    Object.assign(user, param);
    return user;
  }
}
