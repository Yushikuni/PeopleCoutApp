//main javascipt functions

//initial to zero
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
//listen to clicks
document.getElementById("increment-btn").addEventListener("click", increment, false);
//increment values on button click
function increment(){
    count += 1
    countEl.innerText = count //change values on cout-el in HTML
}
//save function
document.getElementById("save-btn").addEventListener("click", save, false);
function save(){
    let coutStr = count + " - "
    saveEl.textContent += coutStr 
    count = 0
    countEl.innerText = count
}