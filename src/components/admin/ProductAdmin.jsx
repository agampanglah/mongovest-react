import React, { Component, createRef } from 'react'
import Dropzone from 'react-dropzone'
import AppHeader from '../../common/AppHeader';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText,  } from 'reactstrap';
import Axios from 'axios';
import {withRouter, Redirect} from 'react-router-dom'
import IsLoggedIn from '../../helpers/IsLoggedIn';

 
const dropzoneRef = createRef()

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com'

 class Cms extends Component {
 
    constructor(props) {
       
        super(props);
        this.state = {
            nama_product: '',
            foto: '',
            price: '',
            image:'',
            datasWithImg:[],
            products:[]
        };
        this.deleteProduct = this.deleteProduct.bind(this)
        this.handleChangeNamaProduct= this.handleChangeNamaProduct.bind(this)
        this.CreateProduct = this.CreateProduct.bind(this)
        this.handleChangePrice=this.handleChangePrice.bind(this)
    
    }
 
    // create product
    
    CreateProduct(){
        Axios.post('product/', {
            nama_product: this.state.nama_product,
            foto: this.state.image.url, 
            price: this.state.price
        }).then(res => {
            this.setState({
                datasWithImg: res.data
               
            })
            window.location.reload();
            alert('update berhasil')
        })
    }

    // to get all product

    componentDidMount(){
        Axios
        .get('/product')
            .then(response => {
                this.setState({products:response.data});

            })
    }

    deleteProduct = product_id => {
        const products = [...this.state.products];
        Axios
            .delete(`/product/${product_id}`)
                .then( ress =>{
                    alert('sukses menghapus');
                    this.setState({products:products});
                    window.location.reload();
                })
                .catch(err => {
                    console.log(err)
                })
    }          
 
 
    handleUploadImages = images => {
        // uploads is an array that would hold all the post methods for each image to be uploaded, then we'd use axios.all()
        const uploads = images.map(image => {
            // our formdata
            const formData = new FormData();
            formData.append("file", image);
            formData.append("tags", 'FOTO_PRODUCT'); // Add tags for the images - {Array}
            formData.append("upload_preset", 'bvebrrza'); // Replace the preset name with your own
            formData.append("api_key", "137515633127782"); // Replace API key with your own Cloudinary API key
            formData.append("timestamp", (Date.now() / 1000) | 0);
 
            // Replace cloudinary upload URL with yours
            return Axios.post(
                "https://api.cloudinary.com/v1_1/binarian/image/upload",
                formData,
                { headers: { "X-Requested-With": "XMLHttpRequest" } })
                .then(response => {
                    this.setState({
                        image: response.data
                    })
                })
        });
 
        // We would use axios `.all()` method to perform concurrent image upload to cloudinary.
        Axios.all(uploads).then(() => {
            // ... do anything after successful upload. You can setState() or save the data
            console.log(uploads.url)
        });
    }
 
    handleChangePrice(event) {
        this.setState({price: event.target.value});
    }
 
    handleChangeNamaProduct(event) {
        this.setState({nama_product: event.target.value});
    }
 
    render() {
        console.log('images', this.state.image.url)
        if (!IsLoggedIn()){
            return<Redirect to ="/login" />
        }
 
        let imageUpload
        if (this.state.image.url === undefined) {
            imageUpload =
            <Dropzone ref={dropzoneRef}
                onDrop={this.handleUploadImages}
            >
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <img style={{width: 100}} src="https://image.flaticon.com/icons/png/512/3/3901.png" alt="" srcset=""/>
                    </div>
                )}
            </Dropzone>
        } else {
            imageUpload = <img style={{width: 100}} src={this.state.image.url} alt="" srcset="" />
        }
 
        return (
            <div>
                <AppHeader />


                <h2 style={{ paddingTop: 30, textAlign: "center" }} >dashboard </h2>

                <Container>
                    <div>
                        <Form row style={{ width: '400px', margin: 'auto' }}>
                            <FormGroup row>
                                <Label for="foto" sm={2}>foto</Label>
                                <Col sm={2}>
                                    {imageUpload}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="sapi" sm={2}>nama produk</Label>
                                <Col sm={10}>
                                    <Input type="text" value={this.state.nama_product} onChange={this.handleChangeNamaProduct} placeholder="masukan nama product" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleText" sm={2}>price</Label>
                                <Col sm={10}>
                                    <Input type="text" value={this.state.price} onChange={this.handleChangePrice} />
                                </Col>
                            </FormGroup>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button onClick={this.CreateProduct}>Submit</Button>
                            </Col>
                        </Form>
                    </div>
                </Container> 
 
            </div>
        )
    }
} export default withRouter(Cms)