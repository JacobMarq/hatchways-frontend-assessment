import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentTags from './StudentTags';

const students = [
    {id: 1, firstName: 'John', lastName: 'Appleseed', email: 'test1@email.com', company: 'test1', skill: 'skill1', grades: ['90', '90'], tags: []},
    {id: 2, firstName: 'Allison', lastName: 'Ally', email: 'test2@email.com', company: 'test2', skill: 'skill2', grades: ['80', '80'], tags: ['a']},
    {id: 3, firstName: 'Alex', lastName: 'Mercer', email: 'test3@email.com', company: 'test3', skill: 'skill3', grades: ['70', '70'], tags: ['b', '1']},
    ];

it('Empty Student Tags renders a placeholder div', () => { 
    render(<StudentTags tags={students[0].tags}/>);
    const NoTags = screen.getByLabelText('TagsPlaceholder');
    expect(NoTags).toBeInTheDocument();
});

it('StudentTags renders a list of a students tags', () => {
    render(<StudentTags tags={students[2].tags}/>);
    const Tag = screen.getByText(students[2].tags[0]);
    expect(Tag).toBeInTheDocument();
});