import { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchSites } from '../actions/siteActions';

import "./css/SiteBuilder.scss";
import Sections from './Sections';

const Site = ({ siteId }) => {

    return (
        <div className="site">
            <Sections siteId={siteId}/>           
        </div>
    )
}

export default Site;