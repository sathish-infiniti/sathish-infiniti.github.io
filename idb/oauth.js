
function onSignIn(googleUser) 
{

    var profile = googleUser.getBasicProfile();
    var uname = profile.getName();
    var umail = profile.getEmail();
    var uimg = profile.getImageUrl();

    var splitmail = umail;
    var mailword = splitmail.substring(0, splitmail.lastIndexOf("@"));

    database.ref("/users/"+mailword+"/umail").set(umail);
    database.ref("/users/"+mailword+"/uname").set(uname);
    database.ref("/users/"+mailword+"/uimg").set(uimg);


    // if (typeof(Storage) !== "undefined") 
    // {
        localStorage.setItem("umail", umail);
        localStorage.setItem("uname", uname);
        localStorage.setItem("uimg", uimg);
    // } 
    // else 
    // {
      // alert("Browser Not Supported");
    // }

        window.location.href = 'index.html';
    
}