import { NavLink } from 'react-router-dom';
import { useRef } from 'react';

function Header(props) {
	const active = { color: '#d5a869' };

	return (
		<header className={props.type}>
			<div className='inner'>
				<ul id='gnb'>
					<li>
						<NavLink activeStyle={active} exact to='/'>
							Profile
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/reactp'>
							React
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/html'>
							HTML
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/about'>
							About
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
