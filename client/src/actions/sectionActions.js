import { FETCH_SECTIONS, NEW_SECTION } from './types';

export const fetchSections = (siteId) => async dispatch => {
    const API = process.env.NODE_ENV === 'production' ? 'https://pagestager.herokuapp.com' : 'http://localhost:5000';

    const res = await fetch(`${API}/sections/${siteId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        } 
    });

    const sections = await res.json();

    dispatch({
        type: FETCH_SECTIONS,
        payload: sections
    });
}