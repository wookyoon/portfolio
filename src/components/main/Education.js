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
						<span>2008 - 2015</span>&ensp;명지대학교 영화뮤지컬학부 영화 전공
						<br />
						<span>2018</span>&ensp;INTO City, University of London 준석사
						사회과학예술 전공
						<br />
						<span>2018 - 2020</span>&ensp;City, University of London 석사
						문화정책경영 전공
						<br />
						<br />
						<span className='tit'>Additional Courses</span>
						<span>2015 08 - 2016 06</span>&ensp;GYBM 베트남 5기
						<br />
						<span>2021 06 -12</span>&ensp;멀티캠퍼스 (빅데이터 분석 서비스 개발)
						<br />
						<span>2022 04 - 05</span>&ensp;디코드랩 (React, Node.js 풀스택 개발
						)
					</h2>
				</div>
			</div>
		</section>
	);
}

export default Education;
