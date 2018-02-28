import React, { Component } from 'react';
import MenuTop from './components/MenuTop/MenuTop';
import MenuLeft from './components/MenuLeft/MenuLeft';
import Footer from './components/Footer/Footer';
import routes from './routes';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="wrapper">
					<MenuLeft/>
					<div className="main-panel">
						<MenuTop/>
						<div className="content">
							<div className="container-fluid">
								<div className="row">								
									{ this.showContentMenus(routes) }
								</div>
								
							</div>
						</div>
						<Footer/>
					</div>
				</div>
			</Router>
		);
	}
	showContentMenus = (routes) => {
		var result = null;
		if(routes.length > 0) {
			result = routes.map((route, index) => {
				return (<Route
					key = {index}
					path = {route.path}
					exact = {route.exact}
					component = {route.main}
				/>)
			})
		}
		return <Switch>{result}</Switch>
	}
}
export default App;
