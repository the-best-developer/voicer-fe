import React from 'react';
import { Button } from 'reactstrap';

const InfoBox = () => {
    return (
        <div className="infobox">

        <h1>Voicer is driven by users like you.</h1>

        <p>
          Voicer is a marketplace for voicer-over talent to offer their services to potential clients. 
          The difference between Voicer and other marketplaces is the transparency and simplicity of the application. 
          As a potential client, you can easily hire talent to fill your listing, and vice-versa for a talent. 
          Voicer's loyalty system offers low service fees to both the client and the talent, 
          just by completing jobs on the platform. You can get started on Voicer by registering above!
        </p>


        <p><Button className="btn-orange btn-centered">Learn More...</Button></p>
        </div>
    );
}

export default InfoBox;
