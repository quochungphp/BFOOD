import { Entity, Column } from 'typeorm';
import { BaseAbstractEntity } from '../../common/BaseAbstract.entity';

@Entity()
export class UserEntity extends BaseAbstractEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
