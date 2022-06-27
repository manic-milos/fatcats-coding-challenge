import React from 'react';

export function LongTextInput({ input, setInput }:{input:string, setInput:(arg:string)=>void}) {
	return (
		<div>
			<textarea onChange={e => setInput(e.currentTarget.value)} value={input} />
		</div>
	);
}
