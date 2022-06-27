import React, { useState } from 'react';
import { FixedSizeList } from 'react-window';
import { JSONRow } from '../../API';
import { EditRow } from '../EditRow/EditRow';
import { TableRow } from '../TableRow/TableRow';
import { createWrapper, StateWrapper } from './StateWrappers';

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

function RowRenderer(data: JSONRow[], height: number, margin: number) {
	return function Row({
		index,
		style,
	}: {
    index: number;
    style: React.CSSProperties;
  }) {
		const row = data[index];
		const states: StatesWrapper = {
			isActive: createWrapper(useState(row.isActive)),
			picture: createWrapper(useState(row.picture)),
			age: createWrapper(useState(row.age)),
			name: createWrapper(useState(row.name)),
			email: createWrapper(useState(row.email)),
			address: createWrapper(useState(row.address)),
			about: createWrapper(useState(row.about)),
			registered: createWrapper(useState(row.registered)),
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

type ListProps = {
  height: number;
  width: number;
  itemData: JSONRow[];
  itemCount: number;
  itemSize: number;
  margins: number;
};

// eslint-disable-next-line react/function-component-definition
export function List({
	height,
	width,
	itemData,
	itemCount,
	itemSize,
	margins,
}: ListProps) {
	return (
		<FixedSizeList
			height={height}
			width={width}
			itemData={itemData}
			itemCount={itemCount}
			itemSize={itemSize * 2 + 4 * margins}
		>
			{RowRenderer(itemData, itemSize, margins)}
		</FixedSizeList>
	);
}
