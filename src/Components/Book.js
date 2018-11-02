import React from 'react';
import fire from '../utils/api';
import { NavLink } from 'react-router-dom';



class Book extends React.Component {



    render() {

        return (

            <div className="jumbotron formWrapper">
              <div className="book-title">
                <h1>Discrete Mathematics</h1>
              </div>
              <img src="https://firebasestorage.googleapis.com/v0/b/unibooks-2d9a7.appspot.com/o/discrete-mathematics-for-computing.jpg?alt=media&token=c47f1c0b-904f-4a8b-8734-09fc2f51bb39" alt="pic"/>
              <div clasName="Author">
                <p><b>Author: </b>Rod Haggerdy</p>
              </div>
              <div clasName="description">
                <p><b>Description: </b>A book about discrete mathematics</p>
              </div>
              <div clasName="price">
                <p><b>Price: </b>100kr</p>
              </div>

            </div>

        )
    }

}

export default Book;
