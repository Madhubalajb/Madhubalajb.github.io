import React from 'react';
import ExpenseSplit from './Images/ExpenseSplit.png'
import PhoneBook from './Images/Phonebook.png'
import esMobile from './Images/esMobile.png'
import pbMobile from './Images/pbMobile.png'
import varshu from './Images/varshu.png'
import vMobile from './Images/varshuMobile.png'
import TrackDown from './Images/track-down.png'
import mtrackDown from './Images/mobile-track-down.png'

const Project = () => {
	return (
		<section id="Projects" className="container">
			<h1 className="display-3 name">Projects</h1>

			<div className="row project">
				<div className="col">
					<h2><b>Expense Split</b></h2>
					<p>React JS based web app for splitting the expenses spent among your colleagues and friends. 
						Developed as a part of the HackerEarth coding challenge.</p>
					<div className="badges">
						<span>React</span>
						<span>HTML</span>
						<span>SASS</span>
						<span>Bootstrap</span>
					</div>
					<div className="badges">
						<span>Node</span>
						<span>Express</span>
						<span>MongoDB</span>	
					</div>
					<div className="links">
						<a href="https://expense-split1.herokuapp.com/" rel="noopener noreferrer" target="_blank">
							<i className="material-icons">launch</i>
						</a>
						<a href="https://github.com/Madhubalajb/Expense-Split" rel="noopener noreferrer" target="_blank" className="fab fa-github" />
					</div>
				</div>
				<div className="col prj-img">
					<img className="img-one" src={ExpenseSplit} alt="Project-Expense-Split" width="800px" />
					<img className="img-two" src={esMobile} alt="Project-Expense-Split" />
				</div>
			</div>

			<div className="row project">
				<div className="col">
					<h2><b>Phone Book</b></h2>
					<p>A simple web app built for fun using React, Node, MongoDB, REST API for saving the essential phone numbers. 
					Developed as a part of the <br/>
					<a href="https://fullstackopen.com/en" rel="noopener noreferrer" target="_blank">Full Stack Open Course</a>.</p> 
					<div className="badges">
						<span>React</span>
						<span>HTML</span>
						<span>SASS</span>
						<span>Bootstrap</span>
					</div>
					<div className="badges">
						<span>Node</span>
						<span>Express</span>
						<span>MongoDB</span>	
					</div>
					<div className="links">
						<a href="https://phonebook3.herokuapp.com/" rel="noopener noreferrer" target="_blank">
							<i className="material-icons">launch</i>
						</a>
						<a href="https://github.com/Madhubalajb/FullStackOpen-Exercises/tree/master/part2/part2-b(phone_book)" 
							rel="noopener noreferrer" target="_blank" className="fab fa-github" />
					</div>
				</div>
				<div className="col prj-img">
					<img className="img-one" src={PhoneBook} alt="Project-Phone-Book" width="580px" height="450px" />
					<img className="img-two" src={pbMobile} alt="Project-Phone-Book" />
				</div>				
			</div>

			<div className="row project">
				<div className="col">
					<h2><b>Varshu's Art</b></h2>
					<p>React based Web application for showcasing some artful pastel drawings and pencil sketches of my sister.</p>
					<div className="badges">
						<span>React</span>
						<span>HTML</span>
						<span>SASS</span>
						<span>Bootstrap</span>
					</div>
					<div className="links">
						<a href="https://jayavarshini.herokuapp.com/" rel="noopener noreferrer" target="_blank">
							<i className="material-icons">launch</i>
						</a>
						<a href="https://github.com/Madhubalajb/Varshu-Art" rel="noopener noreferrer" target="_blank" className="fab fa-github" />
					</div>
				</div>
				<div className="col prj-img">
					<img className="img-one" src={varshu} alt="Project-Varshus-Art" width="675px" />
					<img className="img-two" src={vMobile} alt="Project-Varshus-Art" />
				</div>
			</div>

			<div className="row project">
				<div className="col">
					<h2><b>Track Down</b></h2>
					<p>A simple web app for helping me track and build my habits on monthly basis.</p>
					<div className="badges">
						<span>React</span>
						<span>HTML</span>
						<span>SASS</span>
						<span>Bootstrap</span>
					</div>
					<div className="badges">
						<span>Node</span>
						<span>Express</span>
						<span>MongoDB</span>
					</div>
					<div className="links">
						<a href="https://track-down.herokuapp.com/" rel="noopener noreferrer" target="_blank">
							<i className="material-icons">launch</i>
						</a>
						<a href="https://github.com/Madhubalajb/Track-Down" rel="noopener noreferrer" target="_blank" className="fab fa-github"/>
					</div>
				</div>
				<div className="col prj-img">
					<img className="img-one" src={TrackDown} alt="Project-Track-Down" width="850px" />
					<img className="img-two" src={mtrackDown} alt="Project-Track-Down" />
				</div>
			</div>

			<div className="row">
				<div className="col-sm-4 card">
					<div className="card-header">
						<a href="https://github.com/Madhubalajb/CodeDotCrush" rel="noopener noreferrer" target="_blank" 
							className="fab fa-github" />
					</div>
					<div className="card-body">
						<h3>CodeDotCrush</h3>
						<p>A simple web application to display the valuable online resources for various programming languages and technologies.</p>
					</div>
					<div className="card-footer">
						<div className="badges">
							<span>HTML</span>
							<span>CSS</span>
							<span>Bootstrap</span>
							<span>JQuery</span>
						</div> 
						<div className="badges">
							<span>PHP</span>
							<span>MySQL</span>
						</div>
					</div>
				</div>	

				<div className="col-sm-4 card">
					<div className="card-header">
						<a href="https://github.com/Madhubalajb/FaceNet-based-Attendance-System" rel="noopener noreferrer" target="_blank" 
							className="fab fa-github" />
					</div>
					<div className="card-body">
						<h3>Facenet based Attendance System</h3>
						<p>Deep learning based web app for marking the students attendance using facenet face recognition technology. 
							Developed as a part of my final year project.</p>
					</div>
					<div className="card-footer">
						<div className="badges">
							<span>HTML</span>
							<span>CSS</span>
							<span>Bootstrap</span>
							<span>JQuery</span>
						</div>
						<div className="badges">
							<span>Python</span>
							<span>Flask</span>
							<span>SQLite</span>
						</div> 	
					</div>
				</div>

				<div className="col-sm-4 card">
					<div className="card-header">
						<a href="https://github.com/Madhubalajb/Madhubalajb.github.io" rel="noopener noreferrer" target="_blank" className="fab fa-github" />
					</div>
					<div className="card-body">
						<h3>Personal Website</h3>
						<p>My personal portfolio developed using React and hosted on Github Pages.</p>
					</div>
					<div className="card-footer">
						<div className="badges">
							<span>React</span>
							<span>HTML</span>	
							<span>SASS</span>
							<span>Bootstrap</span>
						</div>
					</div>
				</div>
			</div>	
		</section>			
	)
}

export default Project;