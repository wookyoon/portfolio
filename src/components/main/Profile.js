import React from 'react';
const path = process.env.PUBLIC_URL;

function Profile() {
	return (
		<section id='profile'>
			<div className='inner'>
				<div className='info'>
					<h1>Profile</h1>
					<p>test</p>
				</div>
				<div className='pic'>
					<img src={`${path}/img/p5.jpg`} alt='' />
				</div>
			</div>
		</section>
	);
}

export default Profile;
