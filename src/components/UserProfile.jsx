import React from 'react';

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com'
class Profile extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            user:{}
        }
    }

    //get data from api

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
                    console.log(err)
                })
        }
    }

    // create function update profile

    submitProfile(e){
        let token = localStorage.getItem('JWT_TOKEN')
        let id = localStorage.getItem('USER_ID')
        
        e.preventDefault();
        Axios
        .put(`/user/${id}`,{
            

        })
    }

    render(){
        
    }

} export default Profile