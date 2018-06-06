/* tslint:disable */
import { Address } from './address';
import { Subjects } from './subjects';
import { ClassLevel } from './class-level';

export interface Teachers {

  id?: number;

  name?: string;

  surname?: string;

  address?: Address;

  subjects?: Subjects[];

  classLevels?: ClassLevel[];
}
