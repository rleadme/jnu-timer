

let data = "";



document.addEventListener('DOMContentLoaded', function() {

var getButton = document.getElementById("get");
  getButton.addEventListener("click", function() {







  var insertBtn = document.getElementById("input");

  insertBtn.addEventListener("click", function() {
      var resultComponent = document.getElementById("info");
      
      resultComponent.innerText = ":: 공지 :: \n" + data;
  });
}
)})
  
  