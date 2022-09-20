import dayjs from 'dayjs/esm';

import { IVendedor, NewVendedor } from './vendedor.model';

export const sampleWithRequiredData: IVendedor = {
  id: 78413,
  firstName: 'Victoria',
  lastName: 'Camacho',
  email: 'Germn.Alfaro@hotmail.com',
  phoneNumber: 'Especialista Pasaje Valenciana',
  hireDate: dayjs('2022-09-19T02:59'),
  salary: 49534,
  commissionPct: 52727,
};

export const sampleWithPartialData: IVendedor = {
  id: 37621,
  firstName: 'Fernando',
  lastName: 'Olmos',
  email: 'Raquel_Solorio40@gmail.com',
  phoneNumber: 'Borders withdrawal Loan',
  hireDate: dayjs('2022-09-18T17:38'),
  salary: 37542,
  commissionPct: 96531,
};

export const sampleWithFullData: IVendedor = {
  id: 11033,
  firstName: 'Margarita',
  lastName: 'Sauceda',
  email: 'Marisol.Bermdez57@hotmail.com',
  phoneNumber: 'Ladrillo',
  hireDate: dayjs('2022-09-18T15:14'),
  salary: 15997,
  commissionPct: 71640,
};

export const sampleWithNewData: NewVendedor = {
  firstName: 'Tomás',
  lastName: 'Sosa',
  email: 'JosMara89@gmail.com',
  phoneNumber: 'Humano Metical expedite',
  hireDate: dayjs('2022-09-19T08:27'),
  salary: 49288,
  commissionPct: 42319,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
