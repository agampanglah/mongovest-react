import React from 'react';
import Axios from 'axios';
import AppHeader from '../common/AppHeader';
import store from 'store';
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
    TabPane,
    Label

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
            // transaction_id:'',
            jumlah_lot: '0',





        };
        this.sendDatalot = this.sendDatalot.bind(this);
        this.handlercangeLot = this.handlercangeLot.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.holdDetail=this.holdDetail.bind(this);


    }


    componentDidMount() {
        let { match: { params } } = this.props;

        Axios
            .get(`/product/${params.product_id}`)
            .then(ress => {
                this.setState({ prod: ress.data });
                // console.log('detail product', ress.data)
            })
    }



    handlercangeLot(event) {
        let data = {};
        let value = event.target.value;
        let name = event.target.name;
        data[name] = value;
        this.setState(data)

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

    sendDatalot(e) {
        let { match: { params } } = this.props;
        e.preventDefault();
        Axios
            // .post(`/transaction/${params.transaction_id}`,{
             .post(`transaction/`,{

                    transaction_id:this.state.transaction_id,
                    jumlah_lot: this.state.jumlah_lot,
                    jumlah_harga: this.state.jumlah_harga

                })
            .then((response) => {
                // //  if (response.status === 200) {

                    // localStorage.setItem("JWT_TOKEN", response.data.token)

                    // const token = localStorage.getItem('JWT_TOKEN')
                    // const tokenParts = token.split('.');
                    // const encodedPayload = tokenParts[1];
                    // const rawPayload = atob(encodedPayload);
                    // const user = JSON.parse(rawPayload);

                    // localStorage.setItem('USER_ID', user.id)
                    // store.set('loggedIn', true);
                    
                 
                    alert('mohon segera lakukan pembayaran', response)
                    this.props.history.push(`/transaction/${params.product_id}/${params.transaction_id}`)
                    console.log(response)


                // }
            })

            .catch(function (error) {
                // if(error.status === 401) {    
                alert('error', error)
                console.log(error)
                // }
            })


    }

    holdDetail(e) {
        e.preventDefault();

        alert("anda belum login, silahkan login terlebih dahulu")
        this.props.history.push('/login')
    }


    render() {


        // variable untuk modal slider dengan harga total

        let jumlah_lot = this.state.jumlah_lot
        const harga = this.state.prod.price
        const hargaTotal = (harga * jumlah_lot)
        // let trx = this.state.trx
        let prod = this.state.prod
        localStorage.setItem("jlm_lot", jumlah_lot)
         localStorage.setItem("HARGA_TOTAL", hargaTotal)
        //  console.log(hargaTotal, 'harga total')

        //  let go = <Link to={`/transaction/${this.state.prod.product_id}`}> Proses</Link>
        let go = <Button color='info' onClick={this.sendDatalot}>lanjutkan</Button>
        // let hold = <Link to='/login' > Proses </Link>
        let hold =<Button color='info' onClick ={this.holdDetail}> lanjutkan</Button>

        if (IsLoggedIn()) {
            return (

                <div>

                    <AppHeader />


                    <h2 style={{ paddingTop: 30, textAlign: "center" }} >PRODUCT DETAIL </h2>

                    <div style={{ margin: '70px 0 0 0' }}>
                        <Container>
                            <Row className="card-prod" >
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
                                       
                                            <Row>
                                            <Label sm={1}> masukan lot </Label>
                                                <Col sm='3' key={this.props.transaction_id}>
                                                    <Input
                                                        // id='lotInput'
                                                        type='number'
                                                        name="jumlah_lot"
                                                        placeholder='0'
                                                        value={this.state.jumlah_lot}
                                                        onChange={this.handlercangeLot}
                                                    >


                                                    </Input>

                                                </Col>
                                            </Row>

                                            <Row>
                                                <Label sm={1}> harga total </Label>
                                                <Col sm={5}>
                                                    <Input

                                                        type='jumlah_harga'
                                                        name="jumlah_harga"
                                                        value={hargaTotal}
                                                        placeholder={hargaTotal}
                                                        onChange={this.handlercangeLot}


                                                    >
                                                    </Input>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Label sm={1}> harga </Label>
                                                <Col sm={5}>
                                                    <Input
                                                        placeholder={prod.price}
                                                    >
                                                    </Input>
                                                </Col>
                                            </Row>



                                        </ModalBody>
                                        <ModalFooter>

                                            {go}




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

                    <div>

                    <AppHeader />


                    <h2 style={{ paddingTop: 30, textAlign: "center" }} >PRODUCT DETAIL </h2>

                    <div style={{ margin: '70px 0 0 0' }}>
                        <Container>
                            <Row className="card-prod" >
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
                                       
                                            <Row>
                                            <Label sm={1}> masukan lot </Label>
                                                <Col sm='3' key={this.props.transaction_id}>
                                                    <Input
                                                        // id='lotInput'
                                                        type='number'
                                                        name="jumlah_lot"
                                                        placeholder='0'
                                                        value={this.state.jumlah_lot}
                                                        onChange={this.handlercangeLot}
                                                    >


                                                    </Input>

                                                </Col>
                                            </Row>

                                            <Row>
                                                <Label sm={1}> harga total </Label>
                                                <Col sm={5}>
                                                    <Input

                                                        type='jumlah_harga'
                                                        name="jumlah_harga"
                                                        value={hargaTotal}
                                                        placeholder={hargaTotal}
                                                        onChange={this.handlercangeLot}


                                                    >
                                                    </Input>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Label sm={1}> harga </Label>
                                                <Col sm={5}>
                                                    <Input
                                                        placeholder={prod.price}
                                                    >
                                                    </Input>
                                                </Col>
                                            </Row>



                                        </ModalBody>
                                        <ModalFooter>

                                            {hold}




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
 <AppFooter />
                </div>

            )

        }

    }


} export default Productdetail
