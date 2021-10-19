import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ListStudents extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                students:[] 
          }
          this.addStudent=this.addStudent.bind(this);
          this.editStudent=this.editStudent.bind(this);
          this.deleteStudent=this.deleteStudent.bind(this);
          this.viewStudent=this.viewStudent.bind(this);
      }
    
     componentDidMount() {
         StudentService.getStudents().then((res) => {
             this.setState({students:res.data});
         });
     }
     
     addStudent()
     {
        
        this.props.history.push('/add-student');
     }

     editStudent(id)
     {
        this.props.history.push(`/update-student/${id}`);
        
     }

     deleteStudent(id)
     {
        this.props.history.push(`/delete-student/${id}`);
        // StudentService.deleteStudent(id).then(res => {
        //     this.setState({
        //          student: this.state.students.filter(student => student.id !== id)
        //     })
        // })
        
     }

     viewStudent(id)
     {
        this.props.history.push(`/view-student/${id}`);
        
     }

    render() {
        return (
            <div>
                <h2 className="text-center">Students List</h2>
                <div> 
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student Id</th>
                                <th>Student Name</th>
                                <th>Student Grade</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                     student =>
                                     <tr key={student.id}>
                                         <td>{student.id}</td>
                                         <td>{student.name}</td>
                                         <td>{student.grade}</td>
                                         <td>
                                            <button onClick={() =>this.editStudent(student.id)} className="btn btn-primary">Update</button> 
                                            <button onClick={() =>this.deleteStudent(student.id)} className="btn btn-danger">Delete</button> 
                                            <button onClick={() =>this.viewStudent(student.id)} className="btn btn-primary">View</button> 
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListStudents;