var Home = {};

//variables defined for logIn

Home.logIn = function() {

    var username;
    var password;

    var username = $(".logIn.username").val();
    var password = $(".logIn.password").val();

    $.ajax({
        url: "Home/Login",
        data: {
            "Username": username,
            "Password": password
        }
}

//variables defined for account creation
Home.createAccount = function() {

    var username;
    var password;
    var email;
    var reEmail;

    var username = $(".create.username").val();
    var password = $(".create.password").val();
    var email = $(".create.email").val();
    var reEmail = $(".create.reEmail").val();

    $.ajax({
        url: "Home/CreateAccount",
        data: {
            "Username": username,
            "Password": password,
            "EmailAdd": email,
            "EmailCon": reEmail
        }

}

//functions called

$(document).ready(function () {

        $(".createButton").click(function()
        {
            Home.createAccount()
        });

        $(".logInButton").click(function () {
            Home.logIn()
        });
    });