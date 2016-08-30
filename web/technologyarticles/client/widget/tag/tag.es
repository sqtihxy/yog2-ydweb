"use strict";

const tag_list = [
    {tagName: 'html5', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'Javascript', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'css3', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'php', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'Mysql', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'Maya', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'Java', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'MongoDB', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'React', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'Vue', tagLink: 'http://www.baidu.com'}, 
    {tagName: 'C#', tagLink: 'http://www.baidu.com'}
];

class TagList extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	taglist: tag_list,
            active: true,
            classes: "tag-list default"
        };
    }
    handleClick() {
        this.state.active = !this.state.active;

        if(!this.state.active){
            this.setState({classes: "tag-list active"})
        }else{
            this.setState( {classes: "tag-list default"} )
        }
    }
    
    render() {
    	return(
            <div>
                <div className={this.state.classes}>
                    {
                		this.state.taglist.map((item, i)=>{
                			return <a href={item.tagLink}>{item.tagName}</a>
                		})
                    }
                </div>
                <a href="javascript:;" className="more" onClick={this.handleClick.bind(this)}>
                    <span>更多</span><i></i>
                </a>
            </div>
        )

    }
}

ReactDOM.render(
	<TagList />,
	document.getElementById("articleTag")
);