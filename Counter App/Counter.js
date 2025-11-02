const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")
const resetBtn = document.getElementById("reset")
const counterH1 = document.getElementById("counter")
let counter = 0

function Increment(){
  counter++;
}

function Decrement(){
  counter--;
}

function Reset(){
  counter = 0;
}

incrementBtn.onclick = function() {
  Increment()
  counterH1.textContent = counter
}

decrementBtn.onclick = function() {
  Decrement()
  counterH1.textContent = counter
}

resetBtn.onclick = function() {
  Reset()
  counterH1.textContent = counter
}