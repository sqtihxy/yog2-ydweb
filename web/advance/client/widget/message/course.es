'use strict';

//课程子组件
class CourseItem extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <li className="course_item">
            <a href={this.props.data.link} ><img src = {this.props.data.imgSrc} alt="抱歉,无法加载"/> </a>
            <div className="course_info">
                <h3><a href={this.props.data.link} title={this.props.data.title}>{this.props.data.title}</a></h3>
                <p>预计学习时长: {this.props.data.learnTime}</p>
            </div> 
         </li>
      );
   }
}

//课程父容器
class CourseList extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <ul className="course_panel">
		   	{
		   	  	this.props.data.map((item)=>{
                  return <CourseItem data={item} />
		   	   })
		   	}
		   </ul>
      );
   }
}
export default CourseList;