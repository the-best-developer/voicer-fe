import React from 'react'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth'

//As the req.body fields
//File
//Title
//Description

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',this.state.file);
        formData.append('title','This is a title');
        formData.append('description','This is a description');
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axiosWithAuth()
        .post("/api/voice",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default ReactUploadImage