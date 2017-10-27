import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Result from './components/Result';
import $ from 'jquery';
import {Table} from 'react-bootstrap';

class Nutrition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExist: ":"
    };
  }

  componentWillMount() {
    if (sessionStorage.getItem("username") === null) {
      this.state.isExist = "none";
    }
    else {
      $.post("http://115.159.34.252:80/api/Pregnant/Nutrition", {"name": sessionStorage.getItem("username").toString()}, (res) => {
            this.setState(JSON.parse(res));
          }
      )
    }
  }

  render() {
    if (this.state.isExist.toString() === "none") {
      return (
          <div>
            <Header fontColor="pinkFont" logoName="userLogo" headerType="registerHeader" navType="registerHeaderNav"/>
            <div className="manageBox">
              <div className="manageInner color2">
                <h2>营养吸收套餐</h2>
                <h4>您当前并未登录，请登陆后使用</h4>
              </div>
            </div>
            <Footer/>
          </div>
      );
    }
    else if (this.state.isExist.toString() === "false") {
      return (
          <div>
            <Header fontColor="pinkFont" logoName="userLogo" headerType="registerHeader" navType="registerHeaderNav"/>
            <div className="manageBox">
              <div className="manageInner color2">
                <h2>营养吸收套餐</h2>
                <h4>数据请求失败或您并未购买此套餐</h4>
              </div>
            </div>
            <Footer/>
          </div>
      );
    }
    else {
      return (
          <div>
            <Header fontColor="pinkFont" logoName="userLogo" headerType="registerHeader" navType="registerHeaderNav"/>
            <div className="manageBox">
              <div className="manageInner color2">
                <h2>营养吸收套餐</h2>
                <Table striped bordered condensed hover>
                  <thead>
                  <tr>
                    <th>检测项目</th>
                    <th>检测结果</th>
                    <th>结果说明</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>叶酸</td>
                    <td>{this.state.folic_acid}</td>
                    <Result value={this.state.folic_acid}/>
                  </tr>
                  <tr>
                    <td>维生素A</td>
                    <td>{this.state.v_a}</td>
                    <Result value={this.state.v_a}/>
                  </tr>
                  <tr>
                    <td>低密度脂蛋白代谢</td>
                    <td>{this.state.LDL}</td>
                    <Result value={this.state.LDL}/>
                  </tr>
                  <tr>
                    <td>不饱和脂肪酸代谢</td>
                    <td>{this.state.fatty_acid}</td>
                    <Result value={this.state.fatty_acid}/>
                  </tr>
                  <tr>
                    <td>锌</td>
                    <td>{this.state.Zn}</td>
                    <Result value={this.state.Zn}/>
                  </tr>
                  <tr>
                    <td>维生素E</td>
                    <td>{this.state.v_e}</td>
                    <Result value={this.state.v_e}/>
                  </tr>
                  <tr>
                    <td>维生素D</td>
                    <td>{this.state.v_d}</td>
                    <Result value={this.state.v_d}/>
                  </tr>
                  <tr>
                    <td>维生素C</td>
                    <td>{this.state.v_c}</td>
                    <Result value={this.state.v_c}/>
                  </tr>
                  <tr>
                    <td>维生素B</td>
                    <td>{this.state.v_b}</td>
                    <Result value={this.state.v_b}/>
                  </tr>
                  <tr>
                      <td>镁</td>
                      <td>{this.state.Mg}</td>
                    <Result value={this.state.Mg}/>
                  </tr>
                  <tr>
                    <td>铁</td>
                    <td>{this.state.Fe}</td>
                    <Result value={this.state.Fe}/>
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <Footer/>
          </div>
      );
    }
  }
}

export default Nutrition;