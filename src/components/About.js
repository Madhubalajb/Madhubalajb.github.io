import React from 'react';
import coder from './Images/coder.webp';

const About = () => {	
	return (
		<section id="About" className="container">
			<h1 className="display-3 name">About me</h1>
			<p className=" about first">Hey there! I am Madhubala, an independent software engineer who likes to build things 
				for the web and passionate about bringing life to it with HTML, SASS, and JavaScript.</p>
			
			<p className="about second">I'm an ardent reader, interested in reading 
			<a href="https://jnd.org/tag/book/" rel="noopener noreferrer" target="_blank"><b> Norman's</b></a> design kind of books and why not! 
			some Novels too. Watching <a href="https://www.youtube.com/channel/UCLXo7UDZvByw2ixzpQCufnA" rel="noopener noreferrer" target="_blank">
			<b>VOX</b></a> videos on YouTube is one of my favorite things.
			</p>
			
			<p className="about third">P.S. Pretty much like every developer, I can't survive without StackOverflow and YouTube. 
			Wait, of course Google too :)</p>
			
			<p className="quote fourth">"Everything has a solution, only if you're trying with patience and hard effort !!"</p>
			
			<p className="about fifth">And that's my self-composed quote which drives me up daily!!</p>
			
			<img className="coder" src={coder} alt="coder" />
		</section>
	)
}

export default About;