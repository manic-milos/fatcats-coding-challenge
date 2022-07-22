import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainTable } from './MainTable';

test('it renders', () => {
	render(<MainTable />);
});

test('it loads data', () => {
	render(<MainTable />);
	const id = screen.getAllByTestId('labelrowid');
	expect(id.length).toBeGreaterThan(1);
});
