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
        },
        success: function(stringResponse) {
            response = JSON.parse(stringResponse);
            if (response.Message === "Error") {
                $(".error.logIn").css("display", "block");
            }
            else if (response.Message === "Success") {
                $(".view").css("border", "1px solid lightgreen");
                Home.getInformation();
                $(".firstView").animate({
                    right: '1000px'
                }, "slow", function () { $(".firstView").hide(); $(".secondView").show().animate({ left: '6px' }); });

            }
        }

    });

}

//variables defined for account creation

Home.createAccount = function() {

    var username;
    var password;
    var email;
    var repeatEmail;

    var username = $(".create.username").val();
    var password = $(".create.password").val();
    var email = $(".create.email").val();
    var repeatEmail = $(".create.repeatEmail").val();

    $.ajax({
        url: "Home/CreateAccount",
        data: {
            "Username": username,
            "Password": password,
            "EmailAdd": email,
            "EmailCon": repeatEmail
        }
    }

)};

//functions called

$(document).ready(function() {

    $(".loginButton").click(function() {
            Home.logIn()
        });
    $(".createAccountButton").click(function()
        {
            Home.createAccount()
        });
  
});