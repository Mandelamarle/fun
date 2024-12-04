/* This function is for YouTube subscribe button of changing the innerHTML and changing the background Color once the User clicks on Subscribed
function subscribe(){
const subscribeButtonElement = document.querySelector('.js-subscribe-button');
let inner = subscribeButtonElement.innerHTML; */


/* This code first checks if the innerHTML === Subscribe, then changes the innerHTML to Subscribed and adds a css-background class.

if (inner === 'Subscribe'){
subscribeButtonElement.innerHTML = 'Subscribed';
subscribeButtonElement.classList.add('css-background');
} else {
  subscribeButtonElement.innerHTML = 'Subscribe';
  subscribeButtonElement.classList.remove('css-background');
} */

/* This code does the same thing as above but with different syntax, it first checks if innerHTML === to Subscribe and also checks if the subscribe button element contains the class css-button, then it changes the innHTML to Subscribed and adds a class of css-background to it else the vice versa

if (inner === 'Subscribe' && subscribeButtonElement.classList.contains('css-button')){
  subscribeButtonElement.innerHTML = 'Subscribed';
  subscribeButtonElement.classList.add('css-background');
} else {
  subscribeButtonElement.innerHTML = 'Subscribe';
  subscribeButtonElement.classList.remove('css-background');
}

} */

function change(){
  const buttonElement = document.querySelector('.js-button')
  if (buttonElement.innerHTML === "Let's Start") {
      buttonElement.innerHTML = 'Hello';
  } else if (buttonElement.innerHTML === 'Hello'){
    buttonElement.innerHTML = "I'm Mandela"; 
  } else if (buttonElement.innerHTML === "I'm Mandela"){
    buttonElement.innerHTML = 'AKA Joe Black';
  } else if (buttonElement.innerHTML === 'AKA Joe Black'){
    buttonElement.innerHTML = 'How can I help you today';
  } else if (buttonElement.innerHTML === 'How can I help you today'){
    let userInput = prompt('Ask me something');
    alert('Wait a moment for your answer');
  }

}
