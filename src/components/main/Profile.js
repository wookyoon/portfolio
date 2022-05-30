import React from 'react';
const path = process.env.PUBLIC_URL;

function Profile() {
	return (
		<section id='profile'>
			<div className='inner'>
				<div className='info'>
					<h1>Profile</h1>
					<h2>
						<br /> adipisicing elit. Nobis consectetur
						<br /> nostrum natus consequuntur quos
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
