import React from 'react';
import {Link} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

class Home extends React.Component {
  render() {
    return (
        <div>
          <Header fontColor="brownFont" logoName="homeLogo" headerType="loginHeader" navType="loginHeaderNav"/>
          <div className="centerBlock">
            <div className="homeMain homeBkg" id="homeMain">
              <Link to="comLogin">
                <div className="outBlock">
                  <span className="block_name">商家端</span>
                  <div className="inBlock" id="block1">
                  </div>
                </div>
              </Link>
              <Link to="userLogin">
                <div className="outBlock">
                  <span className="block_name">宝妈端</span>
                  <div className="inBlock" id="block2">
                  </div>
                </div>
              </Link>
              <Link to="nannyLogin">
                <div className="outBlock">
                  <span className="block_name">月嫂端</span>
                  <div className="inBlock" id="block3">
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default Home;