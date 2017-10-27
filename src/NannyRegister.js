import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import $ from 'jquery';

class NannyRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      IDnumber: "",
      workyear: "",
      phone: "",
      name: "",
      password: "",
      confirmPassword: ""
    }
  }

  onSubmit(e) {
    e.preventDefault();
    for (let i in this.state) {
      if (this.state[i].toString() === "") {
        alert("请填写所有的信息");
        return;
      }
    }
    if (this.state.phone.length !== 11 || isNaN(this.state.phone) === true) {
      alert("请输入正确的手机号码");
      return;
    }
    if (this.state.IDnumber.length !== 18) {
      alert("请输入正确的身份证");
      return;
    }
    if (this.state.password !== this.state.confirmPassword) {
      alert("前后输入的密码不一致,请检查");
    }
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://115.159.34.252:80/api/Pregnant/NurseRegister",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
      },
      "data": {
        username: this.state.username,
        IDnumber: this.state.IDnumber,
        workyear: this.state.workyear,
        phone: this.state.phone,
        name: this.state.name,
        password: this.state.password,
      }
    };
    $.ajax(settings).done((response) => {
      if (JSON.parse(response)["result"].toString() === "success") {
        alert("注册成功");
        this.props.history.push("/nannylogin");
      }
      else if (JSON.parse(response)["result"].toString() === "fail5") {
        alert("该用户名已经存在");
      }
      else if (JSON.parse(response)["result"].toString() === "fail") {
        alert("注册失败");
      }
    });
  }

  render() {
    return (
        <div>
          <Header fontColor="greenFont" logoName="nannyLogo" headerType="registerHeader" navType="registerHeaderNav"/>
          <div className="registerBox">
            <div className="registerMain color3">
              <form onSubmit={e => this.onSubmit(e)}>
                <div>
                  <label htmlFor="companyName">姓名</label>
                  <input className="greenBorder" id="name" type="text" value={this.state.name}
                         onChange={e => this.setState({name: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="companyName">用户名</label>
                  <input className="greenBorder" id="username" type="text" value={this.state.username}
                         onChange={e => this.setState({username: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="companyName">密码</label>
                  <input className="greenBorder" id="password" type="password" value={this.state.password}
                         onChange={e => this.setState({password: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="companyName">确认密码</label>
                  <input className="greenBorder" id="confirmPassword" type="password" value={this.state.confirmPassword}
                         onChange={e => this.setState({confirmPassword: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="LMName">身份证号码</label>
                  <input className="greenBorder" id="LMName" type="text" value={this.state.IDnumber}
                         onChange={e => this.setState({IDnumber: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="lisenceNum">从业年限</label>
                  <input className="greenBorder" id="lisenceNum" type="number" value={this.state.workyear}
                         onChange={e => this.setState({workyear: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="bankInfo">手机号</label>
                  <input className="greenBorder" type="text" id="bankInfo" value={this.state.phone}
                         onChange={e => this.setState({phone: e.target.value})}/>
                </div>
                <div>
                  <label>上传从业职业职业证书</label>
                  <input className="greenBorder" type="file"/>
                </div>
                <div>
                  <label>上传手持身份证照片</label>
                  <input className="greenBorder" type="file"/>
                </div>
                <input type="submit" className="green submitBtn btn" name="提交" id="submitBtn"/>
              </form>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}


export default NannyRegister;