var randomNumber;
    
function playGame() {
    let numberBottons = document.getElementById("insertNumber").value;
    randomNumber = Math.floor((Math.random() * numberBottons) + 1);
    for (let i = 1; i <= numberBottons; ++i) {
        document.getElementById("buttons").innerHTML += '<button type="button" onclick="return verify(' + i + ')">Buton</button>';
    }
} 

function verify(number) {
    if (number == randomNumber) {
        alert("You Win!");
    } else {
        alert("You Lost!");
    }
}