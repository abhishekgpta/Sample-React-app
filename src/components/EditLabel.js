import React  from "react";
import {connect} from  'react-redux';
import {editLabel} from '../actions/labels';
import MainComponent from './MainComponent';
const EditLabel =(props)=>(
		<div>
			<p>Editpage</p>
			<MainComponent 
				onSubmit={(label)=>{
					props.dispatch(editLabel(props.label.id,label));
					props.history.push('/');
		}}
		selectedOption={true}
		label={props.label.addedLabels}
		startTime={props.label.startTime}
		endTime={props.label.endTime}

	/>
		</div>
	);

const mapStatetoProp = (state,props)=>{
	return {
		label: state.labels.find((label)=>label.id === props.match.params.id)
	}
}

export default connect(mapStatetoProp)(EditLabel);