import './AddTag.css';
import React from 'react';

const AddTag = (props) => {
    const { studentID, addTagToStudent } = props
    const Enter = 13;
    
    const keyPress = (event) => {
        if(event.keyCode === Enter){
            addTagToStudent(event);
        }
    }

    return(
        <div aria-label='AddTag' className='add-tag'>
            <label htmlFor="input-text">Add a tag</label>
            {/* set Tag id to Student ID to define relationship */}
            <input id={studentID} className='add-tag-input' type="text" placeholder="Add a tag" onKeyDown={keyPress}/>
        </div>
    );
}

export default AddTag;