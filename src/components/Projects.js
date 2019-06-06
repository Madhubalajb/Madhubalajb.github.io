import React, { Component } from 'react';
import sr from '../ScrollReveal';

class Project extends Component {
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
		sr.reveal(this.refs.box2, config)
	}	

	render () {
		return (
			<section id="Projects" className="container">
				<h1 className="display-3 name">Projects</h1>
				<div className="row" ref="box1">
					<div className="col-sm-4 card">
						<div className="card-header">
							<a href="https://codedotcrush.com" target="_blank"><i className="material-icons">open_in_new</i></a> 
							<h3 className="project1">Codedotcrush.com</h3>			
						</div>
						<div className="card-body">
							<p>A simple web application to display the best online resources for various programming languages and technologies.</p>				
						</div>
						<div className="card-footer">
							<div className="badges">
								<span className="badge badge-light mx-1 my-1">HTML</span>
								<span className="badge badge-light mx-1 my-1">CSS</span>
								<span className="badge badge-light mx-1 my-1">JS</span>
								<span className="badge badge-light mx-1 my-1">JQuery</span>
								<span className="badge badge-light mx-1 my-1">PHP</span>
								<span className="badge badge-light mx-1 my-1">MySQL</span>
								<span className="badge badge-light mx-1 my-1">AJAX</span>
								<span className="badge badge-light mx-1 my-1">Bootstrap</span>
							</div>			
						</div>	
					</div>

					<div className="col-sm-4 card">
						<div className="card-header">
							<a href="https://github.com/Madhubalajb/FaceNet-based-Attendance-System" target="_blank" className="fab fa-github"></a>
							<h3 className="project2">Facenet based Attendance System</h3>
						</div>
						<div className="card-body">
							<p>Deep learning based web app for marking the students attendance using facenet face recognition technology. Developed as a part of my final year project.</p>
						</div>
						<div className="card-footer">
							<div className="badges"> 
								<span className="badge badge-light mx-1 my-1">Python</span>
								<span className="badge badge-light mx-1 my-1">Flask</span>
								<span className="badge badge-light mx-1 my-1">SQLite</span>
								<span className="badge badge-light mx-1 my-1">HTML</span>
								<span className="badge badge-light mx-1 my-1">CSS</span>
								<span className="badge badge-light mx-1 my-1">AJAX</span>
								<span className="badge badge-light mx-1 my-1">JQuery</span>
								<span className="badge badge-light mx-1 my-1">Facenet</span>		
								<span className="badge badge-light mx-1 my-1">MTCNN</span>
								<span className="badge badge-light mx-1 my-1">Face Recognition</span>	
								<span className="badge badge-light mx-1 my-1">Deep Learning</span>	
							</div>	
						</div>
					</div>	

					<div className="col-sm-4 card">
						<div className="card-header">
							<a href="https://github.com/Madhubalajb/Expense-Split" target="_blank" className="fab fa-github"></a>
							<h3 className="project3">Expense Split</h3>
						</div>
						<div className="card-body">		
							<p>React JS based web app for splitting the expenses spent among your colleagues and friends. Developed as a part of the Hackerearth coding challenge.</p>
						</div>
						<div className="card-footer">
							<div className="badges">
								<span className="badge badge-light mx-1 my-1">React JS</span>
								<span className="badge badge-light mx-1 my-1">Node JS</span>
								<span className="badge badge-light mx-1 my-1">MongoDB</span>	
								<span className="badge badge-light mx-1 my-1">Express</span>
								<span className="badge badge-light mx-1 my-1">Redux</span>
								<span className="badge badge-light mx-1 my-1">HTML</span>
								<span className="badge badge-light mx-1 my-1">CSS</span>
								<span className="badge badge-light mx-1 my-1">Bootstrap</span>
								<span className="badge badge-light mx-1 my-1">JS</span>	
							</div>
						</div>
					</div>
				</div>	

				<div className="row" ref="box2">
					<div className="col-sm-4 card">
						<div className="card-header">
							<a href="https://github.com/Madhubalajb/Varshu-Art" target="_blank" className="fab fa-github"></a>
							<h3 className="project5">Art Gallery</h3>
						</div>
						<div className="card-body">
							<p>Web application developed using React JS for showcasing some artful sketches of my sister.</p>
						</div>
						<div className="card-footer">
							<div className="badges">
								<span class="badge badge-light mx-1 my-1">React JS</span>
								<span class="badge badge-light mx-1 my-1">HTML</span>	
								<span class="badge badge-light mx-1 my-1">SASS</span>
								<span class="badge badge-light mx-1 my-1">JS</span>
								<span class="badge badge-light mx-1 my-1">Bootstrap</span>	
							</div>	
						</div>
					</div>

					<div className="col-sm-4 card">
						<div className="card-header">
							<a href="https://github.com/Madhubalajb/github.io" target="_blank" className="fab fa-github"></a> 
							<h3 className="project4">Personal Website</h3>
						</div>
						<div className="card-header">
							<p>My personal portfolio developed using React JS</p>
						</div>
						<div className="card-footer">
							<div className="badges">
								<span class="badge badge-light mx-1 my-1">React JS</span>
								<span class="badge badge-light mx-1 my-1">HTML</span>	
								<span class="badge badge-light mx-1 my-1">SASS</span>
								<span class="badge badge-light mx-1 my-1">JS</span>
								<span class="badge badge-light mx-1 my-1">Bootstrap</span>
							</div>
						</div>
					</div>
				</div>	
			</section>			
		);
	}
};

export default Project;