import React, { Component } from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {Link } from 'react-router-dom';
  class AppCard extends Component{
      render(){
          return(
            <div >
            <Link to={`/productdetail/${this.props.product_id}`}> 
            <Card style = {{marginTop:'20px'}} >
              <CardImg top width="100%" src={this.props.image} alt="" />
              <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>{this.props.harga}</CardSubtitle>
               
              </CardBody>
            </Card>
            </Link>
          
          </div>
          
          )
      }
  }
  export default AppCard