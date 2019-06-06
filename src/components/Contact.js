import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import sr from '../ScrollReveal';
import Clipboard from 'react-clipboard.js';

class Contact extends Component {
	props: Props;

	componentDidMount = () => {
		const config = {
			origin: 'bottom',
			duration: 2000,
			delay: 150,
			scale: 1,
			easing: 'ease',
			reset: 'true',
		}
		sr.reveal(this.refs.box1, config)
	}
	render () {
		return (
			<section id="Contact" className="container" ref="box1">
				<h1 className="display-3 name">Contact</h1>
				<div className="row first_row">
					<hr className="col-sm-4" />
					<p className="col-sm-4 text-center gmail">madhujb01@gmail.com</p>
					<Clipboard className="btn" data-clipboard-text="madhujb01@gmail.com" data-toggle="tooltip" data-placement="bottom" title="Click to copy">
						<i className="far fa-clipboard"></i>
					</Clipboard>
					<hr className="col-sm-4" />
				</div>
				<div className="row second_row">
					<hr className="col-sm-4" />
					<div className="contacts text-center">
						<a className="fab fa-github" href="https://github.com/Madhubalajb" target="_blank"></a>
						<a className="fab fa-linkedin-in" href="https://www.linkedin.com/in/madhujb/" target="_blank"></a>
						<a className="fab fa-instagram" href="https://www.instagram.com/madhubala_jayakumaran/" target="_blank"></a>
						<a className="fab fa-codepen" href="https://codepen.io/Madhujb/" target="_blank"></a>
					</div>
					<hr className="col-sm-4" />
				</div>	
				<footer className="footer text-center">
					<p>designed & developed by <span>madhubala jayakumaran</span></p>
				</footer>
			</section>			
		);
	}
};

export default Contact;