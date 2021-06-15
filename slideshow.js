var current = 0;
showSlides();

function showSlides() {
    var slides = document.querySelectorAll("#slides > img");
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    current++;
    if(current > slides.length)
    current = 1;
    slides[current - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

var p;
function init() {
    p = document.getElementById("p");
    p.addEventListener("mouseover", over);
    p.addEventListener("mouseout", out);
}
function over() {
    p.style.backgroundColor="floralwhite";
}
function out() {
    p.style.backgroundColor="aliceblue";
}

function query1() {
    var ret = confirm("뜨뜨뜨뜨의 방송국으로 이동하시겠습니까?");
    return ret;
}
function query2() {
    var ret = confirm("뜨뜨뜨뜨의 유튜브로 이동하시겠습니까?");
    return ret;
}
function query3() {
    var ret = confirm("뜨뜨뜨뜨의 인스타그램으로 이동하시겠습니까?");
    return ret;
}

function hideMenu() {
    alert("오른쪽 클릭 하지마세여 ㅎㅎ");
    return false;
}
document.oncontextmenu=hideMenu;

function change() {
    var p = document.getElementById("kangwon");
    p.innerHTML= "<img src='kangwonuniv.jpg'>컴퓨터공학과";
}