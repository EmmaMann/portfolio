import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
	render() {
		return (
			<div className="header-box">
				<Nav></Nav>
				<h1>emma</h1 >
				<h2>web design | development</h2>
			</div>
		)
	}
}
export default Header;