import { Role } from './role';

export interface Customer {
  id: number;
  login: string;
  lastName: string;
  firstName: string;
  birthday: Date;
  inscriptionDate: Date;
  vat: string;
  mail: string;
  password: string;
  status: boolean;
  actif: boolean;
  role: Role;
}
