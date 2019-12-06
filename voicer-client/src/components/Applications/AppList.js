import React, { Component } from 'react';
import AppCard from './AppCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader} from 'reactstrap';
import "../../styles/_colors.scss"

// Styling
const AppListModal = styled(Modal)`
    padding: 25px;
    width: 50%;
`
const AppListModalHeader = styled(ModalHeader)`
    margin: 25px;
`

// Component
const AppList = props => {
    const apps = props.apps.reverse()
    return (
        <AppListModal
            isOpen={props.isOpen}
            toggle={props.toggle}
            centered={true}
            size="lg"
        >
            <AppListModalHeader>{`Applications for ${props.activeJob.jobTitle}`}</AppListModalHeader>
            {props.apps.length === 0 ?
                <div className="default-application-list centered">
                    <p>No Applications Yet</p>
                    <Link to="/client/talentlist">
                        <Button className='btn-orange centered'>
                            Find Talent
                        </Button>
                    </Link>
                </div> :
                apps.map(app => <AppCard key={app.jobOfferId} appData={app} clientName={props.clientName} job={props.activeJob}/>)}
        </AppListModal>
    );
};

export default AppList;