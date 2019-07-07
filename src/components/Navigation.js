import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="sm" className="fixed-top">
			<Navbar.Brand href="/">
				{/* <b>M</b><span>adhubala</span> */}
				<b>&#123;name: 'Madhubala'&#125;</b>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="Links ml-auto">
					<Nav.Link href="#About"><strong>. about</strong></Nav.Link>
					<Nav.Link href="#Skills"><strong>. skills</strong></Nav.Link>
					<Nav.Link href="#Projects"><strong>. projects</strong></Nav.Link>
					<Nav.Link href="#Contact"><strong>. contact</strong></Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation;