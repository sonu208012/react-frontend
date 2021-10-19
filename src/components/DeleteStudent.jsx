import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class DeleteStudent extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name:'',
                 grade:''
             }
     
        
        this.deleteStudent = this.deleteStudent.bind(this);

    }//constructor

     componentDidMount()
     {
        StudentService.getStudentById(this.state.id).then((res) =>{
          let student = res.data;
          this.setState({name:student.name,
                  grade:student.grade
                });
        });
           
     }
     
    

    
  deleteStudent = (e) => {
        e.preventDefault();
        let student={
           id: this.state.id,
           name: this.state.name,
           grade: this.state.grade
        };

        console.log(student);
        StudentService.deleteStudent(this.state.id).then(res => {
            
            this.props.history.push('/students');
        })
      
        
    }

    cancel(){
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Student</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Student ID: </label>
                                      <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Student Name: </label>
                                      <input placeholder="Name" readOnly= "true" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Student Grade: </label>
                                      <input placeholder="Grade" readOnly="true" name="grade" className="form-control"
                                         value={this.state.grade} onChange={this.gradeHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.deleteStudent}> Delete </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default DeleteStudent;