import React from 'react';
const path = process.env.PUBLIC_URL;

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<div className='content'>
					<h1>contact</h1>
				</div>
				<div className='pic'>
					<img src={`${path}/img/p7.png`} alt='' />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
