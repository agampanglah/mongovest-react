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
    Input,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane

} from 'reactstrap';

import AppFooter from '../common/AppFooter';
import { Link } from 'react-router-dom';
import IsLoggedIn from '../helpers/IsLoggedIn';
// import { Button } from 'react-md';
import classnames from 'classnames';

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com'

class Productdetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prod: [],
            modal: false,
            activeTab: '1',



        };

        this.handlercangeLot = this.handlercangeLot.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);


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

    toggle1(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        console.log('detail product')
        const prod  = this.state.prod
        const harga = this.state.prod.price
        // const lot  
        const hargaTotal = (harga * 20)
        console.log(hargaTotal, 'harga total')

        let go = <Link to={`/transaction/${this.state.prod.product_id}`}> Proses</Link>
        let hold = <Link to='/login' > Proses </Link>

        if (IsLoggedIn()) {
            return (

                <div>

                    <AppHeader />


                    <h2 style={{ paddingTop:30, textAlign:"center" }} >PRODUCT DETAIL </h2>

                    <div style={{ margin: '70px 0 0 0' }}>
                        <Container>
                            <Row className ="card-prod" >
                                <Col>
                                    <Col md={12} >

                                        <Card >
                                            <CardImg top width="100%" src={prod.foto} alt="" />
                                            <CardBody>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Col>
                                <Col sm="6">
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '1' })}
                                                onClick={() => { this.toggle1('1'); }}
                                            >
                                                detail sapi
                                             </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="6">

                                                    <h4>{prod.nama_product}</h4>
                                                    <p> sapi yang terbuat dari rasa manis kasih sayang,
                                                        dengan dibesarkan seperti anak sendiri maka tercipatalah kebohayan
                                                         bentuk yang eksotis dan praktis</p>

                                                    <h4> Rp. {prod.price}</h4>
                                                    <Button color='info' onClick={this.toggle}>lanjutkan</Button>
                                                </Col>
                                            </Row>
                                        </TabPane>

                                    </TabContent>
                                </Col>

                            </Row>

                            {/* outside body taro modalnya jangan di dalem card body */}

                            {/* <Button color='info' onClick={this.toggle}>lanjutkan</Button> */}
                            <Row>
                                <Col>
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
                                            <a> harga per lot = Rp.{prod.price}</a><br />
                                            <a> total harga = Rp {hargaTotal}</a><br />
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="info" onClick={this.toggle}>
                                                {go}
                                            </Button>



                                            <Button color="info" onClick={this.toggle}>
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
        else {
            return (

                <div>

                <AppHeader />


                <h2 style={{ textAlign: 'center' }} >PRODUCT DETAIL </h2>

                <div style={{ margin: '70px 0 0 0' }}>
                    <Container>
                        <Row>
                            <Col>
                                <Col md={12} >

                                    <Card >
                                        <CardImg top width="100%" src={prod.foto} alt="" />
                                        <CardBody>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Col>
                            <Col sm="6">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.toggle('1'); }}
                                        >
                                            detail sapi
                                         </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col sm="6">

                                                <h4>{prod.nama_product}</h4>
                                                <p> sapi yang terbuat dari rasa manis kasih sayang,
                                                    dengan dibesarkan seperti anak sendiri maka tercipatalah kebohayan
                                                     bentuk yang eksotis dan praktis</p>

                                                <h4> Rp. {prod.price}</h4>
                                                <Button color='info' onClick={this.toggle}>lanjutkan</Button>
                                            </Col>
                                        </Row>
                                    </TabPane>

                                </TabContent>
                              
                            </Col>

                        </Row>

                        {/* outside body taro modalnya jangan di dalem card body */}

                      
                        <Row>
                            <Col>
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
                                        <a> harga per lot = Rp.{prod.price}</a><br />
                                        <a> total harga = Rp {hargaTotal}</a><br />
                                    </ModalBody>
                                    <ModalFooter>
                                       
                                        <Button onClick={this.toggle}>
                                          
                                            {hold}
                                       
                                        </Button>



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

    }


} export default Productdetail
