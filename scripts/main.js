let myImage = document.querySelector('img');

myImage.onclick = function charge(){
  let mySrc = myImage.getAttribute('src');

  if(mySrc === 'images/logo.png') {
    myImage.setAttribute ('src', 'images/logo2.png');
  } else {
    myImage.setAttribute ('src', 'images/logo.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'CT is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name')
  myHeading.textContent = 'CT is cool, ' + storedName
}

myButton.onclick = function(){
  setUserName();
}