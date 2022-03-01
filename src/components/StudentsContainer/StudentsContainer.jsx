import './SutdentsContainer.css';
import React from 'react';
import StudentsList from '../StudentsList/StudentsList';
import SearchBar from '../SearchBar/SearchBar';

const API = 'https://api.hatchways.io/assessment/students';
const Name = "name";
const Tag = "tag";

export default class StudentsContainer extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            students: [],
            nameSearchValue: '',
            tagSearchValue: '',
        };
    }

    addTagToStudent = (event) => {
        const students = [...this.state.students]
        const student = students.find(student => {
            return student.id === event.target.id
        })

        student.tags.push(event.target.value.toLowerCase())
        this.setState({ students: students })
    }

    studentFilterOnChange = (event) => {
        if(event.target.id === Name)
            this.setState({
                nameSearchValue: event.target.value.toLowerCase()
            })
        if(event.target.id === Tag)
            this.setState({
                tagSearchValue: event.target.value.toLowerCase()
            })
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                // add an empty tags array to all student objects 
                // outside of state transition
                data.students.forEach(student => student.tags = []);
                this.setState({ students: data.students })
            })
    }
    
    render() {
        const filteredStudents =
            this.state.students.filter(student => {
                const studentName = (student.firstName + ' ' + student.lastName).toLowerCase();
                const studentTagsString = student.tags.toString();
                // Check if there is no filter value
                // compare if one or both values are not empty
                // otherwise return null to satisfy return value of filter
                if(this.state.tagSearchValue === ''){
                    if(this.state.nameSearchValue === '')
                        return student;
                    if(studentName.includes(this.state.nameSearchValue))
                        return student;

                    return null;
                }
                if(studentTagsString.includes(this.state.tagSearchValue)) {
                    if(this.state.nameSearchValue === '')
                        return student;
                    if(studentName.includes(this.state.nameSearchValue))
                        return student;

                    return null;
                }
                return null;
            });

        return(
            <div className='container'>
                <SearchBar 
                    typeOfSearchBar={Name} 
                    studentFilterOnChange={this.studentFilterOnChange}
                />
                <SearchBar 
                    typeOfSearchBar={Tag} 
                    studentFilterOnChange={this.studentFilterOnChange}
                />
                <StudentsList students={filteredStudents} addTagToStudent={this.addTagToStudent}/>
            </div>
        );
    }
}