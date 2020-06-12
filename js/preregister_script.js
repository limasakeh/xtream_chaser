$('document').ready(function(){
    console.log("Ready");
});

function Process(){
    // Returns value by using .value behind (except Radio)
    var form = document.getElementById("form_register");
    let name = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var dob = document.getElementById("dob");
    var userMale = document.getElementById("userMale").checked;
    var userFemale = document.getElementById("userFemale").checked;
    var nation = document.getElementById("nation");
    
    if(name.value.length < 5)
    {
        alert("Name length must be at least 5!");
    }

    if(name.value.password < 5)
    {
        alert("Password length must be at least 5!");
    }
    var checkEmail = testEmail(email);

    if(checkEmail == false)
    {
        alert("Please check Email!");
    }
}

function testEmail(email){

    var checkAt = email.indexOf("@");
    if(checkAt == 0) return false;

    var dot = email.indexOf(".");
    if(dot == 0 || dot == email.length - 1) return false;


    var AtAmount = 0;
    for(var i = 0; i < email.length ; i++){
        if(email.charAt(i) == "@") 
        {
            AtAmount++;
        }

    }

    console.log(AtAmount);

    if(AtAmount == 1) return true;
    else return false;
}