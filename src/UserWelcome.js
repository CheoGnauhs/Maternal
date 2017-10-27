import React from 'react';
import {Link} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import P1 from './img/基因检测.png';
import P2 from './img/检测报告.png';
import P3 from './img/育儿百科.png';
import P4 from './img/体检表.png';
import AdBlock from "./components/AdBlock";

class UserWelcome extends React.Component {
  render() {
    return (
        <div>
          <Header fontColor="pinkFont" logoName="userLogo" headerType="registerHeader" navType="registerHeaderNav"/>
          <div className="manageBox">
            <div className="manageInner color2">
              <div>
                <AdBlock/>
              </div>
              <div className="managePanel">
                <Link to="reservation">
                  <img src={P1} alt="套餐预定"/>
                  <span>套餐预定</span>
                </Link>
                <Link to="usergenedetection">
                  <img src={P2} alt="检测报告"/>
                  <span>检测报告</span>
                </Link>
                <Link to="parentwiki">
                  <img src={P3} alt="育儿百科"/>
                  <span>育儿百科</span>
                </Link>
                <a href="http://www.pcbaby.com.cn">
                  <img src={P4} alt="体检表"/>
                  <span>体检表</span>
                </a>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    )
  }
}

export default UserWelcome;