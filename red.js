const red_window = document.querySelectorAll(".building-sixth__floor span");
const red_arr = Array.from(red_window);

function redClass(i) {
    if(i === 0) {
        red_arr[3].classList.remove("window__red");
        red_arr[i].classList.add("window__red");
    } else {
        red_arr[i-1].classList.remove("window__red");
        red_arr[i].classList.add("window__red");
    }
    
}

function redRotation(){
    setTimeout(function(){redClass(1)}, 1000);
    setTimeout(function(){redClass(2)}, 2000);
    setTimeout(function(){redClass(3)}, 3000);
    setTimeout(function(){redClass(0)}, 4000);
}

red_arr[0].classList.add("window__red");
setInterval(redRotation, 4000);