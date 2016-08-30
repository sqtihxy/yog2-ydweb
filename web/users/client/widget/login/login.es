"use strict";

import Input from '../input/input.es';

class Register extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        loading:false
      }
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick(e){
    // this.state ={
    //   $(this.refs.loginbtn).css('background-color','grey'),
    //     loading:false
    //   }
    //发起请求
    reqwest({
      url: 'verify',
      type: 'json',
      data:{mobile:this.refs.moblie.value,
               password:this.refs.password.value},
     })
     .then((resp)=> {
        console.log(resp);//后台给的正确登录的信息
        this.setState({loading: true, data: resp});
     })
     .fail((err)=> {
        this.setState({loading: false, error: err});
     })
  }

  render () {
    return(
      <div className="register_box">
        <div className="register_content">
          <div className="register_her">
            <h3 className="register_title">登录一灯学堂</h3>
            <span>注册<i className="icon_go">&#xe603;</i></span>
          </div>
          <Input icon="&#xe601;" ref="moblie" placeholder="手机/用户名/邮箱"/>
          <Input icon="&#xe602;"  ref="password" placeholder="请输入密码" />
          <div className="agree_div">
            <label className="agree_box">
              <input type="checkbox" id="agreeCheck" className="agree_check"/>&nbsp;
              记住密码
            </label>
            <a href="#" className="forgot">忘记密码>></a>
          </div>
          <input type="button" ref="loginbtn" className="submit_btn" value={this.state.a} onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default Register;