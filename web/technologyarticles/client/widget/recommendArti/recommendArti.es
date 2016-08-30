"use strict";
const json = [
	 {title:"如何写出正确的单例模式",focus:1288,recommend:32,comment:212},
	 {title:"面试题之Java中的栈和队列的实现",focus:2888,recommend:28,comment:100},
	 {title:"新前端路上的摇滚",focus:1290,recommend:17,comment:12}
	];
class ArticleList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			loading : true, error : null, data : null
		};
	}
	componentDidMount(){
		this.setState({loading : false, data : this.props.list});
	}
	render(){
		if(this.state.loading){
			return (<h4>加载中...</h4>);
		}
		else if(this.state.error !== null){
			return (<h4>Error: {this.state.error.message}</h4>);
		}
		else{
			let articleArray = this.state.data;
			let articleList = articleArray.map((article)=>{
				return (<div className="hot-article">
							<h3><a className="title" href="#">{article.title}</a></h3>
							<div className="op">
								<a className="focus" href="#">{article.focus}浏览</a>
								<a className="recommend" href="#">{article.recommend}推荐</a>
								<a className="comment" href="#">{article.comment}评论</a>
							</div>
							
						</div>);
			});
			return <div>{articleList}</div>;
		}
	}
}
ReactDOM.render(<ArticleList list={json}/>,document.getElementById("recommend"));
