import React, { Component } from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import ContactForm from "./components/contact";
import Footer from "./components/footer";
import "./styles/main.css"

// import images
import ecom from './img/ecom.png';
import font from './img/font.png';
import todo from './img/todo.png';
import bootstrap from './img/bootstrap.png';
import tulip from './img/tulip.png';
import innova from './img/innova.png';

let projects = {
	1: {
		"overlay": "Modern design, friendly ambience ",
		"src": tulip,
		"alt": "Example of a simple design for a local cafe",
		"link": "https://gc200397100.github.io/comp2081-final/"
	},
	2: {
		"overlay": "Functional and Approachable",
		"src": innova,
		"alt": "Example of a content management site for the Georgian College Centre for Changemaking and Social Innovation",
		"link": "https://school-wps.herokuapp.com/"
	},
	3: {
		"overlay": "Simple, Clean Designs",
		"src": ecom,
		"alt": "Example of a simple e-commerce site",
		"link": "https://gc200397100.github.io/ecommerce/"
	},
	4: {
		"overlay": "Experiments with Typography",
		"src": font,
		"alt": "Example of a layout exemplifying a font",
		"link": "https://gc200397100.github.io/typography/"
	},
	5: {
		"overlay": "Putting the fun in functional",
		"src": todo,
		"alt": "Example of a functional to do list application",
		"link": "https://gc200397100.github.io/todolist/"
	},
	6: {
		"overlay": "Bright and Bootstrap-y",
		"src": bootstrap,
		"alt": "Example of a site using bootstrap",
		"link": "https://gc200397100.github.io/bootstrap/"
	}
}

class App extends Component {
	render() {
		return (
			// import components to render method
			<div className="main-container">
				<div className="header-box">
					<Header />
				</div>
				<div className="spacer"></div>
				<About />
				<h3 id="projects">Previous Work</h3>
				<div className="projects">
					{/* loop through the list of projects, pass info to the projects component */}
					{
						Object.values(projects).map((project, key) => {
							return (
								<Projects project={project} key={key} />
							)
						})
					}
				</div>
				<ContactForm />
				<Footer />
			</div >
		);
	}
}

export default App;
