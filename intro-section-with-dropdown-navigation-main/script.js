//Features drop-down 
x = document.getElementById("features");
y = document.getElementById("suba_1");
z = document.getElementById("dropd");
//assigned variables
x.addEventListener('click',features);
function features(){
    z.setAttribute("src","./images/icon-arrow-down.svg");
    y.style.display = "grid";
}
y.addEventListener('mouseleave',features2);
function features2() {
    z.setAttribute("src","./images/icon-arrow-up.svg");
    y.style.display = "none";
}
//company drop-down
a = document.getElementById("company");
b = document.getElementById("suba_2");
c = document.getElementById("dropd2");
//assigned variables
a.addEventListener('click',company);
function company(){
    c.setAttribute("src","./images/icon-arrow-down.svg");
    b.style.display = "grid";
}
b.addEventListener('mouseleave',company2);
function company2(){
    c.setAttribute("src","./images/icon-arrow-up.svg");
    b.style.display = "none";
}
//Hamburger onclick function
hm = document.getElementsByClassName("hamburger");
hm2 = document.getElementsByClassName("hamburger2");
hmlink = document.getElementById("hlink");
