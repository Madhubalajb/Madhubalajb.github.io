import React from 'react';
import Clipboard from 'react-clipboard.js';

const Contact = () => {
	return (
		<section id="Contact" className="container">
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
					<a className="fab fa-github" href="https://github.com/Madhubalajb" rel="noopener noreferrer" target="_blank" />
					<a className="fab fa-linkedin-in" href="https://www.linkedin.com/in/madhujb/" rel="noopener noreferrer" target="_blank" />
					<a className="fab fa-instagram" href="https://www.instagram.com/madhubala_jayakumaran/" rel="noopener noreferrer" 
						target="_blank" />
					<a className="fab fa-codepen" href="https://codepen.io/Madhujb/" rel="noopener noreferrer" target="_blank" />
				</div>
				<hr className="col-sm-4" />
			</div>	
			<footer className="text-center">
				<p>
					designed & developed by <span>madhubala jayakumaran</span>
					<a className="fab fa-github" href="https://github.com/Madhubalajb/Madhubalajb.github.io" rel="noopener noreferrer" target="_blank" />
				</p>
			</footer>
		</section>			
	)
}

export default Contact;