import React, { Component } from 'react'
import AppHeader from '../common/AppHeader';
import Axios from 'axios';
import IsLoggedIn from '../helpers/IsLoggedIn';
import {Container, Form, FormGroup, Label, Input, Button, Col} from 'reactstrap'

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //  fullname: '',
             datas: {}
        }

        this.updateHandler=this.updateHandler.bind(this);
        this.UpdateChange = this.UpdateChange.bind(this);
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

                fullname: this.state.fullname,
                username: this.state.username,
                email: this.state.email,
                alamat: this.state.alamat,
                no_telepon: this.state.no_telepon,
                gender: this.state.gender,
                // foto:this.state.image.url,
                confirmPassword: this.state.confirmPassword
            })


            .then(ressponses => {
                if (ressponses.status === 200)
                    alert('update berhasil')
                this.setState({
                    userData: ressponses.data
                    
                })
                this.props.history.push('mainpage')
                
            }) .catch(function(err){
                // if(err.ressponses.status===401){
                //     alert('gagal update')
                    
                //  }
                alert('gagal update')
            })

            this.setState({
                fullname: '',
                username:'',
                email:'',
                alamat:'',
                no_telepon:'',
                password:'',
                confirmPassword:'',
            })

    }

    render() {
        console.log('data user di userprofile', this.state.userdata)
        const userdata = this.state.userdata
        return (
            <div>
                <AppHeader />
                
            <Container>
                <div>
                   
                    <h2 style={{ margin: '40px', textAlign: 'center' }}> Edit Profile</h2>
                    <Col row>
                        <Form row style={{ width: '500px', margin: 'auto' }}>

                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="fullname" className="mr-sm-2" > fullname </Label>
                                <Input type= "text" name="fullname" placeholder= "fullname"value={this.state.fullname} onChange={this.UpdateChange}   />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="username" className="mr-sm-2" > username </Label>
                                <Input type= "text" name="username" placeholder= "username" value={this.state.username} onChange={this.UpdateChange}   />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="email" className="mr-sm-2" > email </Label>
                                <Input type= "email" name="email" placeholder= "email" value={this.state.email} onChange={this.UpdateChange}   />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="alamat" className="mr-sm-2" > alamat </Label>
                                <Input type= "text" name="alamat" placeholder= "alamat"  value={this.state.alamat} onChange={this.UpdateChange}   />
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="no_telepon" className="mr-sm-2" > no_telepon </Label>
                                <Input type= "number" name="no_telepon" placeholder= "no_telepon" value={this.state.no_telepon} onChange={this.UpdateChange}   />
                            </FormGroup>

                            <div className="br">
                            <Button style={{ margin: '20px', textAlign: 'center' }}  color="info" light expand="md" onClick={this.updateHandler}>save</Button>
                            </div>

                        </Form>
                        </Col>
                </div>
             </Container>
                
            </div>
        )
    }

} export default Profile