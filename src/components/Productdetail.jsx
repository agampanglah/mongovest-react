import React from 'react';
import Axios from 'axios';
import AppHeader from '../common/AppHeader';
import {
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,

    Container,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input

} from 'reactstrap';

import AppFooter from '../common/AppFooter';
import { Link } from 'react-router-dom';
// import { Button } from 'react-md';

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com'

class Productdetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prod: [],

            // modal page
            modal: false,
            totalLot: {}


        };

        this.handlercangeLot = this.handlercangeLot.bind(this);
        this.toggle = this.toggle.bind(this);


    }


    componentDidMount() {
        const { match: { params } } = this.props;

        Axios
            .get(`/product/${params.product_id}`)
            .then(ress => {
                this.setState({ prod: ress.data });
                console.log('detail product', ress.data)
            })
    }



    handlercangeLot(e) {
        this.setState({ totalLot: e.target.value })
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }



    render() {

        console.log('detail product')
        const { prod } = this.state
        const { harga } = 10000;
        const { totalLot } = 200
        const hargaTotal = (1000 * 200)
        console.log(hargaTotal, 'harga total')
        return (

            <div>

                <AppHeader />
                <h2 style={{ textAlign: 'center' }} >PRODUCT DETAIL </h2>

                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Col md={5} >

                                    <Card >
                                        <CardImg top width="100%" src={prod.foto} alt="" />
                                        <CardBody>
                                            <CardTitle>{prod.nama_product}</CardTitle>
                                            <CardSubtitle>{prod.price}</CardSubtitle>


                                        </CardBody>
                                    </Card>
                                </Col>
                                {/* outside body taro modalnya jangan di dalem card body */}
                                <Button color='info' onClick={this.toggle}>lanjutkan</Button>
                                <Modal
                                    isOpen={this.state.modal}
                                    toggle={this.toggle}
                                    className={this.props.className}
                                >
                                    <ModalHeader toggle={this.toggle}>
                                        INVESTASI
                                    </ModalHeader>
                                    <ModalBody>
                                        Tentukan Jumlah <br />
                                        <Row>
                                            <Col sm='3'>
                                                <Input
                                                    // id='lotInput'
                                                    type='number'
                                                    placeholder='1'
                                                    value={this.state.totalLot}
                                                    onChange={this.handlercangeLot}
                                                >


                                                </Input>
                                            </Col>
                                        </Row>
                                        <a> harga per lot = Rp. 1.000.000</a><br />
                                        <a> total harga = Rp {hargaTotal}</a><br />
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color='info' onClick={this.toggle}>
                                            <Link to={`/transaction/${this.props.product_id}`}> Proses</Link>

                                        </Button> {" "}
                                        <Button onClick={this.toggle}>
                                            batalkan
                                        </Button>
                                    </ModalFooter>

                                </Modal>
                            </Col>
                        </Row>
                    </Container>

                </div>
                <AppFooter />
            </div>

        )
    }


} export default Productdetail