import React from 'react';
import fire from '../utils/api';



class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };

    }

    componentDidMount() {

        let booksRef = fire.database().ref('Books');
        booksRef.on('value', snap => {
            let books = snap.val();
            let newState = [];
            for (let book in books) {
                console.log(books[book]['Img'])
                newState.push({
                    img: books[book]['Img'],
                    title: books[book]['Title'],
                    description: books[book]['Description'],
                    price: `${books[book]['Price']},-`
                });
            }

            this.setState({
                books: newState
            });

        });
    }



    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col">
                        {this.state.books.map((book) => {
                            return (
                                <div className="card" key={book.title}>
                                    <img className="card-img-top img-fluid" src={book.img} alt="Card image cap"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{book.title}</h5>
                                        <p className="card-text">{book.description}</p>
                                        <p className="card-text">{book.price}</p>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
            </div>

        )

    }

}

export default Books;