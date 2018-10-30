import React from 'react';
import { NavLink } from 'react-router-dom';



class Nav extends React.Component {

    render() {

        return (

            <nav className="navbar">

                <div className="nav-item header">
                    <NavLink to='/' >
                        <h1 className="title">  Unibooks </h1>
                    </NavLink>
                </div>

                <div className="formWrapper">
                    <form className="form-inline">
                        <button className="btn my-2 my-sm-0" type="submit">
                            <i className="fas fa-search"></i></button>
                        <input className="form-control mr-sm-2 form-search" type="search" placeholder="Search for books.." aria-label="Search" />

                    </form>
                </div>


                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/LoginUser" activeClassName='active'>
                            <a href="#" className="nav-link">Log in</a>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/RegisterBook' activeClassName='active'>
                            <a href="#" className="nav-link"> Register a Book </a>
                        </NavLink>
                    </li>


                </ul>

            </nav>



        )
    }

}

export default Nav;