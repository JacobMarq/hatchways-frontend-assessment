import './SutdentsList.css';
import React from 'react';
import Student from '../Student/Student';

const StudentsList = (props) => {
    const { students, addTagToStudent } = props;

    if(students.length === 0) {
        return <p className='empty-student-list'>No students to load..</p>
    }

    return(
        <ul aria-label='StudentList' className='students-list'>
            {students.map(student =>
                <Student key={student.id} student={student} addTagToStudent={addTagToStudent}/>
            )}
        </ul>
    )
}

export default StudentsList;