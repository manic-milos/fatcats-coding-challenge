import { JSONRow } from '../../API';
import { BoolInput } from '../InputComponents/BoolInput';
import { DateInput } from '../InputComponents/DateInput';
import { LongTextInput } from '../InputComponents/LongTextInput';
import { NumberInput } from '../InputComponents/NumberInput';
import { StringInput } from '../InputComponents/StringInput';
import { StatesWrapper } from '../MainTable/RowRenderer';

export function EditRow({
	row, rowHeight, margin, states,
}:
    { row?: JSONRow, rowHeight:number, margin:number, states?:StatesWrapper }) {
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
				<div>{row.id}</div>
				<div><BoolInput input={states.isActive.state} setInput={states.isActive.setState} /></div>
				<div><StringInput input={states.picture.state} setInput={states.picture.setState} /></div>
				<div><NumberInput input={states.age.state} setInput={states.age.setState} /></div>
				<div><StringInput input={states.name.state} setInput={states.name.setState} /></div>
				<div><LongTextInput input={states.address.state} setInput={states.address.setState} /></div>
				<div><LongTextInput input={states.about.state} setInput={states.about.setState} /></div>
				<div><DateInput input={states.registered.state} setInput={states.registered.setState} /></div>
			</div>
		);
	}
	return null;
}

EditRow.defaultProps = {
	row: undefined,
	states: undefined,
};
