import React from "react";
import Person from './Person'

function NameList() {
	const names = ["Bruce", "clarke", "Diana"];
	const persons = [
		{
			id: 1,
			name: "Bruce",
			age: 30,
			skill: "React",
		},
		{
			id: 2,
			name: "Clark",
			age: 28,
			skill: "Angular",
		},
		{
			id: 3,
			name: "Diana",
			age: 30,
			skill: "Vanila",
		},
	];
	//2
	const nameList = names.map((name) => <h2>{name}</h2>);
   

	//3
	const personList = persons.map(person=><Person key={person.id} person={person}/>)

	return (
		<div>
			{/* <h2>{names[0] }</h2>
          <h2>{names[1] }</h2>
          <h2>{names[2] }</h2> */}
			{/* 1 */}
			{
				/* names.map( name => <h2>{name }</h2>) */
				//2
				/* nameList */
				//3

				personList
			}
		</div>
	);
}

export default NameList;
