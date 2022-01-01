import React from 'react';
import { render, screen } from '@testing-library/react';
import AddTag from './AddTag';

const student = {id: 2, firstName: 'Allison', lastName: 'Ally', email: 'test2@email.com', company: 'test2', skill: 'skill2', grades: ['80', '80'], tags: ['a']};

it('Displays an input field associated with specified student for text entry', () => { 
    render(<AddTag studentID={student.id}/>);    
    const Input = screen.getByPlaceholderText('Add a tag');
    expect(Input.id).toEqual(student.id.toString());
});