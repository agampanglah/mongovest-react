import React, { Component } from 'react';
import AppHeader from '../common/AppHeader';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, CardText, Container, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com'

class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        Axios
            .get('/product')
            .then(ress => {
                this.setState({ product: ress.data });
                console.log('data product', ress.data)
            })
    }

    render() {

        console.log('ini data dari product', this.state.product)
        return (
            <div>

                <AppHeader />
                <h1 style={{ textAlign: 'center' }} >Mudah BerInvestasi </h1>

                <div>

                    <Row>
                        <Col className='d-flex'>
                            {
                                this.state.product.map(prod =>

                                    <Col md='4' key={prod.product_id} >

                                        <Card >
                                            <CardImg top width="100%" src={prod.foto} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle>{prod.nama_product}</CardTitle>
                                                <CardSubtitle>{prod.price}</CardSubtitle>
                                                <CardText></CardText>
                                                <Link to={`/productdetail/${prod.product_id}`}> lihat detail</Link>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            }

                        </Col>
                    </Row>
                </div>



            </div>
        )
    }

} export default Mainpage