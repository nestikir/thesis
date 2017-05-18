var link = document.querySelector(".buttonhap");
var modal = document.querySelector(".writf");
var close = document.querySelector(".buttoncl");

link.addEventListener("click", function(){
    modal.classList.toggle("show");
})

close.addEventListener("click", function(){
    modal.classList.remove("show");
})	