document.getElementById("burger").onclick = function(){
    addMenu();
};

function addMenu(){
    document.querySelector(".login-button").classList.toggle("show");
};