import React , {Component} from "react";
import Card from "./card.js";

const CardList = ({robot}) =>{
	const cardcomponent = robot.map((user , i)=>{
		return <Card key = {i} id = {robot[i].id}  name = {robot[i].name} email = {robot[i].email} />	
	});		
	   return(<div>
	   	{cardcomponent}
	   	</div>
	   	);
}   
export default CardList;