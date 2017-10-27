import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import CompanyLogin from './CompanyLogin';
import CompanyReg from './CompanyRegister';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import UserWelcome from './UserWelcome';
import NannyLogin from './NannyLogin';
import NannyRegister from './NannyRegister';
import UserGeneDetection from './UserGeneDetection';
import Home from './Home';
import ParentingWiki from './ParentingWiki';
import Talent from './Talent';
import Allergic from './Allergic';
import Gene from './Gene';
import Recovery from './Recovery';
import Nutrition from './Nutrition';
import Illness from './Illness';
import Reservation from './Reservation';

const MaternalRouter = () => (
    <Router>
      <div>
        <Route path="/home" component={Home}/>
        <Route path="/comlogin" component={CompanyLogin}/>
        <Route path="/comregister" component={CompanyReg}/>
        <Route path="/userlogin" component={UserLogin}/>
        <Route path="/userregister" component={UserRegister}/>
        <Route path="/userwelcome" component={UserWelcome}/>
        <Route path="/nannylogin" component={NannyLogin}/>
        <Route path="/nannyregister" component={NannyRegister}/>
        <Route path="/usergenedetection" component={UserGeneDetection}/>
        <Route path="/parentwiki" component={ParentingWiki}/>
        <Route path="/talent" component={Talent}/>
        <Route path="/allergic" component={Allergic}/>
        <Route path="/gene" component={Gene}/>
        <Route path="/recovery" component={Recovery}/>
        <Route path="/nutrition" component={Nutrition}/>
        <Route path="/illness" component={Illness}/>
        <Route path="/reservation" component={Reservation}/>
      </div>
    </Router>
);

export default MaternalRouter;
