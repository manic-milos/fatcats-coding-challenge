import { useState, useEffect } from 'react';
import { API, JSONRow } from '../API';

export const useLoadData = () : {data:JSONRow[]} => {
	const [data, setData] = useState<JSONRow[]>([]);

	useEffect(() => {
		setData(API.loadData());
		return () => {
			setData([]);
		};
	}, []);

	return { data };
};
