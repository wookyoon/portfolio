import React from 'react';
const path = process.env.PUBLIC_URL;

function Work() {
	return (
		<section id='work'>
			<div className='inner'>
				<div className='content'>
					<h1>Work Experience</h1>
				</div>
				<div className='pic'>
					<img src={`${path}/img/p4.jpg`} alt='' />
				</div>
			</div>
		</section>
	);
}

export default Work;
