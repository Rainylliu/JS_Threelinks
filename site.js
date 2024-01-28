document.getElementById("content1").style.display = "block";
document.getElementById("content2").style.display = "none";
document.getElementById("content3").style.display = "none";
function handleNav(param) {
    for (let index = 1; index <= 3; index++) {
        let span = document.getElementById("span" + index);
        span.classList.remove("active");

        let content = document.getElementById("content" + index);
        content.style.display = "none";
    }
    
    let selectSpan = document.getElementById("span" + param);
    selectSpan.classList.add("active");

    let selectContent = document.getElementById("content" + param);
    selectContent.style.display = "block";

}
