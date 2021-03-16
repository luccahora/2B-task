import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAck6oGNCs7bsWWXcjzXwytGHsn_Nz8Co0",
  authDomain: "crud-react-98454.firebaseapp.com",
  databaseURL: "https://crud-react-98454-default-rtdb.firebaseio.com",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();


