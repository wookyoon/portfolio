import React from 'react';
const path = process.env.PUBLIC_URL;

function Skills() {
	return (
		<section id='skills'>
			<div className='inner'>
				<div className='pic'>
					<img src={`${path}/img/p3.png`} alt='' />
				</div>
				<div className='content'>
					<h1>Computer Skills</h1>
				</div>
			</div>
		</section>
	);
}

export default Skills;
