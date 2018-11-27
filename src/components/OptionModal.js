import React  from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import moment from 'moment';


class OptionModal extends React.Component {
		constructor(props) {
			super(props);
			this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			this.onlabelChange = this.onlabelChange.bind(this);
			this.state = {
				 title : props.label? props.label:'',
				// startTime: props.startTime?(props.startTime):moment().format('HH:MM A'),
				// endTime: props.endTime?(props.endTime):moment().format('HH:MM A'),
				selectedOption: props.selectedOption? props.selectedOption: undefined,
			};
		}
		onlabelChange(e){
			e.preventDefault();
			const title = e.target.value;
			this.setState(()=>({title}));	
		}
		componentWillReceiveProps(nextprops){
			this.setState(()=>{
				return{
					title:nextprops.label
				}
			})
		}
		handleClearSelectedOption(){
			this.props.onSubmit();
		}
		handleSubmit(e){
			e.preventDefault();
			const labelvalue = e.target.elements.label.value;
			const startTime = e.target.elements.startTime.value;
			const endTime = e.target.elements.endTime.value;

			const start = moment(startTime,'HH:mm a').toDate();
			start.setDate(this.props.currentDate.getDate());
			start.setMonth(this.props.currentDate.getMonth());
			start.setFullYear(this.props.currentDate.getFullYear());
			const end = moment(endTime,'HH:mm a').toDate();
			end.setDate(this.props.currentDate.getDate());
			end.setMonth(this.props.currentDate.getMonth());
			end.setFullYear(this.props.currentDate.getFullYear());
			
			if(!labelvalue){
				return 'Enter Valid Item';
			}
			if(this.state.title.length >= 24){
				return 'Cannot add more than 24 labels';
			}
			if(start > end){
				alert('Start time cannot be greater than end time');
				return 'Start time cannot be greater than end time';
			}
			this.props.onSubmit({title: labelvalue,start, end})
			this.setState((prevState)=>({selectedOption:undefined,title:''}))
		}	
		
		render(){
			const startTimeInputProps={name:'startTime',autocomplete:"off"};
			const endTimeInputProps={name:'endTime',autocomplete:"off"};
			return (
					<div>
					
					<Modal
						isOpen={!!this.props.selectedOption}
						onRequestClose={this.handleClearSelectedOption}
						contentLabel="Selected Option"
						closeTimeoutMS={200}
						className="modal"
					>
						<h3 className="modal__title">Add Label..</h3>
						<form onSubmit={this.handleSubmit}>
						  <div>
						  <label>
						    Label:
						    <input 
						    	type="text" 
						    	name="label"
						    	value={this.state.title}
						    	onChange={this.onlabelChange}
						    	autocomplete="off"
						    />
						  </label>
						  </div>
						  <div>
						  <label>
						    Start Time:
						    <Datetime 
						    	viewMode="time"
							  	defaultValue={this.props.startTime}
							  	timeFormat={true}
							  	inputProps={startTimeInputProps}
							  	dateFormat={false}
							    //viewDate={new Date()}
						  	/>
						  	</label>
						  	</div>
						  	<div>
						  	<label>
							    End Time:
							    <Datetime 
							    viewMode="time"
								  	defaultValue={this.props.endTime}
								  	timeFormat={true}
								  	inputProps={endTimeInputProps}
								  	dateFormat={false}
							  	/>
						  	</label>
						  	</div>
						  <input type="submit" value="Submit" />
						</form>
					</Modal>
					</div>
				);
		}
	}

export default OptionModal;