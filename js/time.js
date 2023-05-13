const clock = document.querySelector("#clock");
const dateForUser = clock.querySelector(".date");
const userTime = clock.querySelector(".userDate input");
const button = clock.querySelector(".userDate button");

let countdownInterval;  // 카운트다운 interval을 저장하는 변수

const storedValue  = localStorage.getItem("userInputTime"); // 저장한 값 불러오기

if ( storedValue ){
    const preUserValue = new Date (storedValue);
    dateClock(preUserValue);
} // 입력했던 값이 존재하면 그 값으로 카운트다운 시작


function userInputValue(){
    const userInputTime = userTime.value; // 사용자가 입력한 값

    const preUserValue = new Date(
        parseInt(userInputTime.slice(0,4)),
        parseInt(userInputTime.slice(4,6)) - 1 ,
        parseInt(userInputTime.slice(6,8)),
        parseInt(userInputTime.slice(8,10)),
        parseInt(userInputTime.slice(10,12)),
    ); //사용자 입력 값에 대한 시간

    dateClock(preUserValue);
    localStorage.setItem("userInputTime", preUserValue); // 사용자가 입력한 값을 저장
}

function dateClock(preUserValue){
    function showDate() {
        const currentTime = new Date();
        const date = preUserValue - currentTime;

        const days = Math.floor(date / (1000 * 60 * 60 * 24));
        const hours = Math.floor((date / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((date / (1000 * 60)) % 60);
        const sec = Math.floor(date / 1000 % 60);

        dateForUser.innerText = `${days}일 ${hours}시간 ${mins}분 ${sec}초 `
    }

    clearInterval(countdownInterval) //전 시간이 존재하면 삭제

    showDate(); // 바로 업데이트
    countdownInterval = setInterval(showDate, 1000); // 재시작

}

button.addEventListener("click", userInputValue);