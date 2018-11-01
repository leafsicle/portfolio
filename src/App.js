import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div className="main">
				<header>
					<div className="L side">
						<h1>This is my App</h1>
						<h2>I pretend to be a web developer</h2>
					</div>
					<ul className="menu">
						<li>Home</li>
						<li>Projects</li>
						<li>Resume</li>
					</ul>
				</header>
			</div>
		)
	}
}

export default App
