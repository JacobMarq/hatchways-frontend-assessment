import './StudentTags.css';
import React from 'react';

const StudentTags = (props) => {
    const { tags } = props;

    if( tags.length === 0 ) {
        return <div aria-label='TagsPlaceholder'></div>
    }

    return(
        <div aria-label='StudentTags' className='row student-tags'>
            {tags.map((tag, id) =>
                <div key={id} className='tag'>
                    <p>{tag}</p>
                </div>
            )}
        </div>
    );
}

export default StudentTags;