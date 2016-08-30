'use strice';

class ExcellentCourse extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
				<div className='top'>
					<div className='header'>
						<h3>{this.props.header}</h3>
					</div>
					<div className='middle'>
						<span>{this.props.middle}</span>
					</div>
					<div className='footer'>
						<span>{this.props.footer}</span>
					</div>
				</div>
			);
	}
}
const topContent = {
	header:"一灯学堂",
	middle:"梦想变为现实的地方",
	footer:"几十位大牛带你一起学习新技术新领域"
};

ReactDOM.render(
	<ExcellentCourse {...topContent}/>,
	document.getElementById('excellentCourse-widget-top')
	);