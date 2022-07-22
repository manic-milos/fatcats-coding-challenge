import { render } from '@testing-library/react';
import { TableRow } from './TableRow';
import React from 'react';

test('it renders', () => {
	render(<TableRow rowHeight={20} margin={20} />);
});
