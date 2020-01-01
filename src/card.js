import React , {Component} from 'react';

const Card = ({id , email , name}) =>{
		
		return(
			<div className = "bg-light-green dib pa3 ma2 br3 grow bw2 shadow-5">
			<img alt = "robots" src ={`https://robohash.org/test${id}?200x200`} />
			<h1>{name}</h1>
			<h2>{email}</h2>
			</div>	
		);
}
export default Card;