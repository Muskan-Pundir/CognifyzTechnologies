const colorButton = document.getElementById('colorButton');
const colors = ['red' , 'blue' ,'yellow' , 'green' , 'purple' , 'orange', 'black', 'lavender'];
 //array of colors

colorButton.addEventListener('click', () => {
    //get a random index to select a color
    const randomIndex = Math.floor(Math.random() * colors.length);
// change the button color to the random  selected a color
    colorButton.style.backgroundColor= colors[randomIndex];
});
function updateGreetingAndTime(){
const currentDate = new Date();
const currentHour = currentDate.getHours();

let greeting;

if(currentHour < 12){
    greeting = 'Good Morning';
}
else if (currentHour < 18){
    greeting = 'Good AfterNoon';
}
else{
    greeting = 'Good Evening';
}
const greetingMsg = document.getElementById('greetingmsg');
greetingMsg.innerText = greeting;

const currentTime = document.getElementById('currentTime');
currentTime.innerText = 'current time: ' + currentDate.toLocaleTimeString();}

//initial call to update the greeting message and current time 

updateGreetingAndTime();

//update the greeting message and current time every second 
setInterval(updateGreetingAndTime, 1000);  //1000 millisec = second
alert(greeting);

// Alert Greeting Message
function showGreeting(){
const currentDate = new Date();
const currentHour = currentDate.getHours();

let greeting;

if(currentHour < 12){
    greeting = 'Good Morning';
}
else if (currentHour < 18){
    greeting = 'Good AfterNoon';
}
else{
    greeting = 'Good Evening';
}

alert(greeting);}


 // calculate

 const num1Input = document.getElementById('number1');
 const num2Input = document.getElementById('number2');

 //add onchange event listeners to the input fields
 num1Input.addEventListener ('change', calculateSum);
 num2Input.addEventListener ('change', calculateSum);
 
function calculateSum(){
    //retrieve the values from the input fields and parse them as floating point numbers
    const num1 = parseFloat(num1Inputnum1Input.value) || 0;
    const num2 = parseFloat(num2Inputnum1Input.value) || 0;

    //calculATE the sum of the two numbers

    const sum = num1 + num2;

    document.getElementById('result').innerText = 'Result:' +sum;
}