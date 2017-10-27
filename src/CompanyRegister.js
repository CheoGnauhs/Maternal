import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Selector from './components/Selector';
import $ from "jquery";

class CompanyReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyname: "",
      orporateRepresentative: "",
      chosenAddress: "",
      detailedAddress: "",
      contactperson: "",
      contactphone: "",
      username: "",
      password: "",
      confirmPassword: ""
    }
  }

  transferMsg(msg) {
    this.state.chosenAddress = msg;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("前后输入的密码不一致,请检查");
    }
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://115.159.34.252:80/api/Pregnant/BusinessRegister",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
      },
      "data": {
        companyname: this.state.companyname,
        orporateRepresentative: this.state.orporateRepresentative,
        companyaddr: this.state.chosenAddress + "," + this.state.detailedAddress,
        contactperson: this.state.contactperson,
        contactphone: this.state.contactphone,
        username: this.state.username,
        password: this.state.password
      }
    };
    $.ajax(settings).done((response) => {
      console.log(JSON.parse(response));
      if (JSON.parse(response)["result"].toString() === "success") {
        alert("注册成功");
        this.props.history.push("/comlogin");
      }
      else if (JSON.parse(response)["result"].toString() === "fail5") {
        alert("该用户名已经存在");
      }
      else if (JSON.parse(response)["result"].toString() === "fail5") {
        alert("注册失败");
      }
    });
  }

  render() {
    return (
        <div>
          <Header fontColor="blueFont" logoName="comLogo" headerType="registerHeader" navType="registerHeaderNav"/>
          <div className="registerBox">
            <div className="registerMain color1 ">
              <form onSubmit={e => this.onSubmit(e)}>
                <div>
                  <label htmlFor="companyName">用户名:</label>
                  <input className="blueBorder" id="username" type="text" value={this.state.username}
                         onChange={e => this.setState({username: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="companyName">密码:</label>
                  <input className="blueBorder" id="password" type="password" value={this.state.password}
                         onChange={e => this.setState({password: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="companyName">确认密码:</label>
                  <input className="blueBorder" id="confirmPassword" type="password" value={this.state.confirmPassword}
                         onChange={e => this.setState({confirmPassword: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="companyName">公司名称:</label>
                  <input className="blueBorder" id="companyName" type="text" value={this.state.companyname}
                         onChange={e => this.setState({companyname: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="LMName">法人代表:</label>
                  <input className="blueBorder" id="LMName" type="text" value={this.state.orporateRepresentative}
                         onChange={e => this.setState({orporateRepresentative: e.target.value})}/>
                </div>
                <div>
                  <label>营业执照:</label>
                  <input className="blueBorder" type="file"/>
                </div>
                <div>
                  <label>法人身份证:</label>
                  <input className="blueBorder" type="file"/>
                </div>
                <div>
                  <label>公司地址:</label>
                  <Selector transferMsg={msg => this.transferMsg(msg)}/>
                  <br/>
                  <label> </label>
                  <input className="blueBorder newLine" type="text" placeholder="详细地址"
                         value={this.state.detailedAddress}
                         onChange={e => this.setState({detailedAddress: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="contactName">联系人:</label>
                  <input className="blueBorder" type="text" id="contactName" value={this.state.contactperson}
                         onChange={e => this.setState({contactperson: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="contact">联系人电话:</label>
                  <input className="blueBorder" type="text" id="contact" value={this.state.contactphone}
                         onChange={e => this.setState({contactphone: e.target.value})}/>
                </div>
                <input className="btn blue submitBtn" type="submit" value="提交"/>
              </form>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default CompanyReg;