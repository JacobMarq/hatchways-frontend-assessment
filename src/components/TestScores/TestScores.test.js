import React from 'react';
import { render, screen } from '@testing-library/react';
import TestScores from './TestScores';

const student = {id: 2, firstName: 'Allison', lastName: 'Ally', email: 'test2@email.com', company: 'test2', skill: 'skill2', grades: ['80', '80'], tags: ['a']};

it('TestScores does not render when show is false', () => { 
    render(<TestScores grades={student.grades} show={false}/>);
    const NoTags = screen.getByLabelText('TestScores');
    expect(NoTags.className).toEqual('test-scores');
});

it('TestScores renders a list of test scores starting at test 1', () => {
    render(<TestScores grades={student.grades} show={true}/>);
    const TestName = screen.getByText('Test 1:');
    const Scores = screen.getAllByText(student.grades[0] + '%');
    expect(screen.findByText('Test 0:')).toMatchObject({});
    expect(TestName).toBeInTheDocument();
    expect(Scores[0]).toBeInTheDocument();
});