import React  from "react";
import ReactDOM  from "react-dom";
import {Provider} from 'react-redux';
import AddLabel from './components/AddLabel';
import EditLabel from './components/EditLabel';
// import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import configureStore from './store/configureStore';
import {addLabel} from './actions/labels';
import 'normalize.css/normalize.css';
import './styles/style.scss'
import 'react-datetime/css/react-datetime.css';

const AppRouter =()=> (
	<BrowserRouter>
		<div>	
			<Switch>
				<Route path="/" component={AddLabel} exact={true} />
				<Route path="/edit/:id" component={EditLabel}/>
			</Switch>
		</div>
	</BrowserRouter>
);

const store  = configureStore();
const unsubscribe = store.subscribe(()=>{
	console.log(store.getState())
});
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
ReactDOM.render(jsx,document.getElementById('app'))
