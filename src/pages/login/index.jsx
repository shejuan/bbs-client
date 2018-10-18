import React from 'react'
import './login.less'


class Login extends React.Component {
  login = () => {
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="backlogin">
        <div className="login_box">
          <div className="title">后台登录</div>
          <div>
            <input className="myinput" type="text" placeholder="手机号/用户名" defaultValue="username" />
          </div>
          <div>
            <input className="myinput" type="password" placeholder="口令" defaultValue="password" />
          </div>
          <div className="login_other">
            <a href="">找回密码</a>
            <label><input type="checkbox" name="remberme" value="apple" />记住我</label>
          </div>
          <button className="login" onClick={this.login}>登陆</button>
        </div>
      </div>
    )
  }
}
export default Login

