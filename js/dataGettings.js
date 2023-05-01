const axios = require("axios");
const iconv = require("iconv-lite");
const cherrio = require("cheerio");

axios({
  // 크롤링을 원하는 페이지 URL
  url: "https://www.jejunu.ac.kr/ara/recruit",
  method: "GET",
})
  // 성공했을 경우
  .then((response) => {
    const contents = iconv.decode(response.data, "EUC-KR");
    const $ = cherrio.load(contents);
    const titles = $(
      "#board > table > tbody > tr:nth-child(2) > td.border_bottom.subject > a"
    ).text();
    console.log(titles);
  })
  // 실패했을 경우
  .catch((error) => {
    console.error(error);
  });

/*

    const getHtml = async() => {
        try{
            return await axios.get("");
    
        }catch (err) {
            console.error(err);
        }
    }
    
    getHtml()
      .then((html) => {
    
        const $ = cherrio.load(html.data);
        const data = $('#board > table > tbody > tr:nth-child(2) > td.border_bottom.subject > a');
        return data;
      }).then((data) => log(data));*/
