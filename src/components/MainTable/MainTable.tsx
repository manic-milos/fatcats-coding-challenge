import React from 'react';
import { useLoadData } from '../../hooks/useLoadData';

export function MainTable<T>(props: T): JSX.Element {
	const { data } = useLoadData();

	return (<pre>{JSON.stringify(data, null, 2)}</pre>);
}
