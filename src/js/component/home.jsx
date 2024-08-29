import React from "react";
import { Navbar } from "./Navbar.jsx"
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import { Footer } from "./Footer.jsx";
const Home = () => {
	return (
		<div style={{paddingBottom: "2.5rem"}}>
			< Navbar />
			<div className="container">
				< Jumbotron /> 
				< Cards />
			</div>
			< Footer />
		</div>
	);
};

export default Home;
