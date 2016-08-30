"use strict";
class BannerBox extends React.Component{
	render(){
		return(
				<div className="banner">
					<a href={this.props.item.itemtop.url}>
						<img className="bannerimg" src={this.props.item.itemtop.imgbg} alt=""/>
						<div className="banntext">
							<p>{this.props.item.itemtop.name1}</p>
							<span>{this.props.item.itemtop.name2}</span>
						</div>
						<img className="surebtn" src={this.props.item.itemtop.imgbtn} alt=""/>
					</a>
				</div>
			)
	}
}



export default BannerBox;