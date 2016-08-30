'use strict';

import Articont from 'articont.es';

const articlesData=[
	{
		title:'标题1',
		abstract:'摘要1',
		url:'http://localhost:8085/technologyarticles',
		author:'作者1',
		browseNum:88,
		RecommendNum:8,
		commentNum:8
	},{
		title:'标题2',
		abstract:'摘要2',
		url:'http://localhost:8085/technologyarticles',
		imgSrc:__uri('../../static/images/mainlist_01.jpg'),
		author:'作者2',
		browseNum:88,
		RecommendNum:8,
		commentNum:8
	},{
		title:'标题3',
		abstract:'摘要3',
		url:'http://localhost:8085/technologyarticles',
		imgSrc:__uri('../../static/images/mainlist_02.jpg'),
		author:'作者3',
		browseNum:88,
		RecommendNum:8,
		commentNum:8
	}
];

class Mainlist extends React.Component {
	constructor(props) {
		super(props); 
        this.state = { 
        	a : false
        }
	}

	componentWillMount(){
		this.setState({a:true});
		console.log(this.state.a);//
	}

	render() {
		console.log(this.state.a);
		return <Articont data={articlesData} />;
	}
}

ReactDOM.render(
    <Mainlist />,
    document.getElementById('techArti-widget-mainlist')
);