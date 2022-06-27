import React from 'react';

export function BoolInput({ input, setInput }:{input:boolean, setInput:(arg:boolean)=>void}) {
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
