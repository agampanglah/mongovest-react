import React, { Component } from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {Link } from 'react-router-dom';
  class AppCard extends Component{
      render(){
          return(
            <div >
           
            <Card style = {{marginTop:'20px'}}>
              <CardImg top width="100%" src={this.props.image} alt="" />
              <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>{this.props.harga}</CardSubtitle>
                 <Button> <Link to = '/login'> <a > lihat </a></Link></Button> 
              </CardBody>
            </Card>
          
          </div>
          
          )
      }
  }
  export default AppCard