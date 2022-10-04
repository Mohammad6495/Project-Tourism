
function showMenu() {
    var menu = document.getElementById("menu");
    var close = document.querySelector(".show-icon-close");
    var bars = document.querySelector(".show-icon-bars");

    if (menu.className === "header-menu") {
        menu.className += " show";
        close.style.display = "inline-block";
        bars.style.display = "none";
    } else {
        menu.className = "header-menu";
        close.style.display = "none";
        bars.style.display = "inline-block";
    }

}

document.querySelector(".search-item").addEventListener("click", function () {
    var search = document.querySelector(".form-search");
    var item = document.querySelector(".itemfa");
    var close = document.querySelector(".closefa");
    search.style.display = "block";
    item.style.display = "none";
    close.style.display = "inline-block";

});
document.querySelector(".search-close-item").addEventListener("click", function () {
    var search = document.querySelector(".form-search");
    var item = document.querySelector(".itemfa");
    var close = document.querySelector(".closefa");
    search.style.display = "none"
    item.style.display = "inline-block";
    close.style.display = "none";

});