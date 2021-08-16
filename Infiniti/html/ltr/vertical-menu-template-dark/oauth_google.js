function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var uname = profile.getName();
    var umail = profile.getEmail();
    var uimg = profile.getImageUrl();

    var splitmail = umail;
    var mailword = splitmail.substring(0, splitmail.lastIndexOf("@"));

    // database.ref("/users/"+mailword+"/umail").set(umail);
    // database.ref("/users/"+mailword+"/uname").set(uname);
    // database.ref("/users/"+mailword+"/uimg").set(uimg);

    // if (typeof(Storage) !== "undefined") 
    // {
        localStorage.setItem("oauth_umail", umail);
        localStorage.setItem("oauth_uname", uname);
        localStorage.setItem("oauth_uimg", uimg);

        console.log(uname);
        console.log(umail);
        console.log(uimg);

    // } 
    // else 
    // {
      // alert("Browser Not Supported");
    // }

        window.location.href = 'index.html';
}


// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//         alert("You have been signed out successfully");
//         $(".data").css("display", "none");
//         $(".g-signin2").css("display", "block");
//     });
// }