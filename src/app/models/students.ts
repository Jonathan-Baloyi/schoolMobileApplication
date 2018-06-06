/* tslint:disable */
import { Address } from './address';
import { Subjects } from './subjects';

export interface Students {

  id?: number;

  name?: string;

  surname?: string;

  address?: Address;

  subjects?: Subjects[];

  classLevelId?: number;
}
