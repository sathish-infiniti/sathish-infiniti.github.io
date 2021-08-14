
 // import our functions from ourFunctions.js
  //const ourFunctions = require('./ourFunctions.js');

  // ===== Firebase configuration (start) ==== //
  let firebaseConfig = {
    // firebase config

    apiKey: "AIzaSyB7sL8TtIYi6PaMxX9mzNqnc0IHspkRXTc",
    authDomain: "infinitisathish.firebaseapp.com",
    databaseURL: "https://infinitisathish-default-rtdb.firebaseio.com",
    projectId: "infinitisathish",
    storageBucket: "infinitisathish.appspot.com",
    messagingSenderId: "1082607462635",
    appId: "1:1082607462635:web:7e4adafb9e5e314bbb36ae",
    measurementId: "G-BX4WVP5VSZ"


  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // ===== Firebase configuration (end) ==== //
  var database = firebase.database();

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var uname = profile.getName();
    var umail = profile.getEmail();
    var uimg = profile.getImageUrl()
    $("#name").text(uname);
    $("#email").text(umail);
    $("#image").attr('src', uimg);
    $(".data").css("display", "block");
    //$(".g-signin2").css("display", "none");

    var splitmail = umail;
    console.log(splitmail)
    var mailword = splitmail.substring(0, splitmail.lastIndexOf("@"));

    console.log(mailword)

    database.ref("/users/"+mailword+"/umail").set(userInput.value);
    database.ref("/users/"+mailword+"/uname").set(mailword);
    database.ref("/users/"+mailword+"/upass").set(passInput.value);

    console.log(" User successfully created! .. Try Login ");

    window.location.href = 'index.html';
    
}
console.log("out");

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}