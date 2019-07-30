import React, { Component, createRef } from 'react'
import Dropzone from 'react-dropzone'
import AppHeader from '../common/AppHeader';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Axios from 'axios';
import {withRouter} from 'react-router-dom'
 
const dropzoneRef = createRef()


 class Cms extends Component {
 
    constructor(props) {
       
        super(props);
        this.state = {
            image: '',
            title: '',
            content: '',
            datasWithImg:[]
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeContent= this.handleChangeContent.bind(this)
        this.sendData = this.sendData.bind(this)
    }
 
    sendData(){
        Axios.post('http://reduxblog.herokuapp.com/api/posts?key=testpostimages', {
            title: this.state.title, categories: this.state.image.url, content: this.state.content
        }).then(res => {
            this.setState({
                datasWithImg: res.data
            })
        })
    }
 
 
    handleUploadImages = images => {
        // uploads is an array that would hold all the post methods for each image to be uploaded, then we'd use axios.all()
        const uploads = images.map(image => {
            // our formdata
            const formData = new FormData();
            formData.append("file", image);
            formData.append("tags", 'TAGS'); // Add tags for the images - {Array}
            formData.append("upload_preset", 'lx53fafb'); // Replace the preset name with your own
            formData.append("api_key", "574962124878414"); // Replace API key with your own Cloudinary API key
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
 
    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }
 
    handleChangeContent(event) {
        this.setState({content: event.target.value});
    }
 
    render() {
        console.log('images', this.state.image.url)
 
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
                <Container>
                    <div>
                        <Form>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Images</Label>
                                <Col sm={2}>
                                    {imageUpload}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Title</Label>
                                <Col sm={10}>
                                    <Input type="text" value={this.state.title} onChange={this.handleChangeTitle} placeholder="Title" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleText" sm={2}>Content</Label>
                                <Col sm={10}>
                                    <Input type="text" value={this.state.content} onChange={this.handleChangeContent} />
                                </Col>
                            </FormGroup>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button onClick={this.sendData}>Submit</Button>
                            </Col>
                        </Form>
                    </div>
                </Container>
 
            </div>
        )
    }
} export default withRouter(Cms)