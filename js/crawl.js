


import axios from 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js';
import cherrio from 'https://cdnjs.cloudflare.com/ajax/libs/cheerio/0.22.0/lib/cheerio.js';
import iconv from 'https://cdn.jsdelivr.net/npm/iconv-lite@0.6.3/lib/index.min.js';


function crawller() {
let data = ""

axios({
    // 크롤링을 원하는 페이지 URL
    url: "https://www.jejunu.ac.kr/main",
    encoding: null,
    method: "GET",
    responseType: "arraybuffer"
  })
    // 성공했을 경우
    .then((response) => {
  
  
      const contents = iconv.decode(response.data, 'utf-8').toString();
      const $ = cherrio.load(contents);
  
  
  
     
      for(let i = 0; i < 5; i++) {
        data += $("#content > div.article.content_bottom > div.content_bottom_left > div.content_bottom_left_right > div.board > div.board_list > ul:nth-child(6) > li:nth-child("
        .concat((i+1),") > a")).text();
  
        data+="\n";
      }
  
      console.log(data);
    })
    // 실패했을 경우
    .catch((error) => {
      console.error(error);
    });


    return data;


}