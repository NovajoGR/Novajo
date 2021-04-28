var password="Béhé Garnaoui";
var Verify;
var count = 0 ;
while (password != Verify) {
    Verify = window.prompt("Enter password :") ;
    count++;
    if (count >= 3) {
        count = 0;
        alert("retry");
    }
}
alert("Welcome Everybody");
