import React from 'react';
import { connect } from 'react-redux';
import { getTalentJobOffers } from '../../actions';
import '../../styles/tjobofferlist.scss';
import Container from '../../styles/styledComponents/Container';
import TalentOfferCard from './TalentOfferCard';

class TalentOfferView extends React.Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        await this.props.getTalentJobOffers(this.props.talent[0].talentId)
    }

    render() {
        console.log(this.props.jobOffers)
        return (
            <Container>
                {this.props.jobOffers.map(offer => {
                    return <TalentOfferCard offer={offer} />
                })}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    talent: state.getTalentReducer.talent,
    jobOffers: state.getJobOffersReducer.jobOffers
})


export default connect(mapStateToProps, { getTalentJobOffers })(TalentOfferView)