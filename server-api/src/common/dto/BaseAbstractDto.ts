import type { BaseAbstractEntity } from '../BaseAbstract.entity';

export class BaseAbstractDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(entity: BaseAbstractEntity) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
