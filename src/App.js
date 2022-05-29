import { Route, Switch } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Main from './components/main/Main';

import ReactP from './components/sub/ReactP';
import HTML from './components/sub/HTML';
import About from './components/sub/About';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/reactp' component={ReactP} />
			<Route path='/html' component={HTML} />
			<Route path='/about' component={About} />

			<Footer />
		</>
	);
}

export default App;
