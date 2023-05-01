document.addEventListener('DOMContentLoaded', function() {

    var insertBtn = document.getElementById("input");

    insertBtn.addEventListener("click", function() {
        var resultComponent = document.getElementById("results");
        
        const text = document.getElementById
        ('textInput').value; // 값 불러오기 안 됨
            resultComponent.innerText = ":: 공지 :: \n" + text;
    });


    

    
});