import React, { Component } from 'react';

class Nav extends Component {
	render() {
		return (
			<div>
				<span className="toggle-button mobile-menu">
					<div className="menu-bar menu-bar-top"></div>
					<div className="menu-bar menu-bar-middle"></div>
					<div className="menu-bar menu-bar-bottom"></div>
				</span>
				<div className="menu-wrap mobile-menu">
					<nav className="menu-sidebar">
						<ul className="menu">
							<li><a href="/">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#projects">Projects</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</nav>
				</div>
			</div>
		)
	}
}
export default Nav;