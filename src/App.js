import logo from './logo.svg';
import './App.css';
import React from "react";
/* import Greet from "./components/Greet"; */
/* import MyComponent from "./components/Greet"; */
/* import { Greet } from "./components/Greet"; */
/* import Welcome from "./components/Welcome"; */
/* import Hello from "./components/Hello"; */
/* import Greet from  "./components/Greet"; */
/* import Welcome from "./components/Welcome"; */
/* mport Message from "./components/Message"; */
/* import Counter from "./components/Counter"; */
/* import Greet from "./components/Greet"; */
/* import Welcome from "./components/Welcome"; */
/* import FunctionClick from "./components/FunctionClick"; */
/* import ClassClick from "./components/ClassClick"; */
/* import EventBind from "./components/EventBind"; */
/* import ParentComponent from "./components/ParentComponent"; */
/* import UserGreeting from "./components/UserGreeting"; */
/* import NameList from "./components/NameList"; */
/* import Stylesheet from "./components/Stylesheet"; */
/* import Inline from "./components/Inline"; */
/* import "./components/appStyles.css"; */
/* import styles from "./components/appStyles.module.css"; */
import Form from "./components/Form";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				{/* <Greet />
			<MyComponent />
			<Greet /> */}
				{/* <Welcome /> */}
				{/* <Hello /> */}
				{/* <Greet name="Ganesh" heroNmae="Batman" />
			<Greet name="Sanjay" heroName="Superman" />
			<Greet name="Palayshwar" heroName="Wonder Woman" /> */}
				{/* <Greet name="Ganesh" heroNmae="Batman">
				<p>This is a children</p>
			</Greet>
			<Greet name="Sanjay" heroName="Superman">
				<button>Action</button>
			</Greet> */}
				{/* <Greet name="Palayshwar" heroName="Wonder Woman"></Greet> */}
				{/* <Welcome name="Ganesh" heroName="Batman" />
			<Welcome name="Sanjay" heroName="Superman" />
			<Welcome name="Palayshwar" heroName="Wonder Woman" /> */}
				{/* <Message /> */}
				{/* <Counter /> */}
				{/* {<Counter addValue={100} />} */}
				{/* <Greet name="Ganesh" heroName="Batman" /> */}
				{/* 	<Welcome name="Ganesh" heroName="Batman" /> */}
				{/* <FunctionClick /> */}
				{/* <ClassClick /> */}
				{/* 	<EventBind /> */}
				{/* 	<ParentComponent /> */}
				{/* <UserGreeting /> */}
				{/* {<NameList />} */}
				{/* {<Stylesheet  />} */}
				{/* <Stylesheet primary={true} /> */}
				{/* <Inline /> */}
				{/* <h1 className="error">Error</h1>
				<h1 className={styles.success}>Success</h1>   */}
				<Form/>
			</div>
		);
	}
}

export default App;
