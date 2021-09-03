const first_flick = document.querySelectorAll(".building-first__floor span");
const third_flick = document.querySelectorAll(".building-third__floor span");
const fourth_flick = document.querySelectorAll(".building-fourth__floor span");
const fifth_flick = document.querySelectorAll(".building-fifth__floor span");
const seventh_flick = document.querySelectorAll(".building-seventh__floor span");

// random 숫자 리스트 만들기
function genRandomNum(num, range) {
  var i = 0;
  var randomNumbers = [];
  while(i < num) {
    randomNumbers.push(Math.floor(Math.random() * range));
    i++;
  }
  return randomNumbers;
}

// class 확인 및 제거, 추가 작업 --- 이게 최선인가?
function checkClass(m, n, obj) {
  const arr = Array.from(obj);
  const randomNumbers = genRandomNum(m, n);
  for(let i = 0; i < n; i++) {
    if (arr[i].classList.contains("animatedWindow") === true) {
      arr[i].classList.remove("animatedWindow");
    } else {
      if (randomNumbers.includes(i)) {
        arr[i].classList.add("animatedWindow");
      } else {
        continue;
      }
    }
  }
}

function windowFunction() {
  checkClass(4, 40, first_flick);
  checkClass(1, 8, third_flick);
  checkClass(1, 12, fourth_flick);
  checkClass(5, 12, fifth_flick);
  checkClass(10, 30, seventh_flick);
}

// 1초마다 함수 반복
setInterval(windowFunction, 1000);
