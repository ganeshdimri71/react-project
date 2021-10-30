import React from 'react'
import  './myStyle.css'

/* function Stylesheet() {
  return (
    <div>
        <h1 className="primary">Style Sheets</h1>
    </div>
  )
} */
function Stylesheet ( props ) {
  let className = props.primary ? 'primary': ""
  return (
		<div>
			<h1 className={`${className} font-xl`}>Style Sheets</h1>
		</div>
	);
}

export default Stylesheet
