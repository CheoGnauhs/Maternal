import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Result from './components/Result';
import $ from 'jquery';
import {Table} from 'react-bootstrap';

class Illness extends React.Component {
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
      $.post("http://115.159.34.252:80/api/Pregnant/Illness", {"name": sessionStorage.getItem("username").toString()}, (res) => {
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
                <h2>疾病套餐</h2>
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
                <h2>疾病套餐</h2>
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
                <h2>疾病套餐</h2>
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
                    <td>高度近视</td>
                    <td>{this.state.shortsightedness}</td>
                    <Result value={this.state.shortsightedness}/>
                  </tr>
                  <tr>
                    <td>龋齿</td>
                    <td>{this.state.cavity}</td>
                    <Result value={this.state.cavity}/>
                  </tr>
                  <tr>
                    <td>腮腺炎</td>
                    <td>{this.state.parotitis}</td>
                    <Result value={this.state.parotitis}/>
                  </tr>
                  <tr>
                    <td>甲状腺肿</td>
                    <td>{this.state.thyroid}</td>
                    <Result value={this.state.thyroid}/>
                  </tr>
                  <tr>
                    <td>白内障</td>
                    <td>{this.state.cataract}</td>
                    <Result value={this.state.cataract}/>
                  </tr>
                  <tr>
                    <td>地中海贫血</td>
                    <td>{this.state.anemia}</td>
                    <Result value={this.state.anemia}/>
                  </tr>
                  <tr>
                    <td>低骨密度</td>
                    <td>{this.state.bone_density}</td>
                    <Result value={this.state.bone_density}/>
                  </tr>
                  <tr>
                    <td>先天性肥胖</td>
                    <td>{this.state.congenital_obesity}</td>
                    <Result value={this.state.congential_obesity}/>
                  </tr>
                  <tr>
                    <td>哮喘</td>
                    <td>{this.state.asthma}</td>
                    <Result value={this.state.asthma}/>
                  </tr>
                  <tr>
                    <td>痤疮</td>
                    <td>{this.state.acne}</td>
                    <Result value={this.state.acne}/>
                  </tr>
                  <tr>
                    <td>脊柱侧弯</td>
                    <td>{this.state.scoliosis}</td>
                    <Result value={this.state.scoliosis}/>
                  </tr>
                  <tr>
                    <td>肾病综合征</td>
                    <td>{this.state.nephroma}</td>
                    <Result value={this.state.nephroma}/>
                  </tr>
                  <tr>
                    <td>进行性营养不良</td>
                    <td>{this.state.PMD}</td>
                    <Result value={this.state.PMD}/>
                  </tr>
                  <tr>
                    <td>急性淋巴细胞白血病</td>
                    <td>{this.state.ALL}</td>
                    <Result value={this.state.ALL}/>
                  </tr>
                  <tr>
                    <td>I型糖尿病</td>
                    <td>{this.state.I_diabetes}</td>
                    <Result value={this.state.I_diabetes}/>
                  </tr>
                  <tr>
                    <td>II型糖尿病</td>
                    <td>{this.state.II_diabetes}</td>
                    <Result value={this.state.II_diabetes}/>
                  </tr>
                  <tr>
                    <td>儿童高血压</td>
                    <td>{this.state.COH}</td>
                    <Result value={this.state.COH}/>
                  </tr>
                  <tr>
                    <td>儿童高血脂</td>
                    <td>{this.state.CWH}</td>
                    <Result value={this.state.CWH}/>
                  </tr>
                  <tr>
                    <td>新生儿低血糖</td>
                    <td>{this.state.hypoglycemia}</td>
                    <Result value={this.state.hypoglycemia}/>
                  </tr>
                  <tr>
                    <td>软组织胶原病的易感性</td>
                    <td>{this.state.soft_tissue}</td>
                    <Result value={this.state.soft_tissue}/>
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

export default Illness;