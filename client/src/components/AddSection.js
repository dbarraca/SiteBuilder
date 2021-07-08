import { useState } from 'react';

const AddSection = ({ sectionOptions, onAddSection }) => {
    const [ selectedSection, setSelectedSection ] = useState("hero");

    const handleAdd = () => {
        onAddSection(selectedSection);
    }

    const handleSelect = () => {
        setSelectedSection(document.querySelector("#sectionSelect").value);
    }

    return (
        <section>
            <div className="add-section">
                <select id="sectionSelect" onChange={handleSelect}>
                    {sectionOptions.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>

                <button className="add-section-btn" onClick={handleAdd}>Add Section</button>
            </div>
        </section>
    )
}

export default AddSection;