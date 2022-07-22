import { InputControlProps } from './InputControlProps';

export function BoolInput({ input, setInput }: InputControlProps<boolean>) {
	return (
		<div>
			<span>true</span>
			<input type="radio" checked={input} onChange={e => setInput(true)} />
			<br />
			<span>false</span>
			<input type="radio" checked={!input} onChange={e => setInput(false)} />
		</div>
	);
}
