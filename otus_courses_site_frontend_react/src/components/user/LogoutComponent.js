import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {doLogout} from "../../actions/LoginAction";

import AxiosService from "../../services/AxiosService"

class LogoutComponent extends Component {

    async componentDidMount() {
        this.props.dispatch(doLogout());
        await AxiosService.post('/api/logout/')
    }

    render() {
        return (
            <Redirect to="/login"/>
        )
    }
};

const Logout = connect()(LogoutComponent);

export default Logout