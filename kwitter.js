
function adduser(){
    username=document.getElementById("username_goes_here").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}