"use strict";

function showLoader(show) {
    let loader = document.querySelector('#loader');
    if (show) {
        loader.classList.remove("hide");
    } else {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 2600)
    }
}

showLoader(false);

/*
function pageChange() {
    let page = "loader";
    if (location.hash) {
        page = location.hash.slice(1);
    }
    showPage(index); */