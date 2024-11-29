import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class XXX extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Entity 생성
   * EX> const user = User.from({id});
   */
  static from(param: Partial<XXX>): XXX {
    const entity = new XXX();
    Object.assign(entity, param);
    return entity;
  }
}
