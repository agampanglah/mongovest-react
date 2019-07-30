import React, { Component, createRef } from 'react'
import AppHeader from '../common/AppHeader';
import Axios from 'axios';
import IsLoggedIn from '../helpers/IsLoggedIn';
import {Container, Form, FormGroup, Label, Input, Button, Col} from 'reactstrap'
import Dropzone from 'react-dropzone'

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com'

const dropzoneRef = createRef()

class Profile extends Component {
    constructor(props) {
        super(props)
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
             image:'',
            userdata: [],
            
        }

        this.updateHandler=this.updateHandler.bind(this);
        this.UpdateChange = this.UpdateChange.bind(this);
        // this.uploadImageHandler= this.uploadImageHandler.bind(this);
    }

    componentDidMount() {
        if (IsLoggedIn()) {
            let token = localStorage.getItem('JWT_TOKEN')
            let id = localStorage.getItem('USER_ID')

            Axios
                .get(`/user/${id}`, { header: { "Authorization": token } })
                .then(ress => {
                    this.setState({
                        userdata: ress.data
                       
                    })
                }).catch(err => {
                    console.log(err)
                })
        }
    }


    UpdateChange(event) {
        let data ={};
        let value = event.target.value;
        let name = event.target.name;
        data[name] =value;
        this.setState(data)
       
    }

    updateHandler(e) {
        let token = localStorage.getItem('JWT_TOKEN')
        let id = localStorage.getItem('USER_ID')
        e.preventDefault();
        Axios
            .put(`user/${id}`, {
                header: { "Authorization": token },

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


            .then(ressponses => {
                // if (ressponses.status === 200)
                    alert('update berhasil')
                this.setState({
                    dataWithImg: ressponses.data
                    
                })
                this.props.history.push('/mainpage')
                
            }) .catch(function(err){
                // if(err.ressponses.status===401){
                //     alert('gagal update')
                    
                //  }
                alert('gagal update')
            })

            this.setState({
                // fullname: '',
                // username:'',
                // email:'',
                // alamat:'',
                // no_telepon:'',
                // foto:'',
                // image:''
               
            })

    }

    uploadImageHandler =  images => {
        const uploads = images.map(image => {
            // // our formdata
            const formData = new FormData();
            formData.append("file", image);
            formData.append("tags", 'USER_FOTO'); // Add tags for the images - {Array}
            formData.append("upload_preset", 'bvebrrza'); // Replace the preset name with your own
            formData.append("api_key", "137515633127782"); // Replace API key with your own Cloudinary API key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            //         Replace cloudinary upload URL with yours
            return Axios.post(
                "https://api.cloudinary.com/v1_1/binarian/image/upload",
                formData,
                { headers: { "X-Requested-With": "XMLHttpRequest" } })
                .then(response => {
                    this.setState({
                        image: response.data
                    })
                    console.log(this.state.image.url, "url iamge di axios")
                })
        });
        Axios.all(uploads).then(() => {
            //  ... do anything after successful upload. You can setState() or save the data
            console.log(uploads.url)
        });

    }


    render() {
        console.log('image di profile', this.state.image.url)
        console.log('data user di userprofile', this.state.userdata)
        
        const userdata = this.state.userdata
        let {imageUpload} = this.state

        if (this.state.image.url === undefined) {
            imageUpload =
                <Dropzone ref={dropzoneRef}
                    onDrop={this.uploadImageHandler}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <img style={{ width: 200 }} src={userdata.foto} alt="" srcset="" />
                        </div>
                    )}
                </Dropzone>
        } else {
            imageUpload = <img style={{ width: 100 }} src={this.state.image.url} alt="" srcset="" />
        }

        return (
            <div>
                <AppHeader />

                <Container >
                    <div row>
                        <h2 style={{ margin: '30px', textAlign: 'center' }}> Edit</h2>

                        <Form row style={{ width: '400px', margin: 'auto' }}>
                            <FormGroup row>
                                <Col md='10' style={{ margin: 'auto' }}><Label for='foto'> {imageUpload}  </Label></Col>

                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="no_identitas" className="mr-sm-2" >identitas</Label>
                                <Input type="no_identitas" name="no_identitas" placeholder={userdata.no_identitas} value={this.state.no_identitas} onChange={this.UpdateChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="fullname" className="mr-sm-2" >nama lengkap</Label>
                                <Input type="fullname" name="fullname" placeholder={userdata.fullname} value={this.state.fullname} onChange={this.UpdateChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="username" className="mr-sm-2" >username</Label>
                                <Input type="username" name="username" id="username" placeholder={userdata.username} value={this.state.username} onChange={this.UpdateChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="email" className="mr-sm-2" >email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder={userdata.email} value={this.state.email} onChange={this.UpdateChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="alamat" className="mr-sm-2" >alamat</Label>
                                <Input type="alamat" name="alamat" placeholder={userdata.alamat} value={this.state.alamat} onChange={this.UpdateChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="no_telepon" className="mr-sm-2" >telepon</Label>
                                <Input type="no_telepon" name="no_telepon" placeholder={userdata.no_telepon} value={this.state.no_telepon} onChange={this.UpdateChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="gender" className="mr-sm-2" >gender</Label>
                                <Input type="gender" name="gender" placeholder={userdata.gender}value={this.state.gender} onChange={this.UpdateChange} />
                            </FormGroup>
{/* 
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="password" className="mr-sm-2" >password</Label>
                                <Input type="password" name="password" placeholder={userdata.password} id="****" value={this.state.password} onChange={this.RegistChange} />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="confirmPassword" className="mr-sm-2" >confirmPassword</Label>
                                <Input type="password" name="confirmPassword" placeholder={userdata.confirmPassword} id="*****" value={this.state.confirmPassword} onChange={this.RegistChange} />
                            </FormGroup> */}

                            <div className="br">
                                <Button style={{ margin: '30px', textAlign: 'center' }} color="info" light expand="md" onClick={this.updateHandler}>Edit</Button>
                            </div>


                        </Form>
                    </div>

                </Container>

            </div>


           
        )
    }

} export default Profile