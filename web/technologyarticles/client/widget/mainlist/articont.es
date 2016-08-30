"ues strict";

class Articont extends React.Component{
	constructor(props) {
		super(props); 
        this.state ={ 
        	list : this.props.data
        }
	}

	render() {
		return (
			<ul className='mainlist-article'>
				{
					this.state.list.map((item,i)=>{
						return (
							<li>
								<div className='mainlist-article-up'>
									<a href={item.url}>
										{i==0?'':<img src={item.imgSrc} alt="文章图片" />}
										<div className='mainlist-article-cont'>
											<h3>{item.title}</h3>
											<p>{item.abstract}</p>
										</div>
									</a>
								</div>
								<div className='mainlist-article-dowm'>
									<span>{item.author}</span>
									<ul>
										<li>{item.browseNum}浏览</li>
										<li>{item.RecommendNum}推荐</li>
										<li>{item.commentNum}评论</li>
									</ul>
								</div>
							</li>
						)
					})
				}
			</ul>
		);
	}
}

export default Articont;