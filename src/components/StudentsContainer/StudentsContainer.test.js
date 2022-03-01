import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import StudentsContainer from './StudentsContainer';
import { shallow } from 'enzyme';
import { act, Simulate } from 'react-dom/test-utils';

const students = [
    {id: 1, firstName: 'John', lastName: 'Appleseed', email: 'test1@email.com', company: 'test1', skill: 'skill1', grades: ['90', '90'], tags: ['b']},
    {id: 2, firstName: 'Allison', lastName: 'Ally', email: 'test2@email.com', company: 'test2', skill: 'skill2', grades: ['80', '80'], tags: ['a']},
    {id: 3, firstName: 'Alex', lastName: 'Mercer', email: 'test3@email.com', company: 'test3', skill: 'skill3', grades: ['70', '70'], tags: ['b', '1']},
    ];

it('StudentsContainer renders TagSearchBar, NameSearchBar, and StudentList', () => { 
    render(<StudentsContainer students={students}/>);
    const NameSearchBar = screen.getByPlaceholderText('Search by name');
    const TagSearchBar = screen.getByPlaceholderText('Search by tag');
    const StudentList = screen.getByText('JOHN');
    expect(NameSearchBar).toBeInTheDocument();
    expect(TagSearchBar).toBeInTheDocument();
    expect(StudentList).toBeInTheDocument();
});

it('StudentsContainer studentFilterOnChange updates the tagSearchValue', () => {
    const wrapper = shallow(<StudentsContainer students={students}/>);
    const instance = wrapper.instance();
    wrapper.setState({ students: students, nameSeachValue: "", tagSearchValue: "" });
    instance.studentFilterOnChange({ target: { id: "tag", value: "a" } });

    expect(wrapper.state('tagSearchValue')).toEqual('a');
});

it('filters students by nameSearchValue', () => {
    act(() => {
        render(<StudentsContainer students={students}/>);
    });
    const NameSearchBar = screen.getByPlaceholderText('Search by name');
    
    fireEvent.change(
        NameSearchBar, {
            target: { 
                id: 'name', 
                value: 'John'
            }
        }
    );
    
    const activeStudent = screen.getByText('JOHN');
    expect(screen.queryByText('ALLISON')).toBeNull();
    expect(activeStudent).toBeInTheDocument();
});

it('filters students by tagSearchValue', () => {
    act(() => {
        render(<StudentsContainer students={students}/>);
    });
    const TagSearchBar = screen.getByPlaceholderText('Search by tag');
    const NameSearchBar = screen.getByPlaceholderText('Search by name');

    fireEvent.change(
        TagSearchBar, {
            target: { 
                id: 'tag', 
                value: 'b'
            }
        }
    );

    fireEvent.change(
        NameSearchBar, {
            target: { 
                id: 'name', 
                value: 'Alex'
            }
        }
    );

    const activeStudent = screen.getByText('ALEX');
    expect(screen.queryByText('JOHN')).toBeNull();
    expect(activeStudent).toBeInTheDocument();
});

it('filters students by both search values', () => {
    act(() => {
        render(<StudentsContainer students={students}/>);
    });
    const TagSearchBar = screen.getByPlaceholderText('Search by tag');
    
    fireEvent.change(
        TagSearchBar, {
            target: { 
                id: 'tag', 
                value: 'a'
            }
        }
    );

    const activeStudent = screen.getByText('ALLISON');
    expect(screen.queryByText('JOHN')).toBeNull();
    expect(activeStudent).toBeInTheDocument();
});

it('StudentsContainer addTagToStudent adds value of AddTag input to student.tags', () => {
    const wrapper = shallow(<StudentsContainer students={students}/>);
    const instance = wrapper.instance();
    wrapper.setState({ students: students, nameSeachValue: "", tagSearchValue: "" });
    instance.addTagToStudent({ target: { id: 1, value: 'ace' } });
    
    expect(wrapper.state('students')[0].tags[1]).toEqual('ace');
});