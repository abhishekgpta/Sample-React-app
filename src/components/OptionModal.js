import React  from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";



class OptionModal extends React.Component {
		constructor(props) {
			super(props);
			this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			this.OpenModal = this.OpenModal.bind(this);
			this.onlabelChange = this.onlabelChange.bind(this);
			this.state = {
				 addedLabels : props.label? props.label:'',
				// startTime: props.startTime?(props.startTime):moment().format('HH:MM A'),
				// endTime: props.endTime?(props.endTime):moment().format('HH:MM A'),
				selectedOption: props.selectedOption? props.selectedOption: undefined,
			};
		}
		onlabelChange(e){
			e.preventDefault();
			const addedLabels = e.target.value;
			this.setState(()=>({addedLabels}));	
		}
		
		handleClearSelectedOption(){
			this.setState((prevState)=>({selectedOption:undefined}))
		}
		handleSubmit(e){
			e.preventDefault();
			const labelvalue = e.target.elements.label.value;
			const startTime = e.target.elements.startTime.value;
			const endTime = e.target.elements.endTime.value;
			if(!labelvalue){
				return 'Enter Valid Item';
			}
			if(this.state.addedLabels.length >= 24){
				return 'Cannot add more than 24 labels';
			}
			this.props.onSubmit({addedLabels: labelvalue,startTime,endTime})
			this.setState((prevState)=>({selectedOption:undefined,addedLabels:''}))
		}	
		OpenModal(e){
			this.setState(()=>({selectedOption:true}));
		}
		render(){
			const startTimeInputProps={name:'startTime',autocomplete:"off"};
			const endTimeInputProps={name:'endTime',autocomplete:"off"};
			return (
					<div>
					<button className="button" onClick={this.OpenModal}>open</button>
					<Modal
						isOpen={!!this.state.selectedOption}
						onRequestClose={this.handleClearSelectedOption}
						contentLabel="Selected Option"
						closeTimeoutMS={200}
						shouldCloseOnEsc={false}
						shouldCloseOnOverlayClick={false}
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
						    	value={this.state.addedLabels}
						    	onChange={this.onlabelChange}
						    />
						  </label>
						  </div>
						  <div>
						  <label>
						    Start Time:
						    <Datetime 
						    	viewMode="time"
							  	defaultValue={this.props.startTime}
							  	dateFormat={false}
							  	timeFormat={true}
							  	inputProps={startTimeInputProps}
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