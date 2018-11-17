import {createStore, combineReducers} from 'redux';
import labelsReducer from '../reducers/labels';


export default() =>{
	const store = createStore(
		combineReducers({
			labels:labelsReducer,
		})
	);
	return store; 
}
