import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Result from './components/Result';
import $ from 'jquery';
import {Table} from 'react-bootstrap';

class Talent extends React.Component {
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
      $.post("http://115.159.34.252:80/api/Pregnant/Tallent", {"name": sessionStorage.getItem("username").toString()}, (res) => {
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
                <h2>天赋套餐</h2>
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
                <h2>天赋套餐</h2>
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
                <h2>天赋套餐</h2>
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
                    <td>表达能力</td>
                    <td>{this.state.expression}</td>
                    <Result value={this.state.expression}/>
                  </tr>
                  <tr>
                    <td>汉字听写能力</td>
                    <td>{this.state.dictation}</td>
                    <Result value={this.state.dictation}/>
                  </tr>
                  <tr>
                    <td>阅读能力</td>
                    <td>{this.state.reading}</td>
                    <Result value={this.state.reading}/>
                  </tr>
                  <tr>
                    <td>单词拼写能力</td>
                    <td>{this.state.spelling}</td>
                    <Result value={this.state.spelling}/>
                  </tr>
                  <tr>
                    <td>爆发力运动天赋</td>
                    <td>{this.state.explosive}</td>
                    <Result value={this.state.explosive}/>
                  </tr>
                  <tr>
                    <td>耐力运动天赋</td>
                    <td>{this.state.stamina}</td>
                    <Result value={this.state.stamina}/>
                  </tr>
                  <tr>
                    <td>肌肉力量</td>
                    <td>{this.state.muscle}</td>
                    <Result value={this.state.muscle}/>
                  </tr>
                  <tr>
                    <td>音乐天赋</td>
                    <td>{this.state.music}</td>
                    <Result value={this.state.music}/>
                  </tr>
                  <tr>
                    <td>绘画天赋</td>
                    <td>{this.state.paint}</td>
                    <Result value={this.state.paint}/>
                  </tr>
                  <tr>
                    <td>舞蹈天赋</td>
                    <td>{this.state.dance}</td>
                    <Result value={this.state.dance}/>
                  </tr>
                  <tr>
                    <td>专注力</td>
                    <td>{this.state.focus}</td>
                    <Result value={this.state.focus}/>
                  </tr>
                  <tr>
                    <td>短期记忆力</td>
                    <td>{this.state.short_term_memory}</td>
                    <Result value={this.state.short_term_memory}/>
                  </tr>
                  <tr>
                    <td>长期记忆力</td>
                    <td>{this.state.long_term_memory}</td>
                    <Result value={this.state.long_term_memory}/>
                  </tr>
                  <tr>
                    <td>情景记忆力</td>
                    <td>{this.state.scene_memory}</td>
                    <Result value={this.state.scene_memory}/>
                  </tr>
                  <tr>
                    <td>逻辑推理能力</td>
                    <td>{this.state.logical_deduction}</td>
                    <Result value={this.state.logical_deduction}/>
                  </tr>
                  <tr>
                    <td>理财能力</td>
                    <td>{this.state.financial_management}</td>
                    <Result value={this.state.financial_management}/>
                  </tr>
                  <tr>
                    <td>数学能力</td>
                    <td>{this.state.math}</td>
                    <Result value={this.state.math}/>
                  </tr>
                  <tr>
                    <td>决策能力</td>
                    <td>{this.state.decision}</td>
                    <Result value={this.state.decision}/>
                  </tr>
                  <tr>
                    <td>自制力</td>
                    <td>{this.state.self_control}</td>
                    <Result value={this.state.self_control}/>
                  </tr>
                  <tr>
                    <td>语言创造力</td>
                    <td>{this.state.verbal_creativity}</td>
                    <Result value={this.state.verbal_creativity}/>
                  </tr>
                  <tr>
                    <td>形象创造力</td>
                    <td>{this.state.vivid_creativity}</td>
                    <Result value={this.state.vivid_creativity}/>
                  </tr>
                  <tr>
                    <td>执行力</td>
                    <td>{this.state.manipulation}</td>
                    <Result value={this.state.manipulation}/>
                  </tr>
                  <tr>
                    <td>动手能力</td>
                    <td>{this.state.execution}</td>
                    <Result value={this.state.execution}/>
                  </tr>
                  <tr>
                    <td>认知能力</td>
                    <td>{this.state.cognizance}</td>
                    <Result value={this.state.cognizance}/>
                  </tr>
                  <tr>
                    <td>领悟能力</td>
                    <td>{this.state.perception}</td>
                    <Result value={this.state.perception}/>
                  </tr>
                  <tr>
                    <td>自闭</td>
                    <td>{this.state.self_closing}</td>
                    <Result value={this.state.self_closing}/>
                  </tr>
                  <tr>
                    <td>社会交往</td>
                    <td>{this.state.social_interaction}</td>
                    <Result value={this.state.social_interaction}/>
                  </tr>
                  <tr>
                    <td>责任心</td>
                    <td>{this.state.responsibility}</td>
                    <Result value={this.state.responsibility}/>
                  </tr>
                  <tr>
                    <td>独立自主</td>
                    <td>{this.state.self_control}</td>
                    <Result value={this.state.self_control}/>
                  </tr>
                  <tr>
                    <td>好奇心</td>
                    <td>{this.state.curiosity}</td>
                    <Result value={this.state.curiosity}/>
                  </tr>
                  <tr>
                    <td>自信心</td>
                    <td>{this.state.self_confidence}</td>
                    <Result value={this.state.self_confidence}/>
                  </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <Footer/>
          </div>
      )
    }
  }
}

export default Talent;