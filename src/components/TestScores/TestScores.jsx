import './TestScores.css';
import React from 'react';

const TestScores = (props) => {
    const { grades } = props;

    let testScoreClasses = ['test-scores'];
    
    if(props.show) {
        testScoreClasses = ['test-scores', 'active'];
    }

    return(
        <ul aria-label='TestScores' className={testScoreClasses.join(' ')}>
            {grades.map((grade, id) =>
                <li key={id}>
                    <p>Test {id + 1}: 
                        <span className='score'>
                            {grade}%
                        </span>
                    </p>
                </li>
            )}
        </ul>
    );
}

export default TestScores;