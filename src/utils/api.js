import firebase from 'firebase';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyABKiV43hUREQvcyXPzMwS8Zf_pDnH5BiI",
    authDomain: "unibooks-2d9a7.firebaseapp.com",
    databaseURL: "https://unibooks-2d9a7.firebaseio.com",
    projectId: "unibooks-2d9a7",
    storageBucket: "unibooks-2d9a7.appspot.com",
    messagingSenderId: "1073903001819"
};


var fire = firebase.initializeApp(config);

/** 

let booksRef = fire.database().ref('Books/1');
booksRef.on('value', snap => {

    const getTitle = snap.val()['Title'];
    console.log('Utenfor funksjon: ' + getTitle);
});
*/

/**     let booksRef = fire.database().ref(`Books/${id}`);
    booksRef.on('value', snap => {
        return snap.val()['Title'];
    }); */


/**
function fetchBooks(id) {

var bookRef = fire.database().ref(`Books/${id}`);
bookRef.on('value', snapshot => {
    snapshot.val()['Title'];
});

}





export function writeBookData(id, title, author, description, price) {
fire.database().ref('Books/' + id).set(
    {
        title: title,
        author: author,
        description: description,
        price: price
    }
);
}



*/
export default fire;



















