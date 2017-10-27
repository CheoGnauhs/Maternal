import React, {Component} from 'react';
import userLogo from '../img/Logo1.png';
import comLogo from '../img/Logo2.png';
import nannyLogo from '../img/Logo3.png';
import homeLogo from '../img/Logo4.png';

class Header extends Component {
  //获取要渲染的Logo类型
  getLogoUrl() {
    let logoName = this.props.logoName;
    if (logoName === "userLogo") {
      return userLogo;
    }
    else if (logoName === "comLogo") {
      return comLogo;
    }
    else if (logoName === "nannyLogo") {
      return nannyLogo;
    }
    else if (logoName === "homeLogo") {
      return homeLogo;
    }
  }

  render() {
    return (
        <div className="Header">
          <header className={this.props.headerType}>
            <img className="logo" src={this.getLogoUrl()} alt="宝妈母婴平台"/>
            <div className={this.props.navType}>
              <a className={this.props.fontColor} href="/home">首页</a>
              <a className={this.props.fontColor} href="">公司介绍</a>
              <a className={this.props.fontColor} href="">帮助</a>
              <a className={this.props.fontColor} href="">常见问题</a>
            </div>
          </header>
        </div>
    );
  }
}

export default Header;
