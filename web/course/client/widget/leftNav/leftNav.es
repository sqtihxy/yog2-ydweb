"use strict";

class NavALine extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		let last_i = nextProps.active.last_index;
		let cur_i = nextProps.active.cur_index;

		return (last_i == this.props.datakey || cur_i == this.props.datakey) && (last_i != cur_i);
	}

	render() {
		let last_i = this.props.active.last_index;
		let cur_i = this.props.active.cur_index;
		let datakey = this.props.datakey;
		let className = last_i == datakey ? "" : (cur_i == datakey ? "active" : "");
		return (
			<li data-kkey={this.props.datakey}  className="a_line">
				<span className={className}></span>
				<div className="wrap_content" data-kkey={this.props.datakey} >
					<span className="nav_content" data-kkey={this.props.datakey} >{this.props.data}</span>
				</div>	
			</li>
		);
	}
}



class WrapLi extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		let last_i = nextProps.active.last_index.split("_")[0];
		let cur_i = nextProps.active.cur_index.split("_")[0];
		return last_i == this.props.datakey || cur_i == this.props.datakey;
	}

	render() {
		let datakey = this.props.datakey;
		let item_i = 0;
		let _thatState = this.props.active;
		return (
			<ul className="wrap_nav" >
				<h2 className="course_title">{this.props.title}</h2>
				{
					this.props.content.map(function(index, elem) {
						return <NavALine active={_thatState} datakey={datakey + "_" + item_i++} data={index}/>;
					})
				}
			</ul>
		);
	}
}



const list = [{
	title: "初级",
	navcontent: [
		"微软新路历程",
		"前端框架那些事",
		"永不止步的前端"
	]
}, {
	title: "中级",
	navcontent: [
		"高级前端调试",
		"Sublime安装与使用方法",
		"JavaScript的变量类型"
	],
}, {
	title: "高级",
	navcontent: [
		"高级前端调试",
		"css绘制3D空间",
		"前端路径学习"
	],
}, ];


class WrapNav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			last_index: "",
			cur_index: ""
		}
		this.handle = this.handle.bind(this);
	}

	handle(e) {
		let sta = {
			last_index: this.state.cur_index,
			cur_index: e.target.dataset.kkey
		}
		this.setState(sta);
	}

	render() {

		let index_str = 0;
		let state_ = this.state;
		return (<div className="nav_all" onClick={this.handle} >
			{
				this.props.data.map(function(index, elem) {
					return <WrapLi active={state_} datakey={index_str++} content={list[elem].navcontent} title={list[elem].title} />;
				})
			}
		</div>);
	};
}



const wrap_li = document.getElementById("leftNav");
ReactDOM.render(
	<WrapNav data={list}/>,
	wrap_li
);