

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