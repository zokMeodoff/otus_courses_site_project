import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CoursesComponent from './components/courses/CoursesComponent';
import LoginComponent from './components/user/LoginComponent';
import RegistrationComponent from './components/user/RegistrationComponent';
import AccountComponent from './components/user/AccountComponent';
import ScoreComponent from './components/score/ScoreComponent';
import ScheduleComponent from './components/schedule/ScheduleComponent';
import LogoutComponent from './components/user/LogoutComponent';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <body>
                    <Header/>
                    <main>
                        <Route exact path="/" component={LoginComponent}/>
                        <Route path="/courses" component={CoursesComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/register" component={RegistrationComponent}/>
                        <Route path="/logout" component={LogoutComponent}/>
                        <Route path="/account" component={AccountComponent}/>
                        <Route path="/score" component={ScoreComponent}/>
                        <Route path="/schedule" component={ScheduleComponent}/>
                    </main>
                    <Footer/>
                </body>
            </BrowserRouter>
        )
    }
}

export default App;

