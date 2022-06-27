import React from 'react';

// TODO type='datetime-local' is not supported on every browser
export function DateInput({ input, setInput }:{input:string, setInput:(arg:string)=>void}) {
	return (
		<div>
			<input type="datetime-local" value={input} onChange={e => setInput(e.currentTarget.value)} />
		</div>
	);
}
