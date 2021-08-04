
var firebaseConfig = {
  apiKey: "AIzaSyC0gM97EI1PZVf2HDVsCdNtEJsHQrZJ6xk",
  authDomain: "kwitter-e7704.firebaseapp.com",
  databaseURL: "https://kwitter-e7704-default-rtdb.firebaseio.com",
  projectId: "kwitter-e7704",
  storageBucket: "kwitter-e7704.appspot.com",
  messagingSenderId: "472026456665",
  appId: "1:472026456665:web:42848f3460c19619b30748",
  measurementId: "G-55Q3H4VX6E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + " !";
function addroom() {
  roomname = document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomname).update({
    purpose: "Adding Room Name"
  });
  localStorage.setItem("roomname", roomname);
  window.location = "kwitter_page.html";
}
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log(childKey);
      console.log(Room_names);
      row = "<div class='room_name' id = " + Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();
function redirect(name){
console.log(name);
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
}