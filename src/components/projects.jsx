import React, { Component } from 'react';

class Projects extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		return (
			<div>
				<div>
					<a href={this.props.project.link}><img src={this.props.project.src} alt={this.props.project.alt} /></a><h4><a href={this.props.project.link}>{this.props.project.overlay}</a></h4>
				</div>
			</div>
		)
	}
}
export default Projects;