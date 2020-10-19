import React from "react";

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			feedback: "",
			name: "",
			email: ""
		};
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const templateId = "portfolio";

		this.sendFeedback(templateId, {
			message_html: this.state.feedback,
			from_name: this.state.name,
			reply_to: this.state.email
		})
	}

	sendFeedback(templateId, variables) {
		window.emailjs.send(
			"gmail", templateId,
			variables
		).then(res => {
			window.alert("Thank you for reaching out! We'll be in touch soon.");

			this.setState({
				feedback: "",
				name: "",
				email: ""
			})

		}).catch(err =>
			console.error(err)
		)
	}

	render() {
		return (
			<form id="contact">
				<h3>Get in touch</h3>
				<div>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" placeholder="Name" id="name" onChange={this.handleNameChange} value={this.state.name} required></input>
					</div>
					<div>
						<label htmlFor="email">Email Address</label>
						<input type="email" placeholder="email@example.com" id="email" onChange={this.handleEmailChange} value={this.state.email} required></input>
					</div>
					<div>
						<label htmlFor="contact-form">Message</label>
						<textarea
							id="contact-form"
							name="contact-form"
							onChange={this.handleMessageChange}
							placeholder="What's on your mind?"
							required
							value={this.state.feedback} />
					</div>
				</div>
				<input type="submit" name="submit" id="sendBtn" value="Send!" onClick={this.handleSubmit} />
			</form>
		)
	}

	handleMessageChange(event) {
		this.setState({
			feedback: event.target.value
		})
	}
	handleEmailChange(event) {
		this.setState({
			email: event.target.value
		})
	}
	handleNameChange(event) {
		this.setState({
			name: event.target.value
		})
	}
}

export default ContactForm;