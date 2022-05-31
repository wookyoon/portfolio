import React from 'react';
const path = process.env.PUBLIC_URL;

function Work() {
	return (
		<section id='work'>
			<div className='inner'>
				<div className='content'>
					<h1>Work Experience</h1>
					<h2>
						<br />
						<br />
						<span>2016 06 - 12</span>&ensp;빨간바지투어 런던 (투어가이드)
						<br />
						<span>2019 09 - 12</span>&ensp;런던 프린지 영화제(마케팅AE)
						<br />
						<span>2020 03 - 06</span>&ensp;팍스덕션 (마케팅매니저)
						<br />
						<span>2020 12 - 2021 04</span>&ensp;피알비즈 (홍보AE)
						<br />
						<span>2021 04 - 06</span>&ensp;이타북스 (브랜드매니저)
					</h2>
				</div>
				<div className='pic'>
					<img src={`${path}/img/p4.jpg`} alt='' />
				</div>
			</div>
		</section>
	);
}

export default Work;
