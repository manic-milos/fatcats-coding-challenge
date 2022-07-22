import React from 'react';
import { render } from '@testing-library/react';
import { BoolInput } from './BoolInput';

test('they render', () => {
	const state = true;
	const setState = (s: boolean) => undefined;
	render(<BoolInput input={state} setInput={setState} />);
});
