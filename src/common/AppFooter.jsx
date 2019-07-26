import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Jumbotron, Button, Container, CardHeader, Row, CardFooter} from 'reactstrap';
import{Link} from 'react-router-dom';


class AppFooter extends React.Component {


    render() {
        return (

          
            <div color="info" light expand="md">
            <CardHeader  light expand="md">
            {/* <Row>  */}
                    <img className="logo-footer" src="https://res.cloudinary.com/monggovestplus/image/upload/v1551762164/logomonggovest.png" alt="logofooter" height ="75"/>
            {/* </Row> */}
                <Container className="copyright-footer" fluid  clasName="background-color: seagreen">
                    &copy; {new Date().getFullYear()} Copyright - {" "}
                    <a className="txt-center"> agamindra0@gmail.com </a>
                </Container>
            </CardHeader>
            </div>
            
    
        )

    }
}

export default AppFooter