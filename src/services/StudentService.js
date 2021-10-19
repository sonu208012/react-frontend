import axios from 'axios';

const STUDENT_API_BASE_URL= "http://localhost:8081/api";
class StudentService{

    getStudents(){
       return axios.get(STUDENT_API_BASE_URL+"/allstudents");
    }

    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL+"/addstudent",student);
    }

    getStudentById(id){
        return axios.get(STUDENT_API_BASE_URL+"/student/"+id);
    }

    updateStudent(student,id){
        return axios.put(STUDENT_API_BASE_URL+"/student/"+id,student);
    }

    deleteStudent(id){
        return axios.delete(STUDENT_API_BASE_URL+"/student/"+id);
    }

}

export default new StudentService();