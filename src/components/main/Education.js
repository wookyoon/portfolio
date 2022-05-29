import React from 'react';
const path = process.env.PUBLIC_URL;

function Education() {
	return (
		<section id='edu'>
			<div className='inner'>
				<div className='pic'>
					<img src={`${path}/img/p2.png`} alt='' />
				</div>
				<div className='content'>
					<h1>Education</h1>
				</div>
			</div>
		</section>
	);
}

export default Education;
