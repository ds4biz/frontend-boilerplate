import { RootState } from 'store';

export const valueSelector = (state: RootState) => state.example.value;
