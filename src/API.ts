import generatedJSON from './data/generated2.json';

export interface JSONRow {
  id: string;
  isActive: boolean;
  picture: string;
  age: number;
  name: string;
  email: string;
  address: string;
  about: string;
  registered: string;
}

export const API = {
	loadData: (): JSONRow[] => generatedJSON as JSONRow[],
};
