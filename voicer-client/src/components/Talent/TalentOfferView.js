import React from 'react';
import { connect } from 'react-redux';
import { getTalentJobOffers } from '../../actions'

class TalentOfferView extends React.Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        await this.props.getTalentJobOffers(this.props.talent[0].talentId)
    }

    render() {
        return (
            <div style={{marginTop: '21vh'}}>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    talent: state.getTalentReducer.talent
})


export default connect(mapStateToProps, { getTalentJobOffers })(TalentOfferView)