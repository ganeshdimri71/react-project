import React from "react";

const Hello = () => {
	/* return (
		<div>
			<h1>Hello Vishwas</h1>
		</div>
	); */

    //1

    return (
        React.createElement( 'div',
           /*  null, */
           {id:'Hello', className:'dummyClass'},
            React.createElement( 'h1', null, `Hello Vishwas` ) )
    )
};
export default Hello;
