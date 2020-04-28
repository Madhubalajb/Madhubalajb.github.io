import React from 'react';
import ExpenseSplit from './Images/ExpenseSplit.png'
import PhoneBook from './Images/Phonebook.png'

const Project = () => {
	return (
		<section id="Projects" className="container">
			<h1 className="display-3 name">Projects</h1>

			<div className="row project">
				<div className="col">
					<h2><b>Expense Split</b></h2>
					<p>React JS based web app for splitting the expenses spent among your colleagues and friends. 
						Developed as a part of the Hackerearth coding challenge.</p>
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
					<img src={ExpenseSplit} alt="Project-Expense-Split" width="800px" />
				</div>
			</div>

			<div className="row project">
				<div className="col">
					<h2><b>Phone Book</b></h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
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
					<img src={PhoneBook} alt="Project-Phone-Book" width="580px" height="450px" />
				</div>				
			</div>

			<div className="row project">
				<div className="col">
					<h2><b>Varshu's Art</b></h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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

				</div>
			</div>

			<div className="row">
				<div className="col-sm-4 card">
					<div className="card-header">
						<a href="https://github.com/Madhubalajb/FaceNet-based-Attendance-System" rel="noopener noreferrer" target="_blank" 
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
						<p>My personal portfolio developed using React JS and hosted on Github Pages.</p>
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

			{/* <div className="row">
				<div className="col-sm-4 card">
					<div className="card-header">
						<a href="https://github.com/Madhubalajb/Expense-Split" target="_blank" className="fab fa-github"></a>
						<h3 className="project3">Expense Split</h3>
					</div>
					<div className="card-body">		
						<p>React JS based web app for splitting the expenses spent among your colleagues and friends. 
						Developed as a part of the Hackerearth coding challenge.</p>
					</div>
					<div className="card-footer">
						<div className="badges">
							<span>React JS</span>
							<span>Node JS</span>
							<span>MongoDB</span>	
							<span>Express</span>
							<span>Redux</span>
							<span>HTML</span>
							<span>CSS</span>
							<span>Bootstrap</span>
							<span>JS</span>	
						</div>
					</div>
				</div> 
				<div className="col-sm-4 card">
					<div className="card-header">
						<a href="https://github.com/Madhubalajb/Varshu-Art" rel="noopener noreferrer" target="_blank" className="fab fa-github"></a>
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
			</div>	 */}
		</section>			
	)
}

export default Project;