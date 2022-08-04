var firebaseConfig = {
    apiKey: "AIzaSyAudYgCBnr2cZlGq-H4wbTj6898l5UscgI",
    authDomain: "classtest-fd412.firebaseapp.com",
    databaseURL: "https://classtest-fd412-default-rtdb.firebaseio.com",
    projectId: "classtest-fd412",
    storageBucket: "classtest-fd412.appspot.com",
    messagingSenderId: "829598251190",
    appId: "1:829598251190:web:acbd6d51cbd1c5bb958e17"
  };
  
firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       //Start code
       console.log(firebase_message_id);
       console.log(message_data);
       name - message_data['name'];
       message - message_data['message']
       like - message_data['like'];
       name_with_tag -"<h4> "+ name + "</h4>";
       message_with_tag - "<h4 class-'message_h4'>" + message +"</h4>";
Like_button - "<button class - 'btn btn-warning' id-"+firebase_message_id+" value-"+like+" onclick-'updateLike(this.id)'>LIKes :" + like +"</button>";

    row = name_with_tag + message_with_tag +like_button;
    document.getElementById("output").innerHTML += row;
       //End code
    } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })

    document.getElementById("msg").value = "";
}
function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id +message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = NUmber(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
    })
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_rame");
    window.location.replace("kwitter.html");
}