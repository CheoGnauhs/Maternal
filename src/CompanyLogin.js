import React from 'react';

import Header from './components/Header';
import LoginMain from './LoginMain';
import Footer from './components/Footer';

class CompanyLogin extends React.Component {
  render() {
    return (
        <div>
          <Header fontColor="blueFont" logoName="comLogo" headerType="loginHeader" navType="loginHeaderNav"/>
          <LoginMain buttonColor="blue" borderColor="blueBorder" bkgType="companyLoginBkg" regType="comRegister"/>
          <Footer/>
        </div>
    );
  }
}

export default CompanyLogin;
