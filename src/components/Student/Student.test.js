import React from 'react';
import { render, screen } from '@testing-library/react';
import Student from './Student';

const student = {id: 2, firstName: 'Allison', lastName: 'Ally', email: 'test2@email.com', company: 'test2', skill: 'skill2', grades: ['80', '80'], tags: ['a']}

it('Student renders child components of specified student', () => { 
    render(<Student key={student.id} student={student}/>);
    const StudentTags = screen.getByLabelText('StudentTags');
    const TestScores = screen.getByLabelText('TestScores');
    const AddTag = screen.getByLabelText('AddTag');
    const ExpandButton = screen.getByLabelText('ExpandButton');
    expect(StudentTags).toBeInTheDocument();
    expect(TestScores).toBeInTheDocument();
    expect(AddTag).toBeInTheDocument();
    expect(ExpandButton).toBeInTheDocument();
});

it('Student renders a display of specified students information', () => {
    render(<Student key={student.id} student={student}/>);
    const StudentImg = screen.getByAltText('student-img');
    const StudentEmail = screen.getByText('Email: ' + student.email);
    expect(StudentImg).toBeInTheDocument();
    expect(StudentEmail).toBeInTheDocument();
});

it('Student renders capitalized full name', () => {
    render(<Student key={student.id} student={student}/>);
    const StudentFirstName = screen.getByText(student.firstName.toUpperCase());
    const StudentLastName = screen.getByText(student.lastName.toUpperCase());
    expect(StudentFirstName).toBeInTheDocument();
    expect(StudentLastName).toBeInTheDocument();
});

it('Student renders averaged percent of all student grades', () => {
    render(<Student key={student.id} student={student}/>);
    const StudentAverage = screen.getByText('Average: 80%');
    expect(StudentAverage).toBeInTheDocument();
});