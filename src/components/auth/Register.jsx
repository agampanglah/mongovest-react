import React, { createRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Axios from 'axios';
import Dropzone from 'react-dropzone'


import {
    Alert,
    Navbar,
    NavbarBrand,
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Collapse, Nav, NavbarToggler, NavItem, NavLink, Col

}
    from 'reactstrap';
import AppHeader from '../../common/AppHeader';

const dropzoneRef = createRef()

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            no_identitas: '',
            fullname: '',
            username: '',
            email: '',
            alamat: '',
            no_telepon: '',
            gender: '',
            password: '',
            confirmPassword: '',
            foto: '',
            image: '',
            // Roles:'',
            //  datas:{},

            isOpen: false,
            error: false

        }

        this.RegistChange = this.RegistChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.registSubmit = this.registSubmit.bind(this);
    }




    RegistChange(event) {
        let data = {};
        let value = event.target.value;
        let name = event.target.name;
        data[name] = value;
        this.setState(data)
        console.log('regist change')
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    registSubmit(e) {

        e.preventDefault();
        Axios
            .post('/api/users/register',
                {
                    no_identitas: this.state.no_identitas,
                    fullname: this.state.fullname,
                    username: this.state.username,
                    email: this.state.email,
                    alamat: this.state.alamat,
                    no_telepon: this.state.no_telepon,
                    gender: this.state.gender,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword,
                    foto: this.state.image.url,
                })

            .then((response) => {
                // if (response.status === 200) {
                alert('selamat akun anda sudah terdaftar, silahkan login');
                console.log(response)
                this.setState({
                    datasWithImg: response.data

                })

                this.props.history.push('/login')
                // console.log(response)
            })
            .catch(function (err) {
                // if (err.response.status === 401) {
                alert('anda sudah pernah mendaftar sebelumnya, mohon perikasa kembali email dan username anda')

                // }
                // console.log('registSubmit')
                console.log(err)


            });
        this.setState({


            // no_identitas: '',
            // fullname: '',
            // username: '',
            // email: '',
            // alamat: '',
            // no_telepon: '',
            // gender: '',
            // password: '',
            // confirmPassword: '',
            // foto: ''

        })



    }

    handleUploadImages = images => {
        const uploads = images.map(image => {
            //         // // our formdata
            const formData = new FormData();
            formData.append("file", image);
            formData.append("tags", 'USER_FOTO'); // Add tags for the images - {Array}
            formData.append("upload_preset", 'bvebrrza'); // Replace the preset name with your own
            formData.append("api_key", "137515633127782"); // Replace API key with your own Cloudinary API key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            // //         //         Replace cloudinary upload URL with yours
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
        Axios.all(uploads).then(() => {
            //  ... do anything after successful upload. You can setState() or save the data
            console.log(uploads.url)
        });

    }

    // }
    render() {

        // console.log('data user', this.registSubmit)
        let imageUpload
        console.log('images', this.state.image.url)
        if (this.state.image.url === undefined) {
            imageUpload =
                <Dropzone ref={dropzoneRef}
                    onDrop={this.handleUploadImages}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <img style={{ width: 200 }} src="https://image.flaticon.com/icons/png/512/3/3901.png" alt="" srcset="" />
                        </div>
                    )}
                </Dropzone>
        } else {
            imageUpload = <img style={{ width: 200 }} src={this.state.image.url} alt="" srcset="" />
        }


        return (

            <div>
                <AppHeader />

                <Container >
                    <div row>
                        <h2 style={{ margin: '30px', textAlign: 'center' }}> Registrasi</h2>

                        <Form row style={{ width: '400px', margin: 'auto' }}>
                            <FormGroup row>
                                <Col md='10' style={{ margin: 'auto' }}><Label for='foto'> {imageUpload}  </Label></Col>

                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="no_identitas" className="mr-sm-2" >identitas</Label>
                                <Input type="no_identitas" name="no_identitas" placeholder="no identitas" value={this.state.no_identitas} onChange={this.RegistChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="fullname" className="mr-sm-2" >nama lengkap</Label>
                                <Input type="fullname" name="fullname" placeholder="fullname" value={this.state.fullname} onChange={this.RegistChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="username" className="mr-sm-2" >username</Label>
                                <Input type="username" name="username" id="username" placeholder="username" value={this.state.username} onChange={this.RegistChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="email" className="mr-sm-2" >email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="example@jomblo.com" value={this.state.email} onChange={this.RegistChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="alamat" className="mr-sm-2" >alamat</Label>
                                <Input type="alamat" name="alamat" placeholder="alamat" value={this.state.alamat} onChange={this.RegistChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="no_telepon" className="mr-sm-2" >telepon</Label>
                                <Input type="no_telepon" name="no_telepon" placeholder="0895xxx" value={this.state.no_telepon} onChange={this.RegistChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="gender" className="mr-sm-2" >gender</Label>
                                <Input type="gender" name="gender" placeholder="L/P" value={this.state.gender} onChange={this.RegistChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="password" className="mr-sm-2" >password</Label>
                                <Input type="password" name="password" placeholder="*****" id="****" value={this.state.password} onChange={this.RegistChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="confirmPassword" className="mr-sm-2" >confirmPassword</Label>
                                <Input type="password" name="confirmPassword" placeholder="****" id="*****" value={this.state.confirmPassword} onChange={this.RegistChange} />
                            </FormGroup>

                            <div className="br">
                                <Button style={{ margin: '30px', textAlign: 'center' }} color="info" light expand="md" onClick={this.registSubmit}>daftar</Button>
                            </div>


                        </Form>
                    </div>

                </Container>

            </div>

        )
    }

}
export default Register