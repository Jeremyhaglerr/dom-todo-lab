//cached element references
const inputElement = document.getElementById("input1")
const buttonElement = document.getElementById("submit-button")
const resetElement = document.getElementById("reset")
const listElement = document.getElementById("todo-list") 



buttonElement.addEventListener('click', function(evt) {
  const newLi = document.createElement('li')
 const inp = document.querySelector('input')
 newLi.textContent = inp.value
 if (inp.value !== ''){
   document.querySelector('ul').appendChild(newLi)
   newLi.className = "items"
   inp.value = ''
   console.log(newLi);
 }
})