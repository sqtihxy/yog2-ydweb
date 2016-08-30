class FirstPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<li className='list-item'>
        		<p><a href={this.props.data.href}>{this.props.data.title}</a></p>
        		<p>{this.props.data.desc}</p>
        	</li>
        	);
    }
}
const list = [{
    title: 'js序员必须知道的知识',
    desc: 'js序员必须知道的知识js序员必须知道的知识js序员必须知道的知识js序员必须知道的知识',
    href: "www.baidu.com"
}, {
    title: 'js序员必须知道的知识1',
    desc: 'js序员必须知道的知识js序员必须知道的知识js序员必须知道的知识js序员必须知道的知识',
    href: "www.baidu.com"
}];
class Wrapclass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div>
        	   <div className="techon-first-banber">
					<p className="title">有问题在这里提问，轻松帮你搞定</p>
				</div>
				<div className="techon-first-titles">
					<div className="left">
						<p className="title">javascript程序员必须知道的知识 </p>
					</div>
				    <div className="right">
					   <ul>
					   {
		                  this.props.data.map((item)=>{
		                    return <FirstPanel data={item} />
		                  })
		              }
					   </ul>
				    </div>
			    </div>
            </div>
        	);
    }
}

ReactDOM.render(
    <Wrapclass data={list} />,
    document.getElementById('firstContainer')
);