import './SutdentsContainer.css';
import React from 'react';
import StudentsList from '../StudentsList/StudentsList';
import SearchBar from '../SearchBar/SearchBar';

const Name = "name";
const Tag = "tag";

export default class StudentsContainer extends React.Component {
    constructor(props){
        super(props);

        const { students } = this.props;

        this.state = {
            students: students,
            nameSearchValue: '',
            tagSearchValue: '',
        };
    }

    componentDidUpdate(prevProps) {
        if(prevProps.students !== this.props.students)
            this.setState({ students: this.props.students });
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
    
    render() {
        console.log(this.state.students);
        let filteredStudents = [];

        if(this.state.students.length !== 0) {
            filteredStudents =
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
        }

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