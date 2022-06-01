import React from 'react';
const path = process.env.PUBLIC_URL;

function Profile() {
	return (
		<section id='profile'>
			<div className='inner'>
				<div className='info'>
					<h1>Profile</h1>
					<h2>
						<br /> 웹 이용자가 처음 접하는 것은 웹의 UI입니다.
						<br /> 직관적이고 편한 UX가 고객의 충성도를 좌우합니다.
						<br />
						<br /> 대학원에서 디지털 소비자 경험을 연구를 한 후,
						<br />
						홍보에이전시와 다양한 고객을 상대했으며,
						<br /> 마케팅 PM을 하며 다수의 팀과의 협업에 익숙합니다.
						<br />
						<br />
						능동적인 소통을 중심으로 웹 경험의 중요성을 이해하는
						<br /> UI, 프론트앤드 개발자가 될 준비가 되어있습니다.
					</h2>
				</div>
				<div className='pic'>
					<img src={`${path}/img/p5.jpg`} alt='' />
				</div>
			</div>
		</section>
	);
}

export default Profile;
