import React from "react";

function Columns() {
	const items = [];
	return (
		// <>
		// <td>Name</td>
		// 	<td>Vishwas</td>
		//     </>

		//1
		<>
			{items.map((item) => (
				<React.Fragment key={item.id}>
					<h1>Title</h1> 
					<p>{item.title}</p>
				</React.Fragment>
			))}
		</>
	);
}

export default Columns;
