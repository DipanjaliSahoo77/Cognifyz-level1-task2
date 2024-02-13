// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'C') {
            string = ""
            document.querySelector('input').value = string;
        } else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
var currentTime = new Date();
var currentHour = currentTime.getHours();

var greetingMessage;

if (currentHour < 12) {
    greetingMessage = "Good morning!";
} else if (currentHour < 18) {
    greetingMessage = "Good afternoon!";
} else {
    greetingMessage = "Good evening!";
}

alert(greetingMessage);
document.getElementById('myButton').onclick = function() {
    var button = document.getElementById('myButton');
    var currentColor = button.style.backgroundColor;
    var newColor = currentColor === 'black' ? 'purple' : 'black';
    button.style.backgroundColor = newColor;
};