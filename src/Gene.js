import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import $ from 'jquery';
import {Table} from 'react-bootstrap';
import Result from './components/Result';

class Gene extends React.Component {
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
      $.post("http://115.159.34.252:80/api/Pregnant/Gene", {"name": sessionStorage.getItem("username").toString()}, (res) => {
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
                <h2>全基因组</h2>
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
                <h2>全基因组</h2>
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
                <h2>全基因组</h2>
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
                    <td>抑郁症相关遗传基因检测</td>
                    <td>{this.state.depression}</td>
                    <Result value={this.state.depression}/>
                  </tr>
                  <tr>
                    <td>香烟损伤评估基因检测</td>
                    <td>{this.state.cigarette}</td>
                    <Result value={this.state.cigarette}/>
                  </tr>
                  <tr>
                    <td>骨肉瘤相关遗传基因检测</td>
                    <td>{this.state.gurouliu}</td>
                    <Result value={this.state.gurouliu}/>
                  </tr>
                  <tr>
                    <td>帕金森病遗传风险评估基因检测</td>
                    <td>{this.state.LNCD}</td>
                    <Result value={this.state.LNCD}/>
                  </tr>
                  <tr>
                    <td>鼻咽癌相关遗传基因检测</td>
                    <td>{this.state.biyancancer}</td>
                    <Result value={this.state.biyancancer}/>
                  </tr>
                  <tr>
                    <td>肝癌相关遗传基因检测</td>
                    <td>{this.state.gancancer}</td>
                    <Result value={this.state.gancancer}/>
                  </tr>
                  <tr>
                    <td>前列腺癌相关遗传基因检测(男)</td>
                    <td>{this.state.QLXcancer}</td>
                    <Result value={this.state.QLXcancer}/>
                  </tr>
                  <tr>
                    <td>自闭症</td>
                    <td>{this.state.zibizheng}</td>
                    <Result value={this.state.zibizheng}/>
                  </tr>
                  <tr>
                    <td>焦虑人格</td>
                    <td>{this.state.jiaolvrenge}</td>
                    <Result value={this.state.jiaolvrenge}/>
                  </tr>
                  <tr>
                    <td>强迫症</td>
                    <td>{this.state.qiangpozheng}</td>
                    <Result value={this.state.qiangpozheng}/>
                  </tr>
                  <tr>
                    <td>精神分裂症</td>
                    <td>{this.state.jinshenfenlie}</td>
                    <Result value={this.state.jinshenfenlie}/>
                  </tr>
                  <tr>
                    <td>神经性厌食</td>
                    <td>{this.state.SJXyanshi}</td>
                    <Result value={this.state.SJXyanshi}/>
                  </tr>
                  <tr>
                    <td>失眠症遗传风险</td>
                    <td>{this.state.shimian}</td>
                    <Result value={this.state.shimian}/>
                  </tr>
                  <tr>
                    <td>哮喘</td>
                    <td>{this.state.xiaochuan}</td>
                    <Result value={this.state.xiaochuan}/>
                  </tr>
                  <tr>
                    <td>肺气肿</td>
                    <td>{this.state.feiqizhong}</td>
                    <Result value={this.state.feiqizhong}/>
                  </tr>
                  <tr>
                    <td>慢性阻塞性肺病</td>
                    <td>{this.state.feibing}</td>
                    <Result value={this.state.feibing}/>
                  </tr>
                  <tr>
                    <td>喉癌</td>
                    <td>{this.state.houaicancer}</td>
                    <Result value={this.state.houaicancer}/>
                  </tr>
                  <tr>
                    <td>鼻咽癌</td>
                    <td>{this.state.biyancancer}</td>
                    <Result value={this.state.biyancancer}/>
                  </tr>
                  <tr>
                    <td>肺癌</td>
                    <td>{this.state.feiai}</td>
                    <Result value={this.state.feiai}/>
                  </tr>
                  <tr>
                    <td>肺纤维化</td>
                    <td>{this.state.feixianweihua}</td>
                    <Result value={this.state.feixianweihua}/>
                  </tr>
                  <tr>
                    <td>胃溃疡</td>
                    <td>{this.state.weikuiyang}</td>
                    <Result value={this.state.weikuiyang}/>
                  </tr>
                  <tr>
                    <td>萎缩性胃炎</td>
                    <td>{this.state.weiweisuo}</td>
                    <Result value={this.state.weiweisuo}/>
                  </tr>
                  <tr>
                    <td>非酒精性脂肪肝</td>
                    <td>{this.state.ganzhifang}</td>
                    <Result value={this.state.ganzhifang}/>
                  </tr>
                  <tr>
                    <td>肝癌</td>
                    <td>{this.state.gancancer}</td>
                    <Result value={this.state.gancancer}/>
                  </tr>
                  <tr>
                    <td>胃癌</td>
                    <td>{this.state.weicancer}</td>
                    <Result value={this.state.weicancer}/>
                  </tr>
                  <tr>
                    <td>胰腺癌</td>
                    <td>{this.state.yixiancancer}</td>
                    <Result value={this.state.yixiancancer}/>
                  </tr>
                  <tr>
                    <td>食管癌</td>
                    <td>{this.state.shiguancancer}</td>
                    <Result value={this.state.shiguancancer}/>
                  </tr>
                  <tr>
                    <td>胆囊炎</td>
                    <td>{this.state.dannangcancer}</td>
                    <Result value={this.state.dannangcancer}/>
                  </tr>
                  <tr>
                    <td>膀胱癌</td>
                    <td>{this.state.PGcancer}</td>
                    <Result value={this.state.PGcancer}/>
                  </tr>
                  <tr>
                    <td>男性少精无精</td>
                    <td>{this.state.shaojing}</td>
                    <Result value={this.state.shaojing}/>
                  </tr>
                  <tr>
                    <td>前列腺增生</td>
                    <td>{this.state.QLXZS}</td>
                    <Result value={this.state.QLXZS}/>
                  </tr>
                  <tr>
                    <td>乳腺增生</td>
                    <td>{this.state.RXZS}</td>
                    <Result value={this.state.RXZS}/>
                  </tr>
                  <tr>
                    <td>缺铁性贫血</td>
                    <td>{this.state.pinxue}</td>
                    <Result value={this.state.pinxue}/>
                  </tr>
                  <tr>
                    <td>房颤</td>
                    <td>{this.state.fangchan}</td>
                    <Result value={this.state.fangchan}/>
                  </tr>
                  <tr>
                    <td>扩张性心肌病</td>
                    <td>{this.state.xinjibing}</td>
                    <Result value={this.state.xinjibing}/>
                  </tr>
                  <tr>
                    <td>冠状动脉痉挛</td>
                    <td>{this.state.GZDMjinruan}</td>
                    <Result value={this.state.GZDMjinruan}/>
                  </tr>
                  <tr>
                    <td>心源性猝死</td>
                    <td>{this.state.XYXcusi}</td>
                    <Result value={this.state.XYXcusi}/>
                  </tr>
                  <tr>
                    <td>骨肉瘤</td>
                    <td>{this.state.gurouliu}</td>
                    <Result value={this.state.gurouliu}/>
                  </tr>
                  <tr>
                    <td>骨髓瘤</td>
                    <td>{this.state.gusuiliu}</td>
                    <Result value={this.state.gusuiliu}/>
                  </tr>
                  <tr>
                    <td>心肌梗塞</td>
                    <td>{this.state.XJGS}</td>
                    <Result value={this.state.XJGS}/>
                  </tr>
                  <tr>
                    <td>高血压</td>
                    <td>{this.state.gaoxueya}</td>
                    <Result value={this.state.gaoxueya}/>
                  </tr>
                  <tr>
                    <td>冠状动脉痉挛</td>
                    <td>{this.state.guanxinbing}</td>
                    <Result value={this.state.guanxinbing}/>
                  </tr>
                  <tr>
                    <td>动脉粥样硬化</td>
                    <td>{this.state.DMYH}</td>
                    <Result value={this.state.DMYH}/>
                  </tr>
                  <tr>
                    <td>脑卒中</td>
                    <td>{this.state.naozuzhong}</td>
                    <Result value={this.state.naozuzhong}/>
                  </tr>
                  <tr>
                    <td>高血脂</td>
                    <td>{this.state.gaoxuezhi}</td>
                    <Result value={this.state.gaoxuezhi}/>
                  </tr>
                  <tr>
                    <td>白血病</td>
                    <td>{this.state.baixuebing}</td>
                    <Result value={this.state.baixuebing}/>
                  </tr>
                  <tr>
                    <td>痛风</td>
                    <td>{this.state.tongfeng}</td>
                    <Result value={this.state.tongfeng}/>
                  </tr>
                  <tr>
                    <td>I型糖尿病</td>
                    <td>{this.state.tangniaobing}</td>
                    <Result value={this.state.tangniaobing}/>
                  </tr>
                  <tr>
                    <td>G raves'病</td>
                    <td>{this.state.graves}</td>
                    <Result value={this.state.graves}/>
                  </tr>
                  <tr>
                    <td>桥本甲状腺</td>
                    <td>{this.state.qbjzx}</td>
                    <Result value={this.state.qbjzx}/>
                  </tr>
                  <tr>
                    <td>类风湿性关节炎</td>
                    <td>{this.state.lfsguanjieyan}</td>
                    <Result value={this.state.lfsguanjieyan}/>
                  </tr>
                  <tr>
                    <td>抗辐射能力</td>
                    <td>{this.state.kangfushe}</td>
                    <Result value={this.state.kangfushe}/>
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

export default Gene;