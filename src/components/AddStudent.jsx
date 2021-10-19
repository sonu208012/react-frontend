import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class AddStudent extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           id: '',
           name:'',
           grade:''
        }
      
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.gradeHandler = this.gradeHandler.bind(this);

    }//constructor

     
    idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }


    nameHandler=(event) => {
        this.setState({
           name: event.target.value});
    }

     
    gradeHandler=(event) => {
        this.setState({
             grade: event.target.value});
    }

    saveStudent = (e) => {
        e.preventDefault();
        let student={
           id: this.state.id,
           name: this.state.name,
           grade: this.state.grade
        };
        console.log(student);
        StudentService.createStudent(student).then(res =>{
                this.props.history.push('/students');  
            }).catch(err=>{
                console.log("record not saved.");
            });
       
       
        
        
    }//closing save method

    cancel(){
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Add Student</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Student ID: </label>
                                      <input placeholder="Id" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Student Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Student Grade: </label>
                                      <input placeholder="Grade" name="grade" className="form-control"
                                         value={this.state.grade} onChange={this.gradeHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.saveStudent}> Save </button>
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

export default AddStudent;