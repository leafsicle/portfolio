import React, { Component } from 'react'
import { BrowserRouter as NavLink } from 'react-router-dom'

class Header extends Component {
	state = {
		class: 'hide'
	}

	_openMenu = () => {
		this.setState({
			class: 'open'
		})
	}

	_hideMenu = () => {
		this.setState({
			class: 'hide'
		})
	}

	render() {
		return (
			<>
				<header className="header">
					<nav className="big-nav">
						<li>
							<NavLink to="/">
								<img className="logo" src="./images/logo.png" alt="logo" />
							</NavLink>
						</li>
						<div className="big-header-links">
							<li className="big-header">
								<NavLink className="link" title="Take Me Home!" exact to="/">
									Home
								</NavLink>
							</li>
							<li className="big-header">
								<NavLink
									className="link"
									title="Check out my Portfolio"
									to="/portfolio"
								>
									Portfolio
								</NavLink>
							</li>
							<li className="big-header">
								<NavLink className="link" title="View my Resume" to="/resume">
									Résumé
								</NavLink>
							</li>
						</div>
						<li onClick={this._openMenu} className="hamburger">
							<div />
							<div />
							<div />
						</li>
					</nav>
				</header>
				<section className={`${this.state.class} menu`}>
					<p onClick={this._hideMenu} className="menu-x">
						X
					</p>
					<nav>
						<ul>
							<NavLink onClick={this._hideMenu} className="link" exact to="/">
								<li>Home</li>
							</NavLink>
							<NavLink
								onClick={this._hideMenu}
								className="link"
								to="/portfolio"
							>
								<li>Portfolio</li>
							</NavLink>
							<NavLink onClick={this._hideMenu} className="link" to="/resume">
								<li>Résumé</li>
							</NavLink>
							<a
								onClick={this._hideMenu}
								className="link contact"
								href="tel://18134180636"
							>
								<li className="menu-contact">+1 (813) 418-0636</li>
							</a>
							<a
								onClick={this._hideMenu}
								className="link contact"
								href="mailto:cookem529@gmail.com"
							>
								<li className="menu-contact">cookem529@gmail.com</li>
							</a>
						</ul>
					</nav>
				</section>
			</>
		)
	}
}

export default Header
