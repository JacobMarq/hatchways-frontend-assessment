import React from 'react';
import './App.css';
import StudentsContainer from './components/StudentsContainer/StudentsContainer';

const API = 'https://api.hatchways.io/assessment/students';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
          data.students.forEach(student => student.tags = []);
          this.setState({ students: data.students });
      });
  }

  render() {
    console.log(this.state.students);

    return (
      <div className="App">
          <StudentsContainer id={'studentsContainer'} students={this.state.students}/>
      </div>
    );
  }
}

export default App;
