import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import store from 'store';

import { Link, Redirect } from 'react-router-dom'
import IsLoggedIn from '../helpers/IsLoggedIn';
import Axios from 'axios';
import { Button } from 'react-md';

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com'

class AppHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        isOpen: false,
        
            // data object user
            user: []
            

        };

        //..........binding function
        this.submitLogout = this.submitLogout.bind(this)
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    submitLogout() {
        // if(!IsLoggedIn()){
        store.remove('loggedIn');
        localStorage.removeItem('JWT_TOKEN')
        localStorage.removeItem('USER_ID')      
        this.state.history.push('/')
      
       

    }
// get data details by id
    componentDidMount() {
        if (IsLoggedIn()) {
            let token = localStorage.getItem('JWT_TOKEN')
            let id = localStorage.getItem('USER_ID')
            Axios
                .get(`/user/${id}`, { header: { "Authorization": token } })
                .then(ress => {
                    this.setState({
                        user: ress.data
                    })
                })
                .catch(err => {
                    alert(err)
                })
        }
    }

    render() {

        
      
        //data dari user state yang sudah diambil dari component didmount
        console.log('data user', this.state.user)

        // data id yang di get dari user_id saat login
        console.log('ini id user', localStorage.getItem('USER_ID'))

        const user = this.state.user
        let check  
        let load
        if (IsLoggedIn()) {
          
            load = <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className='text-white' nav caret color="info">
           profile
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem> 
                    {user.username}
                    </DropdownItem>
                   
                    <DropdownItem>
                    <Link to={`/profile/${localStorage.getItem('USER_ID')}`}> Edit Profile</Link>
                    </DropdownItem>

                    <DropdownItem>
                    <Button color="info" onClick={this.submitLogout}> logout</Button> 
                    </DropdownItem>

                    <DropdownItem divider />

                </DropdownMenu>
            </UncontrolledDropdown>

        } else {
            check = <NavLink> <Link className='text-white' to='/login'> <p className="text-white" > login </p></Link></NavLink>
        }

     
        return (



            <div>

                <Navbar color="info" light expand="md">
                    <NavbarBrand> <Link to='#'><img src='https://res.cloudinary.com/monggovestplus/image/upload/v1551762164/logomonggovest.png' height="35" /></Link></NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>


                            <NavItem>
                                <NavLink > <Link to='/DetailInvest'> <p className="text-white">Investasi</p></Link></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink  > <Link to='/DetailAboutUs'><p className="text-white">Tentang Kami</p></Link></NavLink>
                            </NavItem>

                            <NavItem>
                                {check}
                            </NavItem>

                            <NavItem>
                                {load}
                            </NavItem>

                        </Nav>

                    </Collapse>

                </Navbar>
            </div>
        );

       
    }
   



}




export default AppHeader