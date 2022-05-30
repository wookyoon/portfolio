import React from 'react';
const path = process.env.PUBLIC_URL;

function About() {
	return (
		<section id='about'>
			<div className='inner'>
				<div className='info'>
					<h1>About Me</h1>
				</div>
				<div className='content'>
					<h2>INTRODUCTION</h2>
					<p>
						Quite often, during complex projects, it’s natural for us to split
						roles of Frontend and UI developers. Nevertheless, non – technical
						people don’t always understand this decision.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
