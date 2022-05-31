import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);
const path = process.env.PUBLIC_URL;

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<div className='title'>
					<h1>contact</h1>
					<p>Wookyoon Jeung</p>
				</div>
				<div className='box'>
					<h2>
						<FontAwesomeIcon icon={['fab', 'whatsapp']} />
					</h2>
					<h3>010-4021-4537</h3>
				</div>
				<div className='box'>
					<h2>
						<FontAwesomeIcon icon={['fab', 'google']} />
					</h2>
					<h3>wookyoon.jeung@gmail.com</h3>
				</div>
				<div className='box'>
					<h2>
						<FontAwesomeIcon icon={['fab', 'github']} />
					</h2>
					<h3>
						<a href='https://github.com/wookyoon'>
							https://github.com/wookyoon
						</a>
					</h3>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
