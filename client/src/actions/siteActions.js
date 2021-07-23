import { FETCH_SITES, NEW_SITE } from './types';

export const fetchSites = (API, subdomain) => async dispatch => {
    const res = await fetch('http://localhost:5000/sites', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        } 
    });

    const sites = await res.json();

    dispatch({
        type: FETCH_SITES,
        payload: sites
    });
}