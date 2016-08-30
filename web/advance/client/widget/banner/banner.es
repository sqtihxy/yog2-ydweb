"use strict";

import bannerData from 'data.es';

//列表容器
class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'data':bannerData
        };
    }

    render() {
        return (
           <div>
            <div className="c-statics">
                <div className="item">
                    <span className="text">{this.state.data.course}课程</span>
                </div>
                <div className="item">
                    <span className="text">{this.state.data.time}天学习时长</span>
                </div>
                <div className="item">
                    <span className="text">{this.state.data.people}人正在学习</span>
                </div>
            </div>
            <div className="c-button">
                <a className="btn" href={this.state.data.btnUrl}>立即报名</a>
            </div>
           </div>
        )
    }
}


ReactDOM.render(
    <Banner />,
    document.getElementById('box')
);