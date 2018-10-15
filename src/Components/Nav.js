import React from 'react';



class Nav extends React.Component {

    render() {

        return (

            <nav className="navbar navbar-dark">

                <h1 className="title"> Unibooks </h1>

                <div className="formWrapper">
                    <form class="form-inline">
                        <button class="btn my-2 my-sm-0" type="submit">
                            <i className="fas fa-search"></i></button>
                        <input class="form-control mr-sm-2" type="search" placeholder="Search for books.." aria-label="Search" />

                    </form>
                </div>


                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" >Login/Register</a>
                    </li>
                </ul>

            </nav>



        )
    }

}

export default Nav;