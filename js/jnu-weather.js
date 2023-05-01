// 아라캠퍼스 위도 경도
const araCampus = {
  latitude: "33.459574223653",
  longitude: "126.56120234738",
};

// 사라캠퍼스 위도 경도
const saraCampus = {
  latitude: "33.513687955789",
  longitude: "126.55344224039",
};
// 첨단캠퍼스 위도 경도
const chumdanCampus = {
  latitude: "33.447283551117",
  longitude: "126.56780871743",
};

const apiKey = "f181229e97e69a787747beeffa6a3a37";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${araCampus.latitude}&lon=${araCampus.longitude}&appid=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    console.log("현재온도 : " + (data.main.temp - 273.15));
    console.log("현재습도 : " + data.main.humidity);
    console.log("날씨 : " + data.weather[0].main);
    console.log("상세날씨설명 : " + data.weather[0].description);
    // console.log("날씨 이미지 : " + data.weather[0].icon);
    console.log("바람   : " + data.wind.speed);
    console.log("나라   : " + data.sys.country);
    console.log("도시이름  : " + data.name);
    console.log("구름  : " + data.clouds.all + "%");
  });
