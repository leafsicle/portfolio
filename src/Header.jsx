import React, { Component } from 'react'

class Header extends Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<a class="navbar-brand" href="#">
						Navbar
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav">
							<li class="nav-item active">
								<a class="nav-link" href="#">
									Home <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Portfolio
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									about me
								</a>
							</li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Social Sites
								</a>
								<div
									class="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<a
										class="dropdown-item"
										href="https://github.com/leafsicle"
										target="_blank"
									>
										GitHub
									</a>
									<a
										class="dropdown-item"
										href="https://www.linkedin.com/in/cookem529/"
										target="_blank"
									>
										<i class="fab fa-linkedin" />
									</a>
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

export default Header
