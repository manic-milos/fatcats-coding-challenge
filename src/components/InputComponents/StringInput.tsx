import React from 'react';

export function StringInput({ input, setInput }:{input:string, setInput:(arg:string)=>void}) {
	return (
		<div>
			<input type="text" value={input} onChange={e => setInput(e.currentTarget.value)} />
		</div>
	);
}
