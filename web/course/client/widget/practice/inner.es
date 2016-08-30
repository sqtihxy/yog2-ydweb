"use strict";
class Inner extends React.Component{
	render(){

		return(

				<div className="innerbox">
					<h1>全部课程</h1>
					<ul className='list'>
						<li>
							<span>前端分类:</span>
							{
							(this.props.inform.get('classname')).map((data)=>{
								return <a href={data.link}>{data.name}</a>
							})
						}
						</li>
						<li>
							<span>难度级数:</span>
							{
							(this.props.inform.get('classtype')).map((data)=>{
								return <a href={data.link}>{data.name}</a>
							})
							}
						</li>
						<li>
							<span>分类:</span>
							{
								(this.props.inform.get('classitem')).map((data)=>{
									return <a href={data.link}>{data.name}</a>
								})
							}
						</li>
					</ul>
					<div className="content">
						<ul>
						{
								(this.props.inform.get('classinner')).map((data)=>{
									return 	<li>
												<a href={data.link}>
													<div className="imgbox">
														<img src={data.img} alt=""/>
													</div>
													<p>{data.name}</p>
													<span>{data.teacher}</span>
												</a>
											</li>
								})
							}
						</ul>
					</div>
				</div>
			)
	}
}



export default Inner;