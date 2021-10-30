import React from "react";

/* function Greet () {
    return (
        <h1>Hello Vishwas...!</h1>
    )
} */

/* export default Greet */

//1

/*  const Greet = () => <h1>Hello Vishwas</h1> */

/* export default Greet */

//2
//Named export
/* export const Greet = () => <h1>Hello Vishwas</h1> */

//3
/* const Greet = (props) => {
	console.log(props);
	return (
		<div>
			<h1>
				Hello {props.name} a.k.a {props.heroName}
			</h1>
			{props.children}
		</div>
	);
}; */
//4
/* const Greet = ({name, heroName}) => {
	return (
		<div>
			<h1>
				Hello {name} a.k.a {heroName}
			</h1>
		</div>
	);
}; */
//5
const Greet = ( props ) => {
	const {name, heroName} = props
	return (
		<div>
			<h1>
				Hello {name} a.k.a {heroName}
			</h1>
		</div>
	);
};
export default Greet;
