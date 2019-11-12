import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './InfoBox.css';

const InfoBox = () => {
    return (
        <div className="ib-div">
            <Jumbotron className="info-box">
                <h1 className="display-3 info-header">Voicer is driven by users like <i>you</i>.</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <hr className="my-2" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="lead">
                <Button color="primary">Learn More...</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default InfoBox