import { FETCH_SECTIONS, NEW_SECTION } from './types';

export const fetchSections = (siteId) => async dispatch => {
    console.log("fetch sections siteId: ", siteId);

    const res = await fetch(`http://localhost:5000/sections/${siteId}`, {
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