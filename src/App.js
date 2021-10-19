import ListStudents from './components/ListStudents';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewStudent from './components/ViewStudent';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div>
          <Router>
          <Header />
            <div className="container">
              <Switch>
                  <Route path="/" exact component={ListStudents}></Route>
                  <Route path="/students" component={ListStudents}></Route>
                  <Route path="/add-student" component={AddStudent}></Route>
                  <Route path="/update-student/:id" component={UpdateStudent}></Route> 
                  <Route path="/delete-student/:id" component={DeleteStudent}></Route> 
                  <Route path="/view-student/:id" component={ViewStudent}></Route> 
                  
              </Switch>
            </div>
            <Footer />
            
          </Router>
        </div>
  );
}

export default App;
