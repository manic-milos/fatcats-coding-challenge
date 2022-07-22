import { InputControlProps } from './InputControlProps';

// TODO type='datetime-local' is not supported on every browser
export function DateInput({ input, setInput }:InputControlProps<string>) {
	return (
		<div>
			<input type="datetime-local" value={input} onChange={e => setInput(e.currentTarget.value)} />
		</div>
	);
}
