import React, { useState } from 'react';
import { JSONRow } from '../../API';
import { EditRow } from '../EditRow/EditRow';
import { TableRow } from '../TableRow/TableRow';
import { createWrapperFromState, StateWrapper } from '../../StateWrappers';

export type StatesWrapper = {
  isActive: StateWrapper<boolean>;
  picture: StateWrapper<string>;
  age: StateWrapper<number>;
  name: StateWrapper<string>;
  email: StateWrapper<string>;
  address: StateWrapper<string>;
  about: StateWrapper<string>;
  registered: StateWrapper<string>;
};

export function RowRenderer(data: JSONRow[], height: number, margin: number) {
	return function Row({
		index,
		style,
	}: {
    index: number;
    style: React.CSSProperties;
  }) {
		const row = data[index];
		const states: StatesWrapper = {
			isActive: createWrapperFromState(useState(row.isActive)),
			picture: createWrapperFromState(useState(row.picture)),
			age: createWrapperFromState(useState(row.age)),
			name: createWrapperFromState(useState(row.name)),
			email: createWrapperFromState(useState(row.email)),
			address: createWrapperFromState(useState(row.address)),
			about: createWrapperFromState(useState(row.about)),
			registered: createWrapperFromState(useState(row.registered)),
		};
		return (
			<div style={style}>
				<TableRow
					row={data[index]}
					rowHeight={height}
					margin={margin}
					states={states}
				/>
				<EditRow
					row={data[index]}
					rowHeight={height}
					margin={margin}
					states={states}
				/>
			</div>
		);
	};
}
