import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Header.css';

const Links = ({links}) => (
    links.map(({url, className, name}) =>
        [<Link to={url} className={className}>{name}</Link>]
    )
);

class Menu extends Component {
    render() {
        let links = [
            {url: '/courses', className: 'header__logo', name: 'OTUS'},
            {url: '/courses', className: 'header__menu_item', name: 'Курсы'}
        ]

        if (this.props.loggedIn) {
            links.push({url: '/logout', className: 'header__menu_item_right', name: 'Выход'},
                        {url: '/account', className: 'header__menu_item', name: 'Мой профиль'})

            if (this.props.userType === 'admin') {
                links.push({url: '/score', className: 'header__menu_item', name: 'Ведомость'})
            } else {
                links.push({url: '/schedule', className: 'header__menu_item', name: 'Расписание занятий'})
            }
        } else {
            links.push({url: '/login', className: 'header__menu_item_right', name: 'Вход'},
                       {url: '/register', className: 'header__menu_item', name: 'Регистрация'})
        }

        return (
            <header className="header page__header">
                <div className="container header__container">
                    <Links links={links}/>
                </div>
            </header>
        );
    }
}

const mapStateToProps = ({loggedIn, userType}) => {
    return {
        loggedIn: loggedIn,
        userType: userType
    }
};

const Header = connect(mapStateToProps)(Menu)

export default Header;
