let modalbtn = document.querySelector("#modBtn"); // btn
let modalWnd = document.querySelector("#modWindow");//div modal
let closeMdl = document.querySelector(".close");

modalbtn.addEventListener("click", function(){
    modalWnd.style.display = "block";
});
closeMdl.addEventListener("click", function(){
     modalWnd.style.display = "none";
});
window.addEventListener("click", function(event){
    if(event.target==modalWnd)
    modalWnd.style.display = "none";
});