import React, { Component } from 'react';
import AppHeader from '../common/AppHeader';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, CardText, Container, Row, Col
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import IsLoggedIn from '../helpers/IsLoggedIn';
import AppFooter from '../common/AppFooter';

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
                // console.log('data product dari axios', ress.data)
            })
    }

    render() {

        if (!IsLoggedIn()) {
            return <Redirect to='/' />
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
                        <Col className="d-flex" >
                            {
                                this.state.product.slice(0, 3).map(prod =>

                                    <Col md='4' key={prod.product_id} >
                                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/productdetail/${prod.product_id}`}>
                                            <Card >
                                                <CardImg top width="100%" height="200px" src={prod.foto} alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle>{prod.nama_product}</CardTitle>
                                                    <CardSubtitle> Rp.{prod.price}</CardSubtitle>
                                                    <CardText></CardText>

                                                </CardBody>
                                            </Card>
                                        </Link>
                                    </Col>
                                )
                            }

                        </Col>
                    </Row>
                </div>

                <div>
                    <Col>
                        <h2 style={{ textAlign: 'center' }} >semua product investasi</h2>
                    </Col>
                    <div>
                        <Row className="Card">
                            <Col className='d-flex'>
                                {
                                    this.state.product.slice(2, 9).map(loadmore =>

                                        <Col md='4' key={loadmore.product_id} >
                                            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/productdetail/${loadmore.product_id}`}>
                                                <Card >
                                                    <CardImg top width="100%" height="200px" src={loadmore.foto} alt="Card image cap" />
                                                    <CardBody>
                                                        <CardTitle>{loadmore.nama_product}</CardTitle>
                                                        <CardSubtitle> Rp.{loadmore.price}</CardSubtitle>
                                                        <CardText></CardText>

                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                    )
                                }

                            </Col>
                        </Row>
                    </div>
                </div>
<AppFooter />
            </div>
        )
    }

} export default Mainpage