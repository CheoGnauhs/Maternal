import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Panel, ListGroup, ListGroupItem} from "react-bootstrap";
import {Link} from 'react-router-dom'

class UserGeneDetection extends React.Component {
  render() {
    return (
        <div>
          <Header fontColor="pinkFont" logoName="userLogo" headerType="registerHeader" navType="registerHeaderNav"/>
          <div className="manageBox">
            <div className="manageInner color2">
              <h3>您的个人信息为：</h3>
              <Panel footer={sessionStorage.getItem("username")}>
                用户名
              </Panel>
              <div id="linePlace">
              </div>
              <h3>您可选的基因检测套餐如下：</h3>
              <ListGroup>
                <Link to={'/talent'}><ListGroupItem>天赋套餐</ListGroupItem></Link>
                <Link to={'/allergic'}><ListGroupItem>过敏套餐</ListGroupItem></Link>
                <Link to={'/recovery'}><ListGroupItem>产后恢复套餐</ListGroupItem></Link>
                <Link to={'/nutrition'}><ListGroupItem>营养吸收套餐</ListGroupItem></Link>
                <Link to={'/illness'}><ListGroupItem>疾病套餐</ListGroupItem></Link>
                <Link to={'/gene'}><ListGroupItem>基因套餐</ListGroupItem></Link>
              </ListGroup>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default UserGeneDetection;