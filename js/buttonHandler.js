import {crawl} from "./crawl.js";

let data = "";



document.addEventListener('DOMContentLoaded', function() {

    var insertBtn = document.getElementById("input");
    var crawlBtn = document.getElementById("get");

    insertBtn.addEventListener("click", function() {
        var resultComponent = document.getElementById("results");
        
        const text = document.getElementById
        ('textInput').value; // 값 불러오기 안 됨
            //resultComponent.innerText = ":: 공지 :: \n" + text;

            resultComponent.innerText = text;

    });


    crawlBtn.addEventListener("click", function() {
        var result = document.getElementById("info");

        const text = crawl.crawller();

        result.innerText = text;

    })


    

    
});

//임시