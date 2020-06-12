$('document').ready(function(){
    console.log("Ready");
    console.log("Created by Limas, Fixed by Ron");
});

function checkName()
{
    var name = document.getElementById("username");

    if(name.value.length < 5)
    {
        name.setCustomValidity("Username must be at least 5 characters long!");
    }
    else
    {
        name.setCustomValidity("");
    }
}

function checkPassword()
{
    var pass = document.getElementById("password");

    if(pass.value.length < 7)
    {
        pass.setCustomValidity("Password must be at least 7 characters long!");
    }
    else
    {
        pass.setCustomValidity("");
    }
}

function checkConfirm()
{
    var conf = document.getElementById("confirm");
    var pass = document.getElementById("password");

    if(conf.value != pass.value)
    {
        conf.setCustomValidity("Password doesn't match");
    }
    else
    {
        conf.setCustomValidity("");
    }
}

function checkEmail()
{
    var email = document.getElementById("email");

    if( email.value.startsWith("@") || email.value.endsWith("@") || 
        email.value.startsWith(".") || email.value.endsWith(".") || 
        email.value.startsWith(" ") || email.value.endsWith(" ") || email.value.includes(" ") || 
        !isNaN(email.value.charAt(0)) || !isNaN(email.value.charAt(email.value.length-1)) || 
        !isNaN(email.value.charAt(email.value.indexOf("@")+1)))
        {
            email.setCustomValidity("Invalid email format.");
        }
    else
    {
        email.setCustomValidity("");
    }
}

function checkDOB()
{
    var dob = document.getElementById("dob");

    // get today's date with ISO String and split by T then get first index after split => yyyy-mm-dd
    var today = new Date();

    if(dob.value > today.toISOString().split("T")[0])
    {
        dob.setCustomValidity("Date further than today (" + today.toISOString().split("T")[0] +  ") is not allowed");
    }
    else if(today.getFullYear() - dob.value.split("-")[0] < 18)
    {
        dob.setCustomValidity("You must be at least 18 years old");
    }
    else
    {
        dob.setCustomValidity("");
    }
}