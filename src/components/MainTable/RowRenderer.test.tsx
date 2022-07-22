import { render } from '@testing-library/react';
import React from 'react';
import { API } from '../../API';
import { RowRenderer } from './RowRenderer';

test('it renders', () => {
	render(React.createElement(RowRenderer(API.loadData().slice(0, 10), 20, 20), { index: 1, style: {} }));
});
