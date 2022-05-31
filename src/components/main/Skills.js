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
					<br />
					<h2>
						HTML / CSS
						<br />
						JavaScript / React
						<br />
						Python / R
						<br />
						Photoshop / Premiere Pro
						<br />
						Excel / PowerPoint / Word
						<br />
						<span className='tit'>Awards</span>
						<span>2021 08</span>&ensp;K-Digital Training 인터페이스 개발
						경진대회 우수상
						<br />
						<span>2021 11</span>&ensp;K-Digital Training 빅데이터 분석 경진대회
						우수상
						<br />
						<span>2021 11</span>&ensp;데이터 활용 아이디어&amp;시각화 경진대회
						우수상
						<br />
						<span>2021 12</span>&ensp;K-Digital Training 융복합 프로젝트
						경진대회 우수상
					</h2>
				</div>
			</div>
		</section>
	);
}

export default Skills;
