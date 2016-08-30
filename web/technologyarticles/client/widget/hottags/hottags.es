'use strict';

const hottags=[
	{tagName: 'CSS3', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'Html5/CSS', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'Html5', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'JQuery', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'Premiere', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'Maya', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'MongoDB', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'Mysql', tagLink: 'http://www.baidu.com'}
];

class Hottagslist extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		console.log(this.props.tags);
		return (
			<ul>
				{	
					this.props.tags.map((item)=>{
						return (<li><a href={item.tagLink}>{item.tagName}</a></li>);
					})
				}
			</ul>
		);
	}
}

class Hottags extends React.Component{
	render(){
		return (
			<div className='hottagsCont'>
				<h2>热门标签</h2>
				<Hottagslist tags={this.props.data} />
			</div>
		);
	}
}

ReactDOM.render(
    <Hottags data={hottags} />,
    document.getElementById('hottags')
);