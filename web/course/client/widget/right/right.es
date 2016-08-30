'use strice';
class ExcellentCourseList extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		var courseList = this.props.data;
		var courseListHtml = courseList.map(function (course, index) {
	        return (
	          <div className="widget-right-box" key={index}>
					<img width="100%" height="100%" src={course.courseImg}/>
					<p className="widget-right-box-p">{course.courseTitle}</p>
					<div className="widget-right-box-jies">
						<img src={course.courseTercheImg}/>
						<h1>{course.courseTitle}</h1>
						<p>{course.courseDesc}</p>
						<a href="#">开始学习</a>
					</div>
			 </div>
	        );
	      });
        return (<div>{courseListHtml}
<div className="excellentCourse-widget-right-page">
    <a href="javascript:void(0);">首</a>
    <a href="javascript:void(0);">1</a>
    <a href="javascript:void(0);" className="now">2</a>
    <a href="javascript:void(0);">3</a>
    <a href="javascript:void(0);">4</a>
    <a href="javascript:void(0);">5</a>
    <a href="javascript:void(0);">6</a>
    <a href="javascript:void(0);">></a>
    <a href="javascript:void(0);">尾</a>
</div>
            </div>

            )
    }
}
const courseList = [{
    courseImg: __uri("../../static/images/excellentCourse-img1.jpg"),
    courseTitle:"HTML5+CSS3实现春节贺卡",
    courseTercheImg:__uri("../../static/images/excellentCourse-tx.png"),
    courseDesc:"本课程为大家带来如何使用Android SDK进行基于LBS的开发高德地图Android SDK版是一套地图"
}, {
    courseImg: __uri("../../static/images/excellentCourse-img2.jpg"),
    courseTitle:"HTML5+CSS3实现春节贺卡",
    courseTercheImg:__uri("../../static/images/excellentCourse-tx.png"),
    courseDesc:"本课程为大家带来如何使用Android SDK进行基于LBS的开发高德地图Android SDK版是一套地图"
}, {
    courseImg: __uri("../../static/images/excellentCourse-img1.jpg"),
    courseTitle:"HTML5+CSS3实现春节贺卡",
    courseTercheImg:__uri("../../static/images/excellentCourse-tx.png"),
    courseDesc:"本课程为大家带来如何使用Android SDK进行基于LBS的开发高德地图Android SDK版是一套地图"
},{
    courseImg: __uri("../../static/images/excellentCourse-img2.jpg"),
    courseTitle:"HTML5+CSS3实现春节贺卡",
    courseTercheImg:__uri("../../static/images/excellentCourse-tx.png"),
    courseDesc:"本课程为大家带来如何使用Android SDK进行基于LBS的开发高德地图Android SDK版是一套地图"
}, {
    courseImg: __uri("../../static/images/excellentCourse-img1.jpg"),
    courseTitle:"HTML5+CSS3实现春节贺卡",
    courseTercheImg:__uri("../../static/images/excellentCourse-tx.png"),
    courseDesc:"本课程为大家带来如何使用Android SDK进行基于LBS的开发高德地图Android SDK版是一套地图"
},{
    courseImg: __uri("../../static/images/excellentCourse-img2.jpg"),
    courseTitle:"HTML5+CSS3实现春节贺卡",
    courseTercheImg:__uri("../../static/images/excellentCourse-tx.png"),
    courseDesc:"本课程为大家带来如何使用Android SDK进行基于LBS的开发高德地图Android SDK版是一套地图"
}]

ReactDOM.render(
    <ExcellentCourseList data={courseList} />,
    document.getElementById('excellentCourse-widget-right')
);