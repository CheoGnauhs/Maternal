import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextBody from "./TextBody";

class ParentingWiki extends React.Component {
  render() {
    return (
        <div>
          <Header fontColor="pinkFont" logoName="userLogo" headerType="registerHeader" navType="registerHeaderNav"/>
          <TextBody/>
          <Footer/>
        </div>
    );
  }
}

export default ParentingWiki;