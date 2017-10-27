import React from 'react';

import Header from './components/Header';
import LoginMain from './LoginMain';
import Footer from './components/Footer';

class NannyLogin extends React.Component {
  render() {
    return (
        <div>
          <Header fontColor="greenFont" logoName="nannyLogo" headerType="loginHeader" navType="loginHeaderNav"/>
          <LoginMain buttonColor="green" borderColor="greenBorder" bkgType="nannyLoginBkg" regType="nannyRegister"/>
          <Footer/>
        </div>
    );
  }
}

export default NannyLogin;