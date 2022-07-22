import React from 'react';
import { JSONRow } from '../../API';
import { StatesWrapper } from '../MainTable/RowRenderer';

interface TableRowProps {
  row?: JSONRow;
  rowHeight: number;
  margin: number;
  states?: StatesWrapper;
}

export function TableRow({
	row = undefined,
	rowHeight,
	margin,
	states = undefined,
}: TableRowProps): JSX.Element | null {
	if (row && states) {
		return (
			<div
				style={{
					display: 'grid',
					gridGap: '30px',
					width: '100%',
					margin,
					height: rowHeight,
					gridTemplateColumns: '250px 100px 200px 50px 200px 200px 200px 200px',
				}}
			>
				<div data-testid="labelrowid">{row.id}</div>
				<div>{states.isActive.state ? 'Active' : 'Not Active'}</div>
				<div>{states.picture.state}</div>
				<div>{states.age.state}</div>
				<div>{states.name.state}</div>
				<div style={{ height: rowHeight, overflow: 'auto' }}>
					{states.address.state}
				</div>
				<div style={{ height: rowHeight, overflow: 'auto' }}>
					{states.about.state}
				</div>
				<div>{states.registered.state}</div>
			</div>
		);
	}
	return null;
}

TableRow.defaultProps = {
	row: undefined,
	states: undefined,
};
