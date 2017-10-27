import React from 'react';

import Header from './components/Header';
import LoginMain from './LoginMain';
import Footer from './components/Footer';

class UserLogin extends React.Component {
  render() {
    return (
        <div>
          <Header fontColor="pinkFont" logoName="userLogo" headerType="loginHeader" navType="loginHeaderNav"/>
          <LoginMain buttonColor="pink" borderColor="pinkBorder" bkgType="userLoginBkg" regType="userRegister"/>
          <Footer/>
        </div>
    )
  }
}

export default UserLogin;