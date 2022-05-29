import Header from '../common/Header';
import Visual from './Visual';
import Education from './Education';
import Profile from './Profile';
import Skills from './Skills';
import Work from './Work';

function Main() {
	return (
		<main>
			<Header type={'main'} />
			<Visual />
			<Profile />
			<Education />
			<Work />
			<Skills />
		</main>
	);
}

export default Main;
