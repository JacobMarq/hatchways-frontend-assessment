import './Student.css';
import React from 'react';
import ExpandButton from '../ExpandButton/ExpandButton';
import TestScores from '../TestScores/TestScores';
import StudentTags from '../StudentTags/StudentTags';
import AddTag from '../AddTag/AddTag';

export default class Student extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            expandActive: false,
            testScoresActive: false,
        };
    }

    buttonClickHandler = () => {
        this.setState(prevState => {
            return { expandActive: !prevState.expandActive,
                     testScoresActive: !prevState.testScoresActive, }
        })
    }

    render() {
        const { student, addTagToStudent } = this.props;
        
        const findAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length;

        return(
            <li aria-label='Student' className='student row'>
                    <img className='student-pic' src={student.pic} alt="student-img" />
                    <div className='student-body-wrap'>
                        <h2 className='student-name'>
                            <span>{student.firstName.toUpperCase()}</span>
                            <span> {student.lastName.toUpperCase()}</span>
                        </h2>
                        <div className='student-info'>
                            <p>
                                Email: {student.email}
                            </p>
                            <p>
                                Company: {student.company}
                            </p>
                            <p>
                                Skill: {student.skill}
                            </p>
                            <p>
                                Average: {findAverage(student.grades.map(Number))}%
                            </p>
                            <TestScores grades={student.grades} show={this.state.testScoresActive}/>
                            <StudentTags tags={student.tags}/>
                            <AddTag studentID={student.id} addTagToStudent={addTagToStudent}/>
                        </div>
                    </div>
                    <div className='expand-container'>
                        <ExpandButton click={this.buttonClickHandler} active={this.state.expandActive}/>
                    </div>
                </li>
        );
    }
}