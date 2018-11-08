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
									About me
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
									Contact Me
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
										<i class="fab fa-github-square fa-2x" /> Github
									</a>
									<a
										class="dropdown-item"
										href="https://www.linkedin.com/in/cookem529/"
										target="_blank"
									>
										<i class="fab fa-linkedin fa-2x" /> LinkedIn
									</a>
									<a
										class="dropdown-item"
										href="tel:18134180636"
										target="_blank"
									>
										<i class="fas fa-phone fa-2x" /> Call me
									</a>

									<a
										class="dropdown-item"
										href="mailto:cookem529@gmail.com?Subject=Portfolio&Body=Hey%2C%20Matt%21%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20I%20saw%20your%20portfolio%20and%20was%20interested%20in%20getting%20to%20know%20more%20about%20you.%20"
									>
										<i class="fas fa-envelope fa-2x" /> email
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
