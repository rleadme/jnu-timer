document.addEventListener('DOMContentLoaded', function() {

    var dateBtn = document.getElementById("date");

    dateBtn.addEventListener("click", function() {
    var dateComponent = document.getElementById
    ("time");
    
    var date = new Date();
    
    const text = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();

    dateComponent.innerText = ":: 현재 시각 :: \n" + text;
});



} )
