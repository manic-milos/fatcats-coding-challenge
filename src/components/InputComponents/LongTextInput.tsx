import { InputControlProps } from './InputControlProps';

export function LongTextInput({ input, setInput }:InputControlProps<string>) :JSX.Element {
	return (
		<div>
			<textarea onChange={e => setInput(e.currentTarget.value)} value={input} />
		</div>
	);
}
