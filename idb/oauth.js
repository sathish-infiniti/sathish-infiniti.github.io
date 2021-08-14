function onSignIn(googleUser) {

    var profile = googleUser.getBasicProfile();
    var uname = profile.getName();
    var umail = profile.getEmail();
    var uimg = profile.getImageUrl()

    var splitmail = umail;
    var mailword = splitmail.substring(0, splitmail.lastIndexOf("@"));

    database.ref("/users/"+mailword+"/umail").set(umail);
    database.ref("/users/"+mailword+"/uname").set(uname);
    database.ref("/users/"+mailword+"/upass").set(uimg);

    console.log(" User successfully created! .. Try Login ");

    window.location.href = 'index.html';
    
  }