 "use strict";
 class Page extends React.Component{
 	constructor(props){
 		super(props);
 	}
 	componentDidMount(){

 	}
 	render(){
 		let pagearray = this.props.page;
 		let pages = pagearray.map((page,index)=>{
 			return (<li key={index}><a href="#" className={page==1?"highlight":""}>{page}</a></li>);
 		})
 		return (<ol>
 			<li><a href="#">首</a></li>
 			{pages}
 			<li><a href="#">></a></li>
 			<li><a href="#">尾</a></li>
 			</ol>);
 	}
 }
 ReactDOM.render(<Page page={[1,2,3,4]}/>,document.getElementById("pagination"));