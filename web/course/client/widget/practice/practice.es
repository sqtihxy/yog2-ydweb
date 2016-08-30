"use strict";
import BannerBox from 'banner.es';
import Inner from 'inner.es';
const topinform={
	itemtop:{
				name1:'0基础学前端开发',
				name2:'从小白到大牛只差这一小步',
				url:'http://www.baidu.com',
				imgbg:__uri('../../static/images/banner1.png'),
				imgbtn:__uri('../../static/images/btn.png')
				}
			}
class ParTice extends React.Component{
	mixins: [React.addons.PureRenderMixin]
	constructor(props){
		super(props);
		let itemchange=Immutable.Map({
			classname:[
				{
					name:'JavaScripz',
					link:'http://www.baidu.com'
				},{
					name:'Css3',
					link:'http://www.baidu.com'
				},{
					name:'Html5',
					link:'http://www.baidu.com'
				},{
					name:'jQuery',
					link:'http://www.baidu.com'
				},{
					name:'AngularJS',
					link:'http://www.baidu.com'
				},{
					name:'Node.js',
					link:'http://www.baidu.com'
				}
			],
			classtype:[
				{
					name:'初级',
					link:'http://www.baidu.com'
				},
				{
					name:'中级',
					link:'http://www.baidu.com'
				},
				{
					name:'高级',
					link:'http://www.baidu.com'
				}
			],
			classitem:[
				{
					name:'人气从高到低',
					link:'http://www.baidu.com'
				},
				{
					name:'时间',
					link:'http://www.baidu.com'
				},
				{
					name:'收藏',
					link:'http://www.baidu.com'
				}
			],
			classinner:[
				{
					img:__uri('../../static/images/course-pic01.jpg'),
					name:'HTML+CSS基础课程1',
					teacher:'袁老师',
					link:'http://www.baidu.com'
				},
				{
					img:__uri('../../static/images/course-pic01.jpg'),
					name:'HTML+CSS基础课程2',
					teacher:'袁老师',
					link:'http://www.baidu.com'
				},
				{
					img:__uri('../../static/images/course-pic01.jpg'),
					name:'HTML+CSS基础课程3',
					teacher:'袁老师',
					link:'http://www.baidu.com'
				},
				{
					img:__uri('../../static/images/course-pic01.jpg'),
					name:'HTML+CSS基础课程4',
					teacher:'袁老师',
					link:'http://www.baidu.com'
				},
				{
					img:__uri('../../static/images/course-pic01.jpg'),
					name:'HTML+CSS基础课程5',
					teacher:'袁老师',
					link:'http://www.baidu.com'
				}
			]
		}
		)
		this.state=itemchange
	}
	render(){
		 return (
		 	<div>
		 		<BannerBox item={topinform}/>
		 		<div className="classbox">
		 			<Inner inform={this.state}/>
		 		</div>
		 		<ul className="pagefooter">
		 			<li><a href="javascript:;">首</a></li>
		 			<li className='action'><a href="javascript:;">1</a></li>
		 			<li><a href="javascript:;">2</a></li>
		 			<li><a href="javascript:;">3</a></li>
		 			<li><a href="javascript:;">4</a></li>
		 			<li><a href="javascript:;">5</a></li>
		 			<li><a href="javascript:;">6</a></li>
		 			<li><a href="javascript:;">&gt;</a></li>
		 			<li><a href="javascript:;">尾</a></li>
		 		</ul>
		 	</div>
		 	)
	}
}
ReactDOM.render(
  <ParTice/>,
  document.getElementById('widget-partcie')
);