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
    
    const sortApps = arr => {
        const cache = {}
        arr.map(offer => 
            offer.talentId in cache ? 
                cache[offer.talentId].push(offer) : cache[offer.talentId] = [offer]
        )
        return cache
    }

    const returnCards = (apps) => {
        const arr = Object.keys(apps)
        console.log(apps)
        return (
            <div className='tucan'>
            { 
            arr.map(talent =>
                apps[talent].reverse().map((app, index) => 
                    <AppCard key={app.jobOfferId} recent={index===0 ? true : false} appData={app} clientName={props.clientName} job={props.activeJob} />
            ))
            }
            </div>
        )
    }

    const apps = sortApps(props.apps)
    return (
        <AppListModal
            isOpen={props.isOpen}
            toggle={props.toggle}
            centered={true}
            size="lg"
        >
            <AppListModalHeader>{`Applications for ${props.activeJob.jobTitle}`}</AppListModalHeader>
            {Object.keys(apps).length > 0 ?
                returnCards(apps)
                :
                <div className="default-application-list centered">
                    <p>No Applications Yet</p>
                    <Link to="/client/talentlist">
                        <Button className='btn-orange centered'>
                            Find Talent
                        </Button>
                    </Link>
                </div>
            }        
        </AppListModal>
    );
};

export default AppList;