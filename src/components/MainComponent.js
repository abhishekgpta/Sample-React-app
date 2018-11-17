import React  from "react";
import OptionModal from "./OptionModal";
import Events from './Events';
import moment from 'moment';
import uuid from 'uuid';

class MainComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addedLabels : props.label? props.label:'',
			startTime: props.startTime?(props.startTime):moment().format('HH:MM A'),
			endTime: props.endTime?(props.endTime):moment().format('HH:MM A'),
			selectedOption: props.selectedOption? props.selectedOption: undefined,
		};
	}
	render(){
		return(
			<div>
				<div>
					<Events />
				</div>
				
				<OptionModal

					label={this.state.addedLabels}
					startTime={this.state.startTime}
					endTime={this.state.endTime}
					selectedOption={this.state.selectedOption}
					onSubmit={this.props.onSubmit}
				/>
			</div>
			)
	}
}

export default MainComponent;