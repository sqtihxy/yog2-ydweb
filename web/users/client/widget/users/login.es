"use strict";
//登陆
import Register from '../login/login.es';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="users">
                <div className="users_content">
                    <div className="users_info">
                        <div className="biginfo">加入一灯学堂<br/>重拾学习的乐趣</div>
                        <div className="smallinfo">跟一线实践派大牛学习，月薪3万不是梦<br/>或许，一次培训，终生朋友</div>
                    </div>
                    <div className="users_box">
                        <Register />
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Users/>,
        document.getElementById('users')
);

export default Users;