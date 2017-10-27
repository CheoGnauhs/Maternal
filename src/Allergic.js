import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Result from './components/Result';
import $ from 'jquery';
import {Table} from 'react-bootstrap';

class Allergic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExist: ""
    };
  }

  componentWillMount() {
    if (sessionStorage.getItem("username") === null) {
      this.state.isExist = "none";
    }
    else {
      $.post("http://115.159.34.252:80/api/Pregnant/Allergic", {"name": sessionStorage.getItem("username").toString()}, (res) => {
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
                <h2>过敏套餐</h2>
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
                <h2>过敏套餐</h2>
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
                <h2>过敏套餐</h2>
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
                    <td>大米</td>
                    <td>{this.state.rice}</td>
                    <Result value={this.state.rice}/>
                  </tr>
                  <tr>
                    <td>小麦</td>
                    <td>{this.state.wheat}</td>
                    <Result value={this.state.wheat}/>
                  </tr>
                  <tr>
                    <td>大豆</td>
                    <td>{this.state.soya}</td>
                    <Result value={this.state.soya}/>
                  </tr>
                  <tr>
                    <td>玉米</td>
                    <td>{this.state.corn}</td>
                    <Result value={this.state.corn}/>
                  </tr>
                  <tr>
                    <td>蘑菇</td>
                    <td>{this.state.mushroom}</td>
                    <Result value={this.state.mushroom}/>
                  </tr>
                  <tr>
                    <td>鸡肉</td>
                    <td>{this.state.chicken}</td>
                    <Result value={this.state.chicken}/>
                  </tr>
                  <tr>
                    <td>河鲜类</td>
                    <td>{this.state.riverfood}</td>
                    <Result value={this.state.riverfood}/>
                  </tr>
                  <tr>
                    <td>海鲜类</td>
                    <td>{this.state.seafood}</td>
                    <Result value={this.state.seafood}/>
                  </tr>
                  <tr>
                    <td>鸡蛋</td>
                    <td>{this.state.egg}</td>
                    <Result value={this.state.egg}/>
                  </tr>
                  <tr>
                    <td>畜肉类</td>
                    <td>{this.state.livestock}</td>
                    <Result value={this.state.livestock}/>
                  </tr>
                  <tr>
                    <td>西红柿</td>
                    <td>{this.state.tomato}</td>
                    <Result value={this.state.tomato}/>
                  </tr>
                  <tr>
                    <td>香蕉</td>
                    <td>{this.state.banana}</td>
                    <Result value={this.state.banana}/>
                  </tr>
                  <tr>
                    <td>蜂产品</td>
                    <td>{this.state.bees}</td>
                    <Result value={this.state.bees}/>
                  </tr>
                  <tr>
                    <td>坚果</td>
                    <td>{this.state.nut}</td>
                    <Result value={this.state.nut}/>
                  </tr>
                  <tr>
                    <td>桃子</td>
                    <td>{this.state.peach}</td>
                    <Result value={this.state.peach}/>
                  </tr>
                  <tr>
                    <td>牛奶</td>
                    <td>{this.state.milk}</td>
                    <Result value={this.state.milk}/>
                  </tr>
                  <tr>
                    <td>尘螨</td>
                    <td>{this.state.acarid}</td>
                    <Result value={this.state.acarid}/>
                  </tr>
                  <tr>
                    <td>屋尘</td>
                    <td>{this.state.dusty}</td>
                    <Result value={this.state.dusty}/>
                  </tr>
                  <tr>
                    <td>蟑螂</td>
                    <td>{this.state.roach}</td>
                    <Result value={this.state.roach}/>
                  </tr>
                  <tr>
                    <td>猫毛</td>
                    <td>{this.state.cat}</td>
                    <Result value={this.state.cat}/>
                  </tr>
                  <tr>
                    <td>狗毛</td>
                    <td>{this.state.dog}</td>
                    <Result value={this.state.dog}/>
                  </tr>
                  <tr>
                    <td>霉菌</td>
                    <td>{this.state.mushroom}</td>
                    <Result value={this.state.mushroom}/>
                  </tr>
                  <tr>
                    <td>杨树</td>
                    <td>{this.state.elm}</td>
                    <Result value={this.state.elm}/>
                  </tr>
                  <tr>
                    <td>柳树</td>
                    <td>{this.state.willow}</td>
                    <Result value={this.state.willow}/>
                  </tr>
                  <tr>
                    <td>榆树</td>
                    <td>{this.state.elm}</td>
                    <Result value={this.state.elm}/>
                  </tr>
                  <tr>
                    <td>律草</td>
                    <td>{this.state.humulus}</td>
                    <Result value={this.state.humulus}/>
                  </tr>
                  <tr>
                    <td>艾蒿</td>
                    <td>{this.state.humulus}</td>
                    <Result value={this.state.humulus}/>
                  </tr>
                  <tr>
                    <td>普通豚草</td>
                    <td>{this.state.humulus}</td>
                    <Result value={this.state.humulus}/>
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

export default Allergic;