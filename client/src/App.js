import React from 'react';
import Navbar from './components/layout/Navbar'
import LoginChoice from './components/Pages/LoginChoice'
import SignupChoice from './components/Pages/SignupChoice'
import AuthState from './context/auth/AuthState'
import VerifyConsultant from './components/auth/VerifyConsultant'
import VerifyUser from './components/auth/VerifyUser'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import FirstPage from './components/Pages/FirstPage'
import SelectedState from './context/selected/SelectedState'
import SecondPage from './components/Pages/SecondPage'
import setAuthToken from './components/setAuthToken';
import RequestState from './context/request/RequestState'
import ConsultPage from './components/Pages/ConsultPage'
import confirmpage from './components/Pages/confirmed'
if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'))
}

function App() {
  return (
    <AuthState >
      <SelectedState>
        <RequestState>
            <div className="App">
              <Router>
                <Navbar />
                <Switch>
                  <Route exact path="/loginChoice" component={LoginChoice} />
                  <Route exact path="/signupChoice" component={SignupChoice} />
                  <Route exact path="/verifyConsultant" component={VerifyConsultant} />
                  <Route exact path="/verifyUser" component={VerifyUser} />
                  <Route exact path='/afterverify' component={FirstPage} ></Route>
                  <Route exact path='/specific/category' component={SecondPage}></Route>
                  <Route exact path='/afterverify/consult' component={ConsultPage}></Route>
                  <Route exact path='/confirmed/appointment/' component={confirmpage}></Route>
                </Switch>
              </Router>
            </div>
          </RequestState>
      </SelectedState>
    </AuthState>
  );
}

export default App;
