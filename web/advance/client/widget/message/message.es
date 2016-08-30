"use strict";

import CourseList from 'course.es';
import messageData from 'store.es';

//列表项组件
class MessageItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="message_wrap">
				<h2>{this.props.data.head}</h2>
				<p>{this.props.data.describe}</p>
				<CourseList data={this.props.data.courseList}/>
			</div>
		);
	}
}

//列表容器
class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'data': messageData
		};
	}

	render() {
		return (
			<div>
				{
					this.state.data.map((item)=>{
					    return <MessageItem data={item} />;
					})
				}
			</div>
		);
	}
}


ReactDOM.render(
	<MessageList />,
	document.getElementById('message-list')
);