import { useState, useEffect } from 'react';
import { API } from '../API';

export const useLoadData = () => {
	const [data, setData] = useState<unknown[]>([]);

	useEffect(() => {
		setData(API.loadData());
		return () => {
			setData([]);
		};
	}, []);

	return { data };
};
