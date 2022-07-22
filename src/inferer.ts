export enum DataType {
  ID = 'ID',
  NUM = 'NUM',
  BOOL = 'BOOL',
  EMAIL='EMAIL',
  LONG='LONG',
  DATE='DATE',
  STRING='STRING'
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inferString = (obj: any, key: string): DataType | null => {
	if (typeof obj[key] === 'string') { return DataType.STRING; }
	return null;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inferDate = (obj: any, key: string): DataType | null => {
	if (typeof obj[key] === 'string' && isNaN(Number(obj[key])) && (!isNaN(Date.parse(obj[key])))) { return DataType.DATE; }
	return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inferLongText = (obj: any, key: string): DataType | null => {
	if (typeof obj[key] === 'string' && obj[key].length > LONGLENGTH) { return DataType.LONG; }
	return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inferEmail = (obj: any, key: string): DataType | null => {
	if (obj[key].match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/g)) { return DataType.EMAIL; }
	return null;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inferBoolean = (obj: any, key: string): DataType | null => {
	if (typeof obj[key] === 'boolean') return DataType.BOOL;
	return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inferNumber = (obj: any, key: string): DataType | null => {
	if (typeof obj[key] === 'number') return DataType.NUM;
	return null;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inferId = (obj: any, key: string): DataType | null => {
	if (key.match(/_?[iI][dD]/g)) return DataType.ID;
	return null;
};

const LONGLENGTH = 50;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const InferTypes = (obj: any) => {
	const keys = Object.keys(obj);
	const k = keys.map((key) => {
		return [key, inferId(obj, key) ?? inferNumber(obj, key) ?? inferBoolean(obj, key)
        ?? inferEmail(obj, key) ?? inferLongText(obj, key) ?? inferDate(obj, key) ?? inferString(obj, key)];
	});
	return Object.fromEntries(k);
};
