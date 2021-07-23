import "./css/SiteBuilder.scss";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SectionForm from './SectionForm';
import AddSection from './AddSection';

import { fetchSections } from '../actions/sectionActions';

const SiteBuilder = ({ siteId, sectionOptions, onAdd, onMoveUp, onMoveDown, onDelete }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSections(siteId));
    }, [dispatch]);

    const sections = useSelector(state => state.sections.items);

    const sectionFormItems = sections && sections.map((section) => (
        <SectionForm key={section._id} section={section}
         onMoveUp={onMoveUp} onMoveDown={onMoveDown} onDelete={onDelete}/>
    ));

    return (
        <div className="site-builder">

            {sectionFormItems}

            {/* {sections && sections.sort((sect1, sect2) => { return sect1.order - sect2.order }).map((section, index) => (
                <SectionForm key={index} section={section} index={index}
                 onMoveUp={onMoveUp} onMoveDown={onMoveDown} onDelete={onDelete}/>
            ))} */}

            {/* <Section key={index} type={section.type} /> */}

            <AddSection sectionOptions={sectionOptions} onAdd={onAdd}/>
        </div>
    )
}

export default SiteBuilder;