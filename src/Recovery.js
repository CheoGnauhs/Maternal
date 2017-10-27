import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Result from './components/Result';
import $ from 'jquery';
import {Table} from 'react-bootstrap';

class Recovery extends React.Component {
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
      $.post("http://115.159.34.252:80/api/Pregnant/Recovery", {"name": sessionStorage.getItem("username").toString()}, (res) => {
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
                <h2>产后恢复套餐</h2>
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
                <h2>产后恢复套餐</h2>
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
                <h2>产后恢复套餐</h2>
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
                    <td>青春痘</td>
                    <td>{this.state.whelk}</td>
                    <Result value={this.state.whelk}/>
                  </tr>
                  <tr>
                    <td>妊娠斑</td>
                    <td>{this.state.cyasma}</td>
                    <Result value={this.state.cyasma}/>
                  </tr>
                  <tr>
                    <td>皮肤紧致</td>
                    <td>{this.state.skin_firmness}</td>
                    <Result value={this.state.skin_firmness}/>
                  </tr>
                  <tr>
                    <td>黑色素生成</td>
                    <td>{this.state.melanin}</td>
                    <Result value={this.state.melanin}/>
                  </tr>
                  <tr>
                    <td>皮脂腺分泌</td>
                    <td>{this.state.skin_lipid}</td>
                    <Result value={this.state.skin_lipid}/>
                  </tr>
                  <tr>
                    <td>皮肤锁水能力</td>
                    <td>{this.state.skin_moisture}</td>
                    <Result value={this.state.skin_moisture}/>
                  </tr>
                  <tr>
                    <td>妊娠纹</td>
                    <td>{this.state.stretch_marks}</td>
                    <Result value={this.state.stretch_marks}/>
                  </tr>
                  <tr>
                    <td>胶原蛋白代谢</td>
                    <td>{this.state.collagen}</td>
                    <Result value={this.state.collagen}/>
                  </tr>
                  <tr>
                    <td>皮肤损伤修复能力</td>
                    <td>{this.state.skin_injury}</td>
                    <Result value={this.state.skin_injury}/>
                  </tr>
                  <tr>
                    <td>肥胖基因</td>
                    <td>{this.state.obese_gene}</td>
                    <Result value={this.state.obese_gene}/>
                  </tr>
                  <tr>
                    <td>雌激素</td>
                    <td>{this.state.estrogen}</td>
                    <Result value={this.state.estrogen}/>
                  </tr>
                  <tr>
                    <td>雄激素</td>
                    <td>{this.state.androgen}</td>
                    <Result value={this.state.androgen}/>
                  </tr>
                  <tr>
                    <td>孕酮</td>
                    <td>{this.state.progesterone}</td>
                    <Result value={this.state.progesterone}/>
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
                    <td>DHA吸收与利用</td>
                    <td>{this.state.DHA}</td>
                    <Result value={this.state.DHA}/>
                  </tr>
                  <tr>
                    <td>抑郁症</td>
                    <td>{this.state.depression}</td>
                    <Result value={this.state.depression}/>
                  </tr>
                  <tr>
                    <td>躁郁症</td>
                    <td>{this.state.irritable}</td>
                    <Result value={this.state.irritable}/>
                  </tr>
                  <tr>
                    <td>孤独症</td>
                    <td>{this.state.autistic}</td>
                    <Result value={this.state.autistic}/>
                  </tr>
                  <tr>
                    <td>精分</td>
                    <td>{this.state.schizophrenia}</td>
                    <Result value={this.state.schizophrenia}/>
                  </tr>
                  <tr>
                    <td>自杀</td>
                    <td>{this.state.sucide}</td>
                    <Result value={this.state.sucide}/>
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

export default Recovery;