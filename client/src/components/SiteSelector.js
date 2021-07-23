import { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchSites } from '../actions/siteActions';

class SiteSelector extends Component {
    componentWillMount() {
        this.props.fetchSites();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newSite) {
            this.props.sites.unshift(nextProps.newSite);
        }
    }

    render() {
        const siteItems = this.props.sites.map(site => (
            <h1 key={site.id}>{site.name}</h1>
        ));

        return (   
            <div className="sites">
                <h1>Site Selector</h1>

                {siteItems}
            </div>
        )
    }
}

/*
const Sites = () => {
    useEffect(() => {
        this.props.fetchSites();
    });

    const siteItems = this.props.sites.map(site => (
        <h1 key={site.id}>{site.name}</h1>
    ));

    return (
        <div className="sites">
            <h1>Sites</h1>

            {siteItems}
        </div>
    )
}*/

SiteSelector.propTypes = {
    fetchSites: PropTypes.func.isRequired,
    sites: PropTypes.array.isRequired,
    newSite: PropTypes.object
}

const mapStateToProps = state => ({
    sites: state.sites.items,
    newSite:  state.sites.item
})

export default connect(mapStateToProps, {fetchSites})(SiteSelector);