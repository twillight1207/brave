const flick = document.querySelectorAll(".floor span");

// random 숫자 리스트 만들기
function genRandomNum() {
  const num1 = Math.floor(Math.random() * 40);
  const num2 = Math.floor(Math.random() * 40);
  const num3 = Math.floor(Math.random() * 40);
  const randomNumbers = [num1, num2, num3];
  return randomNumbers;
}

// class 확인 및 제거, 추가 작업 --- 이게 최선인가?
function checkClass() {
  const randomNumbers = genRandomNum();
  for(let i = 0; i < 40; i++) {
    if (flick[i].classList.contains("animatedWindow") === true) {
      flick[i].classList.remove("animatedWindow");
    } else {
      if (randomNumbers.includes(i)) {
        flick[i].classList.add("animatedWindow");
      } else {
        continue;
      }
    }
  }
}

// 1초마다 함수 반복
setInterval(checkClass, 1000);
