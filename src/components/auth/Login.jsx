import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import Axios from 'axios';
import store from 'store';
import IsLoggedIn from '../../helpers/IsLoggedIn';
import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,

}
    from 'reactstrap';
import AppHeader from '../../common/AppHeader';
import AppFooter from '../../common/AppFooter';

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            isOpen: false,
            error: false

        }

        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.submitLogin = this.submitLogin.bind(this);



    }

    changeEmail(e) {
        this.setState({ email: e.target.value })
    }

    changeUsername(e) {
        this.setState({ username: e.target.value })
    }

    changePassword(e) {
        this.setState({ password: e.target.value })
    }


    submitLogin(e) {
        e.preventDefault();
        Axios
            .post("/api/users/login", {
                email: this.state.email,
                password: this.state.password,
                username: this.state.username
            })
            .then((response) => {
                console.log('ini function login', response);
                if (response.status === 200) {

                    localStorage.setItem("JWT_TOKEN", response.data.token)
                   
                    const token = localStorage.getItem('JWT_TOKEN')
                    const tokenParts = token.split('.');
                    const encodedPayload = tokenParts[1];
                    const rawPayload = atob(encodedPayload);
                    const user = JSON.parse(rawPayload);

                    localStorage.setItem('USER_ID', user.id)

                    store.set('loggedIn', true);
                    alert('selamat datang selamat berinvestasi');
                   
                    this.props.history.push('/mainpage')
                }

            })
            .catch(function (error) {
                console.log('eror login', error)
                alert("anda belum terdaftar")
            })

        this.setState({
            email: '',
            password: '',
            username: '',
        })
    }

    render() {
        console.log('id', localStorage.getItem('USER_ID'))
        // console.log(IsLoggedIn())

        if (IsLoggedIn()) {
            return (
                <Redirect to='/login' />
            )
        }
        return (
            <div>
                <AppHeader />


                <Container style={{ textAlign: 'center' }}>
                    <h2 style={{ margin: '30px' }}>LOGIN</h2>
                    <Form row style={{ width: '400px', margin: 'auto' }}>

                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="username" className="mr-sm-2" >UserName</Label>
                            <Input type="username" name="username" placeholder="username" onChange={this.changeUsername} />
                        </FormGroup>

                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="example@jomblo.com" onChange={this.changeEmail} />
                        </FormGroup>

                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">Password</Label>
                            <Input type="password" name="password" id="******" placeholder="******" onChange={this.changePassword} />
                        </FormGroup>


                    </Form>

                    <Button color="info" onClick={this.submitLogin}>login</Button>

                    <div>
                        <Link to='/register'>  <p> daftar disini </p> </Link>
                    </div>
                </Container>
                <AppFooter />

            </div>
        )
    }

} export default Login