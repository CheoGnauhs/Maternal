import React from 'react'
import {Tabs, Tab} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Selector from './components/Selector';
import $ from 'jquery';

class UserRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      phone: "",
      chosenAddress: "",
      detailedAddress: "",
      Userstatus: "",
      beforedate1: "",
      beforedate2: "",
      duringdate1: "",
      duringdate2: "",
      afterdate: "",
      babygender: "",
      babyweight: ""
    };
  };

  transferMes(msg) {
    console.log(msg);
    this.state.chosenAddress = msg;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("前后输入的密码不一致,请检查");
      return;
    }
    if (this.state.phone.length !== 11 || isNaN(this.state.phone) === true) {
      alert("请输入正确的手机号码");
      return;
    }
    if (!((this.state.beforedate1.toString() !== "" && this.state.beforedate2.toString() !== "") ||
            (this.state.afterdate.toString() !== "" && this.state.babyweight.toString() !== "" && this.state.babygender.toString() !== "") ||
            (this.state.duringdate1.toString() !== "" && this.state.duringdate2.toString() !== ""))) {
      alert("请选择您现在所处状态并填写所有信息");
      return;
    }
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://115.159.34.252:80/api/Pregnant/UserRegister",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
      },
      "data": {
        username: this.state.username,
        password: this.state.password,
        phone: this.state.phone,
        address: this.state.chosenAddress + ',' + this.state.detailedAddress,
        Userstatus: this.state.Userstatus,
        beforedate1: this.state.beforedate1,
        beforedate2: this.state.beforedate2,
        duringdate1: this.state.duringdate1,
        duringdate2: this.state.duringdate2,
        afterdate: this.state.afterdate,
        babygender: this.state.babygender,
        babyweight: this.state.babyweight
      }
    };
    $.ajax(settings).done((response) => {
      console.log(JSON.parse(response)["result"].toString());
      if (JSON.parse(response)["result"].toString() === "success") {
        alert("注册成功");
        this.props.history.push("/userlogin");
      }
      else if (JSON.parse(response)["result"].toString() === "fail5") {
        alert("该用户名已经存在");
      }
      else if (JSON.parse(response)["result"].toString() === "fail") {
        alert("注册失败");
      }
      else if (JSON.parse(response)["result"].toString() === "fail2") {
        alert("注册成功");
        this.props.history.push("/userlogin");
      }
    });
  }

  render() {
    return (
        <div>
          <Header fontColor="pinkFont" logoName="userLogo" headerType="registerHeader" navType="registerHeaderNav"/>
          <div className="registerBox">
            <div className="registerMain color2">
              <form onSubmit={e => this.onSubmit(e)}>
                <div>
                  <label htmlFor="userName">用户名:</label>
                  <input className="pinkBorder" id="userName" type="text" value={this.state.username}
                         onChange={e => this.setState({username: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="userPwd">密码:</label>
                  <input className="pinkBorder" id="userPwd" type="password" value={this.state.password}
                         onChange={e => this.setState({password: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="userPwdConfirm">确认密码:</label>
                  <input className="pinkBorder" id="userPwdConfirm" type="password" value={this.state.confirmPassword}
                         onChange={e => this.setState({confirmPassword: e.target.value})}/>
                </div>
                <div>
                  <label>住址:</label>
                  <Selector transferMsg={msg => this.transferMes(msg)}/>
                </div>
                <div>
                  <label> </label>
                  <input className="pinkBorder" type="text" placeholder="详细地址" value={this.state.detailedAddress}
                         onChange={e => this.setState({detailedAddress: e.target.value})}/>
                </div>
                <div>
                  <label htmlFor="phoneNum">手机号码:</label>
                  <input className="pinkBorder" id="phoneNum" type="text" value={this.state.phone}
                         onChange={e => this.setState({phone: e.target.value})}/>
                </div>
                <div>
                  <label>请选择您现在所处的状态</label>
                </div>
                <Tabs defaultActiveKey={1} animation={false} id="statue-tab">
                  <Tab eventKey="1" title="备孕">
                    <div className="choiceBlock">
                      <div>
                        <label htmlFor="prePregnantDate">备孕开始日期:</label>
                        <input className="pinkBorder" id="prePregnantDate" type="date" value={this.state.beforedate1}
                               onChange={e => this.setState({beforedate1: e.target.value})}/>
                      </div>
                      <div>
                        <label htmlFor="preDays">计划备孕日期:</label>
                        <input className="pinkBorder" id="preDays" type="number" value={this.state.beforedate2}
                               onChange={e => this.setState({beforedate2: e.target.value})}/>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Tab 2" title="待产">
                    <div className="choiceBlock">
                      <div>
                        <label htmlFor="pregnantDate">怀孕日期:</label>
                        <input className="pinkBorder" id="pregnantDate" type="date" value={this.state.duringdate1}
                               onChange={e => this.setState({duringdate1: e.target.value})}/>
                      </div>
                      <div>
                        <label htmlFor="dueDate">预产期:</label>
                        <input className="pinkBorder" id="dueDate" type="date" value={this.state.duringdate2}
                               onChange={e => this.setState({duringdate2: e.target.value})}/>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Tab 3" title="产后">
                    <div className="choiceBlock">
                      <div>
                        <label htmlFor="birthDate">生产日期:</label>
                        <input className="pinkBorder" id="birthDate" type="date" value={this.state.afterdate}
                               onChange={e => this.setState({afterdate: e.target.value})}/>
                      </div>
                      <div>
                        <label htmlFor="babyGender">宝宝性别:</label>
                        <input className="pinkBorder" id="babyGender" type="text" value={this.state.babygender}
                               onChange={e => this.setState({babygender: e.target.value})}/>
                      </div>
                      <div>
                        <label htmlFor="babyWeight">宝宝体重:</label>
                        <input className="pinkBorder" id="babyWeight" type="text" value={this.state.babyweight}
                               onChange={e => this.setState({babyweight: e.target.value})}/>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
                <input type='submit' className="submitBtn pink"/>
              </form>
            </div>
            < div>
              <Footer/>
            </div>
          </div>
        </div>
    );
  }
}

export default UserRegister;