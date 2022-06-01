import React from 'react';
const path = process.env.PUBLIC_URL;

function Visual() {
	return (
		<figure>
			<div className='inner'>
				<div className='pic'>
					<img src={`${path}/img/p1.png`} alt='' />
				</div>
				<div className='title'>
					<h1>Wookyoon Jeung</h1>
					<h2>
						Front-End and UI Developer
						<br />
						<span>Understanding Digital Consumers</span>
					</h2>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
