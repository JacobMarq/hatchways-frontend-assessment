import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentsList from './StudentsList';

const students = [
    {id: 1, firstName: 'John', lastName: 'Appleseed', email: 'test1@email.com', company: 'test1', skill: 'skill1', grades: ['90', '90'], tags: []},
    {id: 2, firstName: 'Allison', lastName: 'Ally', email: 'test2@email.com', company: 'test2', skill: 'skill2', grades: ['80', '80'], tags: ['a']},
    {id: 3, firstName: 'Alex', lastName: 'Mercer', email: 'test3@email.com', company: 'test3', skill: 'skill3', grades: ['70', '70'], tags: ['b', '1']},
    ];

it('Empty Student List renders no students text', () => { 
    render(<StudentsList students={[]}/>);
    const EmptyStudentList = screen.getByText('No students to load..');
    expect(EmptyStudentList).toBeInTheDocument();
});

it('StudentList renders a list of students', () => {
    render(<StudentsList students={students}/>);
    const Student = screen.getByText(students[1].firstName.toUpperCase());
    expect(Student).toBeInTheDocument();
});



