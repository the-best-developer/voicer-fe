import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSample } from '../../actions/addSample';

import '../../styles/talent-samples.scss';

class TalentProfileSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            url: '',
            error: false,
            errorMessage: ''
        };
    }

    handleChange = ev => {
        this.setState({ success: false, url: '' });
    };
    handleUpload = ev => {
        ev.preventDefault();
        let file = this.uploadInput.files[0];
        // Split the filename to get the name and type
        let fileParts = this.uploadInput.files[0].name.split('.');
        let fileName = fileParts[0] + ' - ' + Date.now();
        let fileType = fileParts[1];
        console.log('Preparing the upload');
        let userId = this.props.userId;
        this.props.addSample(file, fileName, fileType, userId);
    };

    render() {
        const SuccessMessage = () => (
            <div style={{ padding: 50 }}>
                <h3 style={{ color: 'green' }}>SUCCESSFUL UPLOAD</h3>
                <a href={this.props.newUrl}>Access the file here</a>
                <br />
            </div>
        );
        const ErrorMessage = () => (
            <div style={{ padding: 50 }}>
                <h3 style={{ color: 'red' }}>FAILED UPLOAD</h3>
                <span style={{ color: 'red', backgroundColor: 'black' }}>
                    ERROR:{' '}
                </span>
                <span>{this.state.errorMessage}</span>
                <br />
            </div>
        );
        return (
            <div className="div">
                <div className="sampleDiv">
                    <h1 className="sampleTitle">UPLOAD VOICE SAMPLE</h1>
                    {this.props.uploadSuccess ? <SuccessMessage /> : null}
                    {this.props.uploadError ? <ErrorMessage /> : null}
                    <input
                        className="sampleInput"
                        onChange={this.handleChange}
                        ref={ref => {
                            this.uploadInput = ref;
                        }}
                        type="file"
                        accept=".mp3"
                    />
                </div>
                <button className="sampleButton" onClick={this.handleUpload}>UPLOAD</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    newUrl: state.sampleReducer.newUrl,
    uploadSuccess: state.sampleReducer.uploadSuccess,
    uploadError: state.sampleReducer.uploadError
});

export default connect(mapStateToProps, {
    addSample
})(TalentProfileSample);
