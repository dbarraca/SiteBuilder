import { useState } from 'react';

const AddSection = ({ sectionOptions, onAdd }) => {
    const [ sectionType, setSectionType ] = useState("hero");

    const handleAdd = () => {
        console.log(sectionType);

        onAdd(sectionType);
    }

    const handleSelect = (e) => {
        console.log(e.target.value);
        setSectionType(e.target.value);
    }

    return (
        <section>
            <div className="add-section">
                <select id="sectionSelect" onChange={(e) => handleSelect(e)}>
                    {sectionOptions && sectionOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>

                <button className="add-section-btn" onClick={handleAdd}>Add Section</button>
            </div>
        </section>
    )
}

export default AddSection;