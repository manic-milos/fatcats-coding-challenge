import React from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

type ListProps<T> = {
  height: number;
  width: number;
  itemData: T[];
  itemCount: number;
  itemSize: number;
  margins: number;
  rowRenderer: (data: T[], height: number, margin: number)=>React.ComponentType<ListChildComponentProps>
};

export function List<T>({
	height,
	width,
	itemData,
	itemCount,
	itemSize,
	margins,
	rowRenderer,
}: ListProps<T>) {
	return (
		<FixedSizeList
			height={height}
			width={width}
			itemData={itemData}
			itemCount={itemCount}
			itemSize={itemSize * 2 + 4 * margins}
		>
			{rowRenderer(itemData, itemSize, margins)}
		</FixedSizeList>
	);
}
