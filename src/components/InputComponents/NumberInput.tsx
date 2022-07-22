import { InputControlProps } from './InputControlProps';

export function NumberInput({ input, setInput }:InputControlProps<number>) {
	return (
		<div>
			<input type="number" value={input} onChange={e => setInput(e.currentTarget.valueAsNumber)} />
		</div>
	);
}
