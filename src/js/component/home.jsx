import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<h1>{Math.floor(props.seconds / 100000)%10}</h1>
			<h1>{Math.floor(props.seconds / 10000)%10}</h1>
			<h1>{Math.floor(props.seconds / 1000)%10}</h1>
			<h1>{Math.floor(props.seconds / 100)%10}</h1>
			<h1>{Math.floor(props.seconds / 10)%10}</h1>
			<h1>{Math.floor(props.seconds / 1)%10}</h1>
		</div>
	);
};

export default Home;
