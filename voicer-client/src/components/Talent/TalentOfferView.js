import React from 'react';
import { connect } from 'react-redux';
import { getTalentJobOffers } from '../../actions'

class TalentOfferView extends React.Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        await this.props.getTalentJobOffers(this.props.talentId)
    }

    render() {
        return (
            <div style={{marginTop: '21vh'}}>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    talentId: state.getTalentReducer.talent.talentId
})


export default connect(mapStateToProps, { getTalentJobOffers })(TalentOfferView)