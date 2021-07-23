import { fetchSections } from '../actions/sectionActions';

import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

import Section from './Section';

const Sections  = ({ siteId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSections(siteId));
    }, [dispatch]);

    const sections = useSelector(state => state.sections.items);

    const sectionItems = sections && sections.map(section => (
        <Section key={section.id} type={section.type}/>
    ));

    return ( 
        <div className="sections">
            {sectionItems}
        </div>
    )
}

export default Sections;