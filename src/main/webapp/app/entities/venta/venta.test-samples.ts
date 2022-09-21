import dayjs from 'dayjs/esm';

import { IVenta, NewVenta } from './venta.model';

export const sampleWithRequiredData: IVenta = {
  id: 20448,
  total: 11440,
  fecha: dayjs('2022-09-18'),
  vehiculo:

};

export const sampleWithPartialData: IVenta = {
  id: 32725,
  total: 11474,
  fecha: dayjs('2022-09-19'),
  vehiculo:
  };

export const sampleWithFullData: IVenta = {
  id: 56225,
  total: 71903,
  fecha: dayjs('2022-09-18'),
  vehiculo:
};

export const sampleWithNewData: NewVenta = {
  total: 41728,
  fecha: dayjs('2022-09-19'),
  id: null,
  vehiculo:
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
