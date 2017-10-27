import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import $ from 'jquery';

class LoginMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://115.159.34.252:80/api/Pregnant/Login",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
      },
      "data": this.state
    };
    $.ajax(settings).then((response) => {
      if (JSON.parse(response)["result"][0].toString() === "success") {
        sessionStorage.setItem("isLogin", "true");
        sessionStorage.setItem("username", this.state.username);
        this.props.history.push('/userWelcome')
      }
      else {
        alert("登陆失败");
      }
    });
  }

  render() {
    return (
        <div className="loginMain">
          <div className={this.props.bkgType + " " + "loginMainInner"}>
            <div className="loginBlock">
              <div className="loginBlockInner">
                <form onSubmit={e => this.onSubmit(e)}>
                  <div>
                    <input className={this.props.borderColor} type="text" name="worker-name"
                           placeholder="请输入您的姓名" value={this.state.username}
                           onChange={e => this.setState({username: e.target.value})}/>
                  </div>
                  <div>
                    <input className={this.props.borderColor} type="password" name="worker-password"
                           placeholder="请输入您的密码" value={this.state.password}
                           onChange={e => this.setState({password: e.target.value})}/>
                  </div>
                  <div>
                    <a href="/" className="loginTag">忘记密码?</a>
                  </div>
                  <div>
                    <input type="submit" className={"btn" + " " + this.props.buttonColor} name="登录"/>
                  </div>
                </form>
                <div>
                  <Link to={this.props.regType}>
                    <button className={"btn" + " wideButton " + this.props.buttonColor}>
                      注册
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(LoginMain);