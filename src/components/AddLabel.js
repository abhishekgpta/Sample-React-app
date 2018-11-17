import React  from "react";
import MainComponent from './MainComponent';
import {connect} from 'react-redux';
import {addLabel} from '../actions/labels'
const AddLabel =(props)=>(
	<div>
	<h1> Add Label</h1>
	<MainComponent 
		onSubmit={(label)=>{
			props.dispatch(addLabel(label));
			props.history.push('/');
		}}
		label={''}
	/>
	</div>
);

export default connect()(AddLabel);