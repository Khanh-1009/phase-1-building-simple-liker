// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//Recognize Events - click action, when someone clicks on the heart => color
//change from &#x2661 to red, make sure DOM loaded
const userAction = document.getElementsByClassName('like-glyph')



function clickAction(){
  for (const click of userAction){
      click.addEventListener('click', userLike)
    }
  }

clickAction();
//Manipulate the DOM - update the screen shows that the heart is clicked
// reject - 
/*Display the error modal by removing the .hidden class
Display the server error message in the modal
Use setTimeout to hide the modal after 3 seconds (add the .hidden class)*/
//Communicate with the Server - 


function userLike(e){
  mimicServerCall()
  .then(() => {
  let heart = e.target

  if (heart.textContent === EMPTY_HEART){
    heart.textContent = FULL_HEART
    heart.classList.add('activated-heart')
  }
  else if (heart.textContent === FULL_HEART){
    heart.textContent = EMPTY_HEART
    heart.classList.remove('activated-heart')
  }
  })
  .catch(function(error){
    let warn = document.getElementById('modal')
    let failure = document.getElementById('modal-message')
    failure.innerHTML = error
    warn.classList.remove('hidden')
    setTimeout(() => warn.classList.add('hidden'), 3000)
  })

}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
