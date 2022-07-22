import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BoolInput } from './BoolInput';

export default {
	title: 'InputComponents/BoolInput',
	component: BoolInput,
} as ComponentMeta<typeof BoolInput>;

// eslint-disable-next-line react/function-component-definition
const BoolTemplate: ComponentStory<typeof BoolInput> = args => (
	<BoolInput {...args} />
);

export const Bool = BoolTemplate.bind({});
Bool.args = {
	input: false,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setInput: () => { },
};
