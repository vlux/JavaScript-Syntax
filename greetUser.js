function greetUser(){
    if(navigator.cookieEnabled)        //如果支持cookie
        userName = readCookie("irock_username");
    if(userName)
        alert("Hello " + userName + ", I Missed you.");
    else
        alert("Hello,I am your pet.");
}

function touchRock(){
    if(userName)
        alert("I like the attention, " + userName + ". Thank you.");
    else{
        userName = prompt("What is your name?", "Enter your name here.");
        if(userName){
            alert("It is good to meet you, " + userName + ".");

            if(navigator.cookieEnabled)
                writeCookie("irock_name", userName, 5 * 365);
            else
                alert("Sorry.Cookies aren't supported in your browser.");
        }
    }
    document.getElementById("rockImg").src = "rock_happy.png";
    setTimeout("document.getElementById("rockIng").src = 'rock.png';", 5 * 60 * 1000);
}
