import { InferTypes, DataType } from './inferer';
import data from './data/generated2.json';
import { JSONRow } from './API';

test('it infers id', () => {
	/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
	expect(InferTypes((data as JSONRow[])[0])?.id).toBe(DataType.ID);
});
test('it infers a number', () => {
	expect(InferTypes((data as JSONRow[])[0])?.age).toBe(DataType.NUM);
});
test('it infers a boolean', () => {
	expect(InferTypes((data as JSONRow[])[0])?.isActive).toBe(DataType.BOOL);
});
test('it infers a e-mail', () => {
	expect(InferTypes((data as JSONRow[])[0])?.email).toBe(DataType.EMAIL);
});
test('it infers a long text', () => {
	expect(InferTypes((data as JSONRow[])[0])?.about).toBe(DataType.LONG);
});
test('it infers a date', () => {
	expect(InferTypes((data as JSONRow[])[0])?.registered).toBe(DataType.DATE);
});
test('it infers a string', () => {
	expect(InferTypes((data as JSONRow[])[0])?.name).toBe(DataType.STRING);
});
