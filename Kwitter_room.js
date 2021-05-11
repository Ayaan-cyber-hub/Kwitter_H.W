
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log(firebase_message_id);
   console.log(message_data);
   varname = message_data['name'];
   message = message_data['message'];
   like = message_data['like'];
   name_with_tag = "<h4>"+ varname +"<img class = 'user_trick' src = 'tick.png'</h4>";
   message_with_tag = "<h4> class = message_h4'>"+ message +"<h4>";
   like_button = "<button class= 'btn btn-warning' id="+firebase_message_id+"value="+like+"onclick= updatelike(this.id)'>";
   span_with_tag = "<span class= 'glyphicon glyphicon-thumps-up'>like: "+ like +"</span></button><hr>";

   console.log("Room Name - " + Room_names);
   row = "div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"<div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();
function addRoom () {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"});
   localStorage.setItem("room_name", room_name);
   window.location = "Kwitter_page.html";
}
function redirectToRoomName(name) {
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location.replace("kwitter.html");
}

function updatelike(message_id) {
   console.log("clicked on like button -"+ message_id);
   button_id = message_id;
   like = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);

   firebase.database().ref(room_name).child(message_id).update({
         like : updated_likes
   });
}