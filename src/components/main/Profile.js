import React from 'react';
const path = process.env.PUBLIC_URL;

function Profile() {
	return (
		<section id='profile'>
			<div className='inner'>
				<div className='info'>
					<h1>Profile</h1>
					<h2>
						<br /> 웹 사용자가 처음 접하는 것은 웹페이지의 화면입니다.
						<br /> 웹사이트의 컨셉과 경험은 얼굴과 같습니다.
						<br /> maiores a porro iusto facere ex.
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
