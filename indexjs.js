let username;
document.getElementById("mysubmit").onclick = function() {
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `hello ${username}`
}
const decreasebtn = document.getElementById("decrease");
const increasebtn = document.getElementById("increase");
const resetbtn = document.getElementById("reset");
const countlable = document.getElementById("countlable");
let count = 0;

increasebtn.onclick = function(){
    count++
    countlable.textContent=count
}
decreasebtn.onclick = function(){
    count--
    countlable.textContent=count
}
resetbtn.onclick = function(){
    count = 0;
    countlable.textContent=count
}
