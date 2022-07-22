import React from 'react';
import { render } from '@testing-library/react';
import { EditRow } from './EditRow';

describe('EditRow', () => {
	it('renders', () => {
		render(<EditRow rowHeight={35} margin={20} />);
	});
});
