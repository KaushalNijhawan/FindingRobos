import React , {Component} from "react";

const Search = ({onsearch})=>{
	return(
		<input 
		type = "text" 
		placeholder = "Search Robots" 
		className = "pa3 ba b--green bg-lightest-blue" 
		onChange = {onsearch}/>
		); 
	
	
}
export default Search;