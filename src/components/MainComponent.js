import React  from "react";
import OptionModal from "./OptionModal";
import Events from './Events';
import {connect} from 'react-redux';
import moment from 'moment';
import uuid from 'uuid';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

class MainComponent extends React.Component {
	constructor(props) {
		super(props);
		this.navigateHandler = this.navigateHandler.bind(this);
		this.handleSelectedEvent = this.handleSelectedEvent.bind(this);
		this.OpenModal = this.OpenModal.bind(this);
		this.handeSubmit = this.handeSubmit.bind(this);
		this.state = {
			addedLabels : props.label? props.label:'',
			startTime: props.startTime?(props.startTime):moment().toDate(),
			endTime: props.endTime?(props.endTime):moment().toDate(),
			selectedOption: props.selectedOption? props.selectedOption: undefined,
			currentDate:moment().toDate(),
			id:undefined
		};
	}
	navigateHandler=(e)=>{
		this.setState((prevState)=>{
			return {
				startTime:e,
				endTime:e,
				currentDate:e
			}
		})
	}
	handleSelectedEvent= (event) => {
		alert('Are you sure you want to edit the event');
		this.setState(()=>{
			return {
				selectedOption:true,
				addedLabels:event.title,
				startTime:event.start,
				endTime:event.end,
				id:event.id
			}
		});
	}
	OpenModal(e){
		this.setState(()=>({selectedOption:true}));
	}
	handeSubmit(data){
		if(data){
			this.props.onSubmit(data,this.state.id);
		}
		this.setState(()=>({selectedOption:false,addedLabels:"",id:undefined}));
	}
	
	render(){
		const localizer = BigCalendar.momentLocalizer(moment);
		return(
			<div>
				<button className="button" onClick={this.OpenModal}>Schedule</button>
				<OptionModal
					label={this.state.addedLabels}
					startTime={this.state.startTime}
					endTime={this.state.endTime}
					selectedOption={this.state.selectedOption}
					onSubmit={this.handeSubmit}
					currentDate={this.state.currentDate}
				/>
				<div>
				    <BigCalendar
				    selectable
				      localizer={localizer}
					  events={this.props.labels}	
				      titleAccessor={(obj)=>{return obj.title}}
				      //view='views.DAY'
				      views={["day"]}
				      defaultView={BigCalendar.Views.DAY}
				      startAccessor="start"
  					  endAccessor="end"
  					  onNavigate={this.navigateHandler}
  				      onSelectEvent={this.handleSelectedEvent}
     				  //onSelectSlot={this.handleSelect}	
				    />
				  </div>
			</div>
			)
	}
}

//export default MainComponent;
const mapStateToProps = (state)=>{
	return {
		labels: state.labels
	};
};
export default connect(mapStateToProps)(MainComponent);;