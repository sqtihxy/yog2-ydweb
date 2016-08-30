"use strict";

import Input from '../input/input.es';

class Register extends React.Component {
	constructor(props){
      super(props);
      this.state ={
        loading:false
      }
      this.handleClick = this.handleClick.bind(this);
      this.captchaClick = this.captchaClick.bind(this);
    }

  handleClick(e){
    //用户注册发起请求
    reqwest({
      url: 'registerVerify',
      type: 'json',
      data:{mobile:this.refs.moblie.value,
               password:this.refs.password.value,
               captcha:this.refs.captcha.value,},
     })
     .then((resp)=> {
        console.log(resp);//后台给的正确登录的信息
        this.setState({loading: true, data: resp});
     })
     .fail((err)=> {
        this.setState({loading: false, error: err});
     })
  }
  captchaClick(e){
    //获取动态验证码发起请求
    reqwest({
      url: 'acquireCaptcha',
      type: 'json',
      data:{mobile:this.refs.moblie.value},
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
						<h3 className="register_title">注册一灯学堂</h3>
						<span>登录<i className="icon_go">&#xe603;</i></span>
					</div>
					<Input icon="&#xe601;" ref="moblie" placeholder="手机"/>
					<Input icon="&#xe602;" ref="password" placeholder="请输入密码"/>
					<div className="security_box">
						<input type="text"  className="security" ref="captcha" placeholder="请输入动态码"/>
						<input type="button" className="security_btn" value={this.state.a} onClick={this.captchaClick}/>				
					</div>
					<label className="agree_box">
						<input type="checkbox" id="agreeCheck" className="agree_check"/>
						&nbsp;我已阅读并同意《服务协议》
					</label>
					<input type="button" className="submit_btn" value={this.state.a} onClick={this.handleClick}/>
				</div>
			</div>
		)
	}
}

export default Register;