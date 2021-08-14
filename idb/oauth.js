function onSignIn(googleUser) {

    var profile = googleUser.getBasicProfile();
    var uname = profile.getName();
    var umail = profile.getEmail();
    var uimg = profile.getImageUrl();
    //var profile = profile;
  
    var splitmail = umail;
    var mailword = splitmail.substring(0, splitmail.lastIndexOf("@"));

    database.ref("/users/"+mailword+"/umail").set(umail);
    database.ref("/users/"+mailword+"/uname").set(uname);
    database.ref("/users/"+mailword+"/uimg").set(uimg);
    //database.ref("/users/"+mailword+"/profile").set(profile);

    console.log(" User successfully created! .. Try Login ");

    if (typeof(Storage) !== "undefined") 
    {
        // Code for localStorage/sessionStorage.
        localStorage.setItem("umail", umail);
        localStorage.setItem("uname", uname);
        localStorage.setItem("uimg", uimg);
    } 
    else 
    {
        // Sorry! No Web Storage support..
        alert("Browser Not Supported");
    }

    window.location.href = 'index.html';
    
  }