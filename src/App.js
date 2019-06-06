import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './components/About'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
     <Router>
		<div className="App">
			<Navigation />
			<Route exact path="/" component={Home} />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	</Router>	
  );
}

export default App;
