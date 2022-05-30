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
					<h2>
						<br />
						2008 - 2015 명지대학교 영화뮤지컬학부 영화 전공
						<br />
						2018 INTO City University of London 사회과학 전공
						<br />
						2018 - 2020 City University of London 석사 졸업 문화정책경영
					</h2>
				</div>
			</div>
		</section>
	);
}

export default Education;
