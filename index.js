const flick = document.querySelectorAll(".floor span");

// random 숫자 리스트 만들기
function genRandomNum() {
  const num1 = Math.floor(Math.random() * 40);
  const num2 = Math.floor(Math.random() * 40);
  const num3 = Math.floor(Math.random() * 40);
  const randomNumbers = [num1, num2, num3];
  return randomNumbers;
}


// span list 중 선택
function chooseAnimated() {
  span1.classList.add("animatedWindow");
  span2.classList.add("animatedWindow");
  span3.classList.add("animatedWindow");
}

// classname 제거
function removeAnimated() {
  span1.classList.remove("animatedWindow");
  span2.classList.remove("animatedWindow");
  span3.classList.remove("animatedWindow");
}



// 1초마다 함수 반복
const randomNumbers = genRandomNum();
const span1 = flick[randomNumbers[0]];
const span2 = flick[randomNumbers[1]];
const span3 = flick[randomNumbers[2]];
setInterval(chooseAnimated, 1000);
setTimeout(function run() {
  removeAnimated();
  setTimeout(run, 1000);
}, 1000);