import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Mainpage from './components/Mainpage';
import Productdetail from './components/Productdetail';
import Profile from './components/UserProfile'
import Transaction from './components/Transaction';
import Aprofile from './components/CmsAdmin'
import UpDropzone from './components/CmsAdmin';
import CmsAdmin from './components/CmsAdmin';

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
     
        <Route path = '/cms/admin/mainpage' component = {CmsAdmin} /> 

      <Switch>
          <Route exact path='/'component ={Homepage}/>
          <Route path = '/login' component ={Login} />
          <Route path ='/register' component={Register}/>
      </Switch>
          
      <Switch>
           <Route exact path ='/mainpage' component ={Mainpage}/>
           <Route path ='/mainpage/:product_id' component={Mainpage} /> 
           <Route path ='/productdetail/:product_id' component = {Productdetail} />
           <Route path ={`/profile/${localStorage.getItem('USER_ID')}`} component = {Profile} /> 
           <Route path = '/transaction' component={Transaction}/>
           <Route path = '/mainpage/login' component ={Login} />
         
      </Switch>

        


{/* page detail by id route */}
        
         
           
     
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
