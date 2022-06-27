import React from 'react';

export function NumberInput({ input, setInput }:{input:number, setInput:(arg:number)=>void}) {
	return (
		<div>
			<input type="number" value={input} onChange={e => setInput(e.currentTarget.valueAsNumber)} />
		</div>
	);
}
