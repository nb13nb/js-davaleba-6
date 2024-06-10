//1

var burger = document.getElementById("burger");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
});



//2

var myDiv = document.getElementById("div");
var wrapperDiv = document.createElement("div");

wrapperDiv.className = "wraper";

var img = document.createElement("img");

img.src = "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww";
img.alt = "image";

var title = document.createElement("h2");

title.style.color = 'red';
title.style.fontSize = '30px';
title.className = "title";
title.textContent = "image title";

wrapperDiv.appendChild(img);
wrapperDiv.appendChild(title);
myDiv.appendChild(wrapperDiv);


//3

var myClassDivs = document.querySelectorAll(".new");

myClassDivs.forEach(function (div) {
    var paragraph = document.createElement("p");
    paragraph.className = "text";
    paragraph.textContent = "hello";

    div.appendChild(paragraph);
});
