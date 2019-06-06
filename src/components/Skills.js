import React, { Component } from 'react';
import sr from '../ScrollReveal';

class Skills extends Component {
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
			<section id="Skills" className="container" ref="box1">
				<h1 className="display-3 name">Skills</h1>
				<div className="row skills-row" ref="box1">
					<div className="L col">
						<h1 className="Languages">Languages</h1>
						<ul className="Languages-lists">
							<li><i className="material-icons">arrow_right</i>HTML5</li>
							<li><i className="material-icons">arrow_right</i>CSS3</li>
							<li><i className="material-icons">arrow_right</i>JavaScript</li>
							<li><i className="material-icons">arrow_right</i>Python</li>
							<li><i className="material-icons">arrow_right</i>PHP</li>
							<li><i className="material-icons">arrow_right</i>MySQL</li>
							<li><i className="material-icons">arrow_right</i>SASS</li>
							<li><i className="material-icons">arrow_right</i>C, C++</li>
							<li><i className="material-icons">arrow_right</i>Markdown</li>
						</ul>	
					</div>	
					<div className="F col">
						<h1 className="Frameworks">Frameworks</h1>
						<ul className="Frameworks-lists">
							<li><i className="material-icons">arrow_right</i>Flask</li>
							<li><i className="material-icons">arrow_right</i>Django</li>
							<li><i className="material-icons">arrow_right</i>React.js</li>
							<li><i className="material-icons">arrow_right</i>Node.js</li>
							<li><i className="material-icons">arrow_right</i>Bootstrap</li>
						</ul>
					</div>	
					<div className="D col">
						<h1 className="Designs">Design</h1>
						<ul className="Designs-lists">
							<li><i className="material-icons">arrow_right</i>Sketch</li>
							<li><i className="material-icons">arrow_right</i>Prototyping</li>
							<li><i className="material-icons">arrow_right</i>Wireframing</li>
						</ul>
					</div>					
					<div className="T col">
						<h1 className="Tools">Tools</h1>
						<ul className="Tools-lists">
							<li><i className="material-icons">arrow_right</i>Git & Github</li>
							<li><i className="material-icons">arrow_right</i>Chrome DevTools</li>
							<li><i className="material-icons">arrow_right</i>MongoDB</li>
						</ul>
					</div>
					<div className="A col">
						<h1 className="Areas">Areas</h1>
						<ul className="Areas-lists">
							<li><i className="material-icons">arrow_right</i>Data Structures</li>
							<li><i className="material-icons">arrow_right</i>OS</li>
							<li><i className="material-icons">arrow_right</i>OOPS</li>
						</ul>
					</div>					
				</div>
			</section>			
		);
	}
};

export default Skills;