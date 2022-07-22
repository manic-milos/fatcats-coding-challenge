import { InputControlProps } from './InputControlProps';

export function StringInput({ input, setInput }:InputControlProps<string>) {
	return (
		<div>
			<input type="text" value={input} onChange={e => setInput(e.currentTarget.value)} />
		</div>
	);
}
