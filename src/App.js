import React , {Component} from 'react';
import CardList from "./cardlist.js";
import {robot} from "./robot.js";
import Search from "./search.js";

import "./App.css";
class App extends Component{
	constructor(){
		super();
		this.state = {
			robot : robot,
			search : ""		
		}
	}
 onSearchchange = (event) =>{
		this.setState({search: event.target.value});
		 
		
} 
	render(){
		const search = this.state.robot.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.search.toLowerCase())
		})
		return(
			<div className = "tc">
			<h1 className ="tc ttu tracked f1 lh-title">RoboFriends</h1>
			<Search onsearch = {this.onSearchchange} />
			<CardList robot = {search} />
			</div>
			);
	}
}
export default App;