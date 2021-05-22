var trollmeter = 1;
document.getElementById("showtrollm").innerHTML = trollmeter;
var rainInt = setInterval(rain, 10);

function rain() {
    var img = document.getElementById("img2").lastChild;
    var clonedimg = img.cloneNode(true);
    document.getElementById("img1").appendChild(clonedimg);
    trollmeter += 1;
    document.getElementById("showtrollm").innerHTML = trollmeter;
}