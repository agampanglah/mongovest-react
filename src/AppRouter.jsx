import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Mainpage from './components/Mainpage';
import Productdetail from './components/Productdetail';

function AppRouter() {
  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route exact path='/'component = {Homepage}/>
          <Route path = '/login' component = {Login} />
          <Route path ='/register' component={Register}/>
          </Switch>
          
         
          <Route  path ='/mainpage' component ={Mainpage}/>
           
           <Route path ='/mainpage/:product_id' component={Mainpage} /> 
           <Route path = '/productdetail/:product_id' component ={Productdetail} />
         

{/* page detail by id route */}
        
         
           
     
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
