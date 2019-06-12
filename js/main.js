// get Dom elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

//show time
function showTime(){
  let today = new Date(),
   hour = today.getHours(),
   min = today.getMinutes(),
   sec = today.getSeconds();


//output time

time.innerHTML = `${hour}<span>:</span>${addZeros(min)}<span>:</span>${addZeros(sec)}`;

setTimeout(showTime,1000);
}
//add Zeros

function addZeros(n){
  return(parseInt(n,10)<10 ? "0" : "") + n;
}


//set backgrounds and greetings
function setBgGreet(){
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12){
    //Morning
    document.body.classList.add('rzeszow_morning')
    greeting.textContent = "Good Morning";

  }else if (hour < 18){
    //afternoon
    document.body.classList.add('rzeszow_afternoon')
    greeting.textContent = "Good Afternoon";
  }else{
    //evening
    document.body.classList.add('rzeszow_evening')
    greeting.textContent = "Good Evening";
  }
}

//get Name

function getName(){
  if(localStorage.getItem('name')===null){
    name.textContent = "[Wpisz Imię]";
  }else{
    name.textContent = localStorage.getItem('name');
  }
}

//set name

function setName(e){
  if(e.type = "keypress"){
    //make sure enter is pressed
    if(e.which==13 || e.keyCode == 13){
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  }else{
    localStorage.setItem("name", e.target.innerText);
  }
}



//get focus

function getFocus(){
  if(localStorage.getItem('focus')===null){
    focus.textContent = "[Wpisz cel na dzisiaj]";
  }else{
    focus.textContent = localStorage.getItem('focus');
  }
}
//set focus

function setFocus(e){
  if(e.type = "keypress"){
    //make sure enter is pressed
    if(e.which==13 || e.keyCode == 13){
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  }else{
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//run Set background and greetings
setBgGreet();
//run
showTime();
getName();
getFocus();
