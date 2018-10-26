import React from 'react';




class RegisterBook extends React.Component {


    render() {
        return (

            <div className="container">

                <div className="form-group">
                    <label htmlFor="bookTitle">Title</label>
                    <input type="text" className='form-control book-form' placeholder='Book title' />

                    <div className="input-group mb-3">

                        <div className="custom-file">
                            <input type="file" className="custom-file-input" />
                            <label htmlFor="inputGroupFile" className="custom-file-label">Upload a picture of your book</label>
                        </div>
                        <div className="input-group-append">
                            <span className="input-group-text">Upload</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    // let booksRef = fire.database().ref('Books');
    //
    // var data = {
    //   Author: "Fred",
    //   Description: "test",
    //   Id: "5",
    //   img: "test",
    //   price: "50",
    //   title: "learn to masturbate with Fredrik"
    // }
    // booksRef.push(data);
    // }
}

export default RegisterBook;
