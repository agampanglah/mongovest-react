import React, { Component } from 'react';
import AppHeader from '../common/AppHeader';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, CardText, Container, Row, Col
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import IsLoggedIn from '../helpers/IsLoggedIn';

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
                console.log('data product dari axios', ress.data)
            })
    }

    render() {

        if(!IsLoggedIn()){
            return <Redirect to = '/' />
        }

        console.log('data product di render', this.state.product)

        return (
            <div>

                <AppHeader />
                <Col>
                    <h1 style={{ textAlign: 'center' }} >Product Terbaru </h1>
                </Col>


                <div>

                    <Row className="card" >
                        <Col className="card-flex" >
                            {
                                this.state.product.slice(0, 3).map(prod =>

                                    <Col md='4' key={prod.product_id} >

                                        <Card >
                                            <CardImg top width="100%" src={prod.foto} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle>{prod.nama_product}</CardTitle>
                                                <CardSubtitle> Rp.{prod.price}</CardSubtitle>
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

                <div>
                    <h2 style={{ textAlign: 'center' }} >semua product investasi</h2>
                    <Row>
                        <Col className='d-flex'>
                            {
                                this.state.product.slice(4).map(loadmore =>

                                    <Col md='6' key={loadmore.product_id} >

                                        <Card >
                                            <CardImg top width="100%" src={loadmore.foto} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle>{loadmore.nama_product}</CardTitle>
                                                <CardSubtitle> Rp.{loadmore.price}</CardSubtitle>
                                                <CardText></CardText>
                                                <Link to={`/productdetail/${loadmore.product_id}`}> lihat detail</Link>
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