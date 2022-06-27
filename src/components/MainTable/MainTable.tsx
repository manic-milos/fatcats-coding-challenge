import React from 'react';
import { useLoadData } from '../../hooks/useLoadData';
import { JSONRow } from '../../API';
import { List } from '../VirtualizedList/List';

export function MainTable(): JSX.Element {
	const { data }: { data: JSONRow[] } = useLoadData();

	if (data.length > 0) {
		return (
			<List
				height={(window.innerHeight ?? 500) - 20}
				width={(window.innerWidth ?? 1500) - 20}
				itemData={data}
				itemCount={1000}
				itemSize={35}
				margins={20}
			/>
		);
	}
	return <p> loading...</p>;
}
