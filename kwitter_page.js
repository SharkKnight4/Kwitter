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
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");
console.log(username);
console.log(roomname);
function send() {
      msg = document.getElementById("message").value;
      firebase.database().ref(roomname).push({
            name: username,
            message: msg,
            like: 0
      });

}
function getData() {
      firebase.database().ref("/" + roomname).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(message_data);
                        console.log(firebase_message_id);
                        name1 = message_data['name'];
                        message = message_data['message'];
                        likes = message_data['like'];
                        name2 = "<h4>" + name1 + "<img class='user_tick' src='tick.png'></h4>";
                        message1 = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updatelike(this.id)'>";
                        liketext = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + likes + "</span></button>";
                        row = name2 + message1 + like_button + liketext;
                        document.getElementById("output").innerHTML += row;

                        //End code
                  }
            });
      });
}
getData();
function updatelike(message_id) {
      button_id = message_id;
      console.log(button_id);

      lik = document.getElementById(button_id).value;
      console.log(lik);
      likes2 = Number(lik) + 1;
      console.log(likes2);
      firebase.database().ref(roomname).child(message_id).update({
            like: likes2
      });
}