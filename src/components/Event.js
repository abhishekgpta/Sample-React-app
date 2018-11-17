import React  from "react";
import {Link} from 'react-router-dom';

const Event = ({addedLabels,startTime,endTime,id,count})=>(
	<div >
		<Link to={`/edit/${id}`}>
		<h3>{count}. {addedLabels}</h3>
		</Link>
		<p className="option__text"> {startTime} -- {endTime} </p>
	</div>
);

export default Event;