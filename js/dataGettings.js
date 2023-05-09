import request from 'request';
import { load } from 'cheerio';
const url = "https://www.jejunu.ac.kr/ara/recruit";

request(url, (error, response, body) => {
  if (error) throw error;
  let $ = load(body);
  try{
      var sum=0;
      var size=0;
      $('#board > table > tbody > tr:nth-child(2) > td.border_bottom.subject > a').each(function(index,elem){
        var rate_text = $(this).text(); //해당 태그의 text부분만 잘라오기
        var filtered_rate_text = rate_text.substring(0,rate_text.length-1); //'%'자르기
        var rate = parseFloat(filtered_rate_text); //문자열 형태의 정답률을 float형으로 변환
        console.log(rate);
        sum+=rate;
        size += $(this).length;
      });
      console.log('Size=' +size);
      console.log('Average Correct Percentage=' +(sum/size).toFixed(3)+'%');
  }
  catch(error){
      console.error(error);
  }
});