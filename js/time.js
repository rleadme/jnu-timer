const clock = document.querySelector("#clock");
const dateForUser = clock.querySelector(".date");
const time = clock.querySelector(".userDate");

//const timeYears = time.querySelector(".years input");
const timeMonths = time.querySelector(".month input");
const timeDays = time.querySelector(".days input");
const timeHours = time.querySelector(".hours input");
const timeMins = time.querySelector(".min input");

const button = clock.querySelector(".userDate button");

let countdownInterval;  // 카운트다운 interval을 저장하는 변수

const storedValue  = localStorage.getItem("userInputTime"); // 저장한 값 불러오기

if ( storedValue ){
    const preUserValue = new Date (storedValue);
    dateClock(preUserValue);
} // 입력했던 값이 존재하면 그 값으로 카운트다운 시작

function userInputValue(){

    const preUserValue = new Date(
        parseInt(timeYears.value),
        parseInt(timeMonths.value) - 1 ,
        parseInt(timeDays.value),
        parseInt(timeHours.value),
        parseInt(timeMins.value)
    ); //사용자 입력 값에 대한 시간

    dateClock(preUserValue);
    localStorage.setItem("userInputTime", preUserValue); // 사용자가 입력한 값을 저장
    
}

function dateClock(preUserValue){
    function showDate() {
        const currentTime = new Date();
        const date = preUserValue - currentTime;

        // onst years = math.floor(date / (1000 * 60 * 60 * 24 * 365));
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