import React from 'react';
import PropTypes from 'prop-types';
import fire from '../utils/api';



function BookGrid(props) {


    return (

        <div className="container">
            <div className="row">

                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={props.img} alt="book" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <p className="card-text">{props.price}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

BookGrid.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};


class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: '',
        };

    }

    componentDidMount() {

        let booksRef = fire.database().ref('Books/1');
        booksRef.on('value', snap => {
            this.setState({
                title: snap.val()['Title'],
                description: snap.val()['Description'],
                price: `${snap.val()['Price']},-`
            });
        });
    }



    render() {

        return (

            <BookGrid
                title={this.state.title}
                description={this.state.description}
                price={this.state.price}
            />

        )

    }

}

export default Books;