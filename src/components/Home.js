import React, { Component } from 'react';
import sr from '../ScrollReveal';

class Home extends Component {
	props: Props;

	componentDidMount = () => {
		const config = {
		  origin: 'top',
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
			<section id="Home" className="container" ref='box1'>
				<h1 className="display-1 first"><strong>Hello.</strong></h1>
				<h1 className="display-3 second"><strong>My name is <div className="name">Madhubala Jayakumaran</div></strong></h1>
				<h1 className="display-3 third">Let's make the web more beautiful.</h1>
			</section>
		);
	}
};

export default Home;
