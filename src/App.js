import React, { Component } from 'react'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="container is-fluid">
				<section class="hero is-dark">
					<div class="hero-head">
						<div class="container">
							<h1 class="title">Primary title</h1>
						</div>
					</div>
				</section>
				<nav class="navbar" role="navigation" aria-label="main navigation">
					<div class="navbar-brand">
						{/* this next section will be where to put social links etc */}
						<a class="navbar-item" href="https://suncoast.io">
							<img src="#" width="112" height="28" />
						</a>

						{/* hamburger menu is here */}
						<a
							role="button"
							class="navbar-burger burger"
							aria-label="menu"
							aria-expanded="false"
							data-target="navbarBasicExample"
						>
							{/* these spans are there for the formatting of the hamburger menu */}
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</a>
					</div>
					{/* these are part of the nav bar */}
					<div class="navbar-menu is-active">
						<div class="navbar-start">
							<a class="navbar-item">Home</a>

							<a class="navbar-item">Documentation</a>

							<div class="navbar-item has-dropdown is-hoverable">
								<a class="navbar-link">More</a>

								<div class="navbar-dropdown">
									<a class="navbar-item">About</a>
									<a class="navbar-item">Jobs</a>
									<a class="navbar-item">Contact</a>
									<hr class="navbar-divider" />
									<a class="navbar-item">Report an issue</a>
								</div>
							</div>
						</div>

						<div class="navbar-end">
							<div class="navbar-item">
								<div class="buttons">
									<a class="button is-primary">
										<strong>Sign up</strong>
									</a>
									<a class="button is-light">Log in</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
				<nav class="level is-mobile">
					<div class="level-item has-text-centered">
						<div>
							<p class="heading">Tweets</p>
							<p class="title">3,456</p>
						</div>
					</div>
					<div class="level-item has-text-centered">
						<div>
							<p class="heading">Following</p>
							<p class="title">123</p>
						</div>
					</div>
					<div class="level-item has-text-centered">
						<div>
							<p class="heading">Followers</p>
							<p class="title">456K</p>
						</div>
					</div>
					<div class="level-item has-text-centered">
						<div>
							<p class="heading">Likes</p>
							<p class="title">789</p>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default App
