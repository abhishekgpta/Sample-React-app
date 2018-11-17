import React  from "react";
import {connect} from 'react-redux';
import Event from "./Event";

const Events = (props)=>(
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title">Your Options</h3>
		</div>
		{props.labels.length === 0 && <p className="widget__message">Please add an option to get started.</p>}
		{props.labels.map((label,index)=> (
			<Event 
				key={label.id} 
				count={index+1}
				{...label}
			/>
		))}
	</div>
);
const mapStateToProps = (state)=>{
	return {
		labels: state.labels
	};
};
export default connect(mapStateToProps)(Events);;