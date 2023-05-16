import {PayloadAction} from '@reduxjs/toolkit';

export const logger = () => (next: any) => (action: PayloadAction) => {
  console.log(`Событие: ${action.type}, данные: `, action.payload);
  return next(action);
}