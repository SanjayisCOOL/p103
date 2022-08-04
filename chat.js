var firebaseConfig = {
    apiKey: "AIzaSyAudYgCBnr2cZlGq-H4wbTj6898l5UscgI",
    authDomain: "classtest-fd412.firebaseapp.com",
    databaseURL: "https://classtest-fd412-default-rtdb.firebaseio.com",
    projectId: "classtest-fd412",
    storageBucket: "classtest-fd412.appspot.com",
    messagingSenderId: "829598251190",
    appId: "1:829598251190:web:acbd6d51cbd1c5bb958e17"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



