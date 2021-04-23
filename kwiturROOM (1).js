var firebaseConfig = {
  apiKey: "AIzaSyBZCmJ1wE-MZbe7BYx_4pwv-IL-CrOAUJE",
  authDomain: "kwiturproject.firebaseapp.com",
  databaseURL: "https://kwiturproject-default-rtdb.firebaseio.com",
  projectId: "kwiturproject",
  storageBucket: "kwiturproject.appspot.com",
  messagingSenderId: "1017785650259",
  appId: "1:1017785650259:web:5b2b7a3c273d17c0d04aa6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("User_name", username);
document.getElementById("User_name").innerHTML = "Hi there "+username+"!!";

var emptyUser = "";

function addRoom() {
  var room = document.getElementById("roomName").value;
  firebase.database().ref("/").child(room).update({
    purpose: "undefined room name"
  });
  localStorage.setItem("roomName", room);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(snapshot) {childKey = 
childSnapshot.key;

//code start
var RoomNames = childKey;
var roomRow = "<div class='room_name' id='room_name' onclick='redirectRooms(this.id)'>#"+RoomNames+"</div><hr>";
document.getElementById("output").innerHTML += roomRow;
//code end
})})}
getData()

function redirectRooms(name) {
  localStorage.setItem("room_name", name);
  window.location = "kwitur.page.html"
}

function logout() {
  localStorage.setItem("username", emptyUser);
  window.location = "kwitur (1).html";
}