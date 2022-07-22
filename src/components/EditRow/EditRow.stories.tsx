import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditRow } from './EditRow';
import { JSONRow } from '../../API';
import { StatesWrapper } from '../MainTable/RowRenderer';

export default {
	title: 'EditRow',
	component: EditRow,
	args: {
		rowHeight: 35,
		margin: 20,
		row: {
			id: '62ba03c9fac17cfb53a0157d',
			isActive: false,
			picture: 'http://placehold.it/32x32',
			age: 40,
			name: 'Burt Adkins',
			email: 'burtadkins@exoswitch.com',
			address: '799 Forest Place, Chilton, Marshall Islands, 4287',
			about: 'Dolore excepteur ',
			registered: '2016-10-17T01:08:59',
		},
		states: {
			isActive: { state: false, setState: () => {} },
			picture: { state: 'http://placehold.it/32x32', setState: () => {} },
			age: { state: 40, setState: () => {} },
			name: { state: 'Burt Adkins', setState: () => {} },
			email: { state: 'burtadkins@exoswitch.com', setState: () => {} },
			address: {
				state: '799 Forest Place, Chilton, Marshall Islands, 4287',
				setState: () => {},
			},
			about: { state: 'Dolore excepteur ', setState: () => {} },
			registered: { state: '2016-10-17T01:08:59', setState: () => {} },
		},
	},
} as ComponentMeta<typeof EditRow>;

export function Default(args: {
  row?: JSONRow;
  rowHeight: number;
  margin: number;
  states?: StatesWrapper;
}): ComponentStory<typeof EditRow> {
	return <EditRow {...args} />;
}
