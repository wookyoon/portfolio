import React from 'react';
const path = process.env.PUBLIC_URL;

function About() {
	return (
		<section id='about'>
			<div className='inner'>
				<div className='info'>
					<h1>About Me</h1>
				</div>
				<div className='content'>
					<h2>Q.&ensp;프론트앤드</h2>
					<p>
						A.&ensp;프론트앤드는 웹 서비스의 얼굴입니다.&ensp;웹페이지의
						첫인상이 좋아야 사용자의 지속적인 이용을 유도할 수 있습니다. <br />
						'디지털 소비자 경험' 연구 경력을 활용하여 서비스 이용자의 편의에
						최적화된 UI와 프론트앤드 기술을 개발할 수 있습니다.
					</p>
					<h2>Q.&ensp;PM 및 협업</h2>
					<p>
						A.&ensp;브랜딩과 마케팅을 책임지는 PM 경험을 활용하여, 2021년 한
						해에 총 4번의 IT관련 대회에서 수상했습니다.
						<br />
						기획팀의 의도를 분명히 파악하여 디자인팀과 순조로운 조율이 가능한
						개발자가 될 수 있습니다.
					</p>
					<h2>Q.&ensp;고객과 소통</h2>
					<p>
						A.&ensp;홍보에이전시에서 다양한 고객의 요구를 반영하여 프로젝트를
						했습니다.
						<br />
						고객의 요구사항을 정확히 실행하고, 수정사항을 신속하게 이행할 수
						있는 능동적인 개발자입니다.
					</p>
					<h2>Q.&ensp;풀스텍 훈련</h2>
					<p>
						A.&ensp;디자이너, 백앤드개발자와 정확한 의사소통과 협업을 위해서 웹
						프로그래밍의 전반적인 이해가 필요합니다.
						<br />
						Scss, Javascript, React 뿐만 아니라 Redux, Node.js, MongoDB 실습을
						통해 데이터와 서버를 다룰 수 있습니다.
					</p>
					<h2>Q.&ensp;향후 계획</h2>
					<p>
						A.&ensp;사용자에게 보다 쉬운 경험을 제공할 수 있는 하이브리드 앱 및
						프로그레시브 웹 앱을 제작하는 것이 목표입니다.
						<br />
						추가적으로 React Native를 공부하여 웹과 모바일 모두를 다룰 수 있는
						프론트앤드 개발자가 될 것 입니다.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
