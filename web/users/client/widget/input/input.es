"use strict";

class Userinput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let iconDom = [];
		if(this.props.icon != undefined) {
			iconDom.push(<span className="inputfont">
            	<i className="iconfont"  >{this.props.icon}</i>
            	<i></i>
            </span>)
		}
		return (
			<div className="useinput">
				{iconDom}
                <input placeholder={this.props.placeholder}/>
            </div> 
		);
		// return(
		// <div className="useinput">
  //           <span className="inputfont">
  //           	<i className="iconfont">&#xe601;</i>
  //           </span>
  //        <input placeholder="手机/用户名/邮箱"/>
  //   </div>);
	}
}

export default Userinput;