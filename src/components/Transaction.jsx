import React, { Component } from 'react';
import AppHeader from '../common/AppHeader';
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Axios from 'axios';
import options from '../common/AppBank'
import Select from 'react-select';

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com'



class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prods: [],
            trxs:[],
            users:[],
            jumlah_harga:'',
            jumlah_lot:''
          
          
        }



    }

    sendTrx(){
        const { match: { params } } = this.props;
            Axios
                // .get(`/transaction/${params.transaction_id}`)
                .get(`/transaction/${params.transaction_id}`)   
                    .then(response =>{
                        this.setState({
                            trxs: response.data,
                            // jumlah_lot : this.state.jumlah_lot,
                            // jumlah_harga: this.state.jumlah_harga,
                            
                        })
                        console.log(response.data,"id transaction")
                    })
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        Axios
            .get(`/product/${params.product_id}`)
                .then(ress => {
                this.setState({ prods: ress.data });
                console.log('product di transaction', ress.data)
            })
    }

    render() {
        let trxs = this.state.trxs
        let prods = this.state.prods
        console.log(prods,'product')
        console.log(trxs,"transaction")
        console.log(trxs,"id transaction")
     
        
        return (
            <div>
             
                <AppHeader />
                
                <h2 style={{ paddingTop: 30, textAlign: "center" }} >TRANSACTION </h2>
                <Container>
                    <Form>
                        <FormGroup row>
                            <Label sm={2}>nama product </Label>
                            <Col sm={10}>
                                <Input
                                    disabled={true}
                                    type='text'
                                    placeholder={prods.nama_product}
                                >
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={2}>Harga Produk</Label>
                            <Col sm={10}>
                                <Input
                                     disabled={true}
                                    type='text'
                                    placeholder={prods.price}
                                // {this.state.productPrice}
                                >
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={2}>Lot</Label>
                            <Col sm={10}>
                                <Input
                                    disabled={true}
                                    type='text'
                                    className="form-control"
                                    value=""
                                    placeholder={localStorage.getItem("jlm_lot")}
                                   

                                >
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={2}> harga total</Label>
                            <Col sm={10}>
                                <Input
                                    disabled={true}
                                    type='text'
                                    className="form-control"
                                    value={localStorage.getItem("HARGA_TOTAL")}
                                    // placeholder={"Rp. " + hargatotal}
                                    onChange=""

                                >
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
              <Label sm={2}>Nama Bank</Label>
              <Col sm={10}>
                <Select
                //   value={selectedOption}
                  onChange={this.onBankName}
                  options={options}
                  placeholder="Pilih Bank Anda ... "
                />
              </Col>
            </FormGroup>

                        <FormGroup row>
                            <Label sm={2}>Nomor Rekening</Label>
                            <Col sm={10}>
                                <Input
                                    placeholder="Masukkan Nomor Rekening Anda ..."
                                    className="form-control no-spinners"
                                    value=""
                                    onChange=""
                                    type="number"
                                >
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup check row>
              <Label check sm={4}>
                <Col sm={10}>
                  <Button type="submit" size="lg" color="info" >
                    proses
                  </Button>
                </Col>
              </Label>
            </FormGroup>

                    </Form>
                </Container>
            </div>
        )
    }

} export default Transaction;