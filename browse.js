document.addEventListener('DOMContentLoaded', function () { initiate(); });

var defaultQuery = "all";
var currentQuery = defaultQuery;
var buttons;
var list;

function initiate() {
    buttons = document.getElementById("buttons").children;
    list = document.getElementById("neverGonnaGiveYouUp").children;

    render(defaultQuery);
}

function all_() {
    render("all");
}

function spt() {
    if (currentQuery == "spt") {
        render("all")
        return;
    }
    render("spt");
}

function eng() {
    if (currentQuery == "eng") {
        render("all")
        return;
    }
    render("eng");
}

function com() {
    if (currentQuery == "com") {
        render("all")
        return;
    }
    render("com");
}

function art() {
    if (currentQuery == "art") {
        render("all")
        return;
    }
    render("art");
}

function render(query = "") {

    currentQuery = query;

    if (query == "all") {
        for (var i = 0; i < list.length; i++) {
            list[i].style.display = "block";
        }
    }
    else {
        for (var i = 0; i < list.length; i++) {
            if (!list[i].classList.contains(query)) {
                list[i].style.display = "none";
            }
            else {
                list[i].style.display = "block";
            }
        }
    }

    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("highlight")) {
            buttons[i].classList.remove("highlight");
        }
        if (buttons[i].classList.contains(query)) {
            buttons[i].classList.add("highlight");
        }
    }
}
