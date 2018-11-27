import React  from "react";
import MainComponent from './MainComponent';
import {connect} from 'react-redux';
import {addLabel,editLabel} from '../actions/labels'
const AddLabel =(props)=>(
	<div>
	<h1>Time Logger</h1>
	<MainComponent 
		onSubmit={(label,id)=>{
			if(id){
				console.log("eid")
				props.dispatch(editLabel(id,label));
			}
			else{
				props.dispatch(addLabel(label));
			}
			props.history.push('/');
		}}
		label={''}
	/>
	</div>
);
const mapStatetoProp = (state,props)=>{
	return {
		label: state.labels.find((label)=>label.id === props.match.params.id)
	}
}
export default connect(mapStatetoProp)(AddLabel);