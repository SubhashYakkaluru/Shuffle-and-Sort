

var points = [{ "val": 1, "color": "#2B8EAD" }, { "val": 2, "color": "#6F98A8" }, { "val": 3, "color": "#BFBFBF" }, { "val": 4, "color": "#6F98A8" }, { "val": 5, "color": "#2F454E" },
{ "val": 6, "color": "#72C3DC" }, { "val": 7, "color": "#BFBFBF" }, { "val": 8, "color": "#6F98A8" }, { "val": 9, "color": "#2B8EAD" }]
loadData(points)
document.getElementById('shuffle').onclick = shuffle_click;
document.getElementById('sort').onclick = sort_click;

function shuffle_click() {
    points.sort(function (a, b) { return 0.5 - Math.random() });
    if (x.matches) {
        mobileView(points)
    } else {
        loadData(points)
    }
}

function sort_click() {
    points.sort(function (a, b) { return a["val"] - b["val"] });
    if (x.matches) {
        mobileView(points)
    } else {
        loadData(points)
    }
}

function loadData(points) {
    document.querySelectorAll(".grid-item").forEach(el => el.remove());
    document.querySelectorAll(".table-row").forEach(el => el.remove());
    var container = document.getElementById("grid-container");
    for (var i = 0; i < points.length; i++) {
        var cell = document.createElement("div");
        cell.innerHTML = points[i]["val"];
        cell.className = "grid-item";
        cell.style.backgroundColor = points[i]["color"]
        container.appendChild(cell);
    }
}

function mobileView(points) {
    document.querySelectorAll(".grid-item").forEach(el => el.remove());
    document.querySelectorAll(".table-row").forEach(el => el.remove());
    var container = document.getElementById("grid-container");
    for (var i = 0; i < points.length; i++) {
        var row = document.createElement("div");
        row.className = "table-row";
        container.appendChild(row);
        var cell = document.createElement("div");
        cell.className = "table-cell";
        cell.style.backgroundColor = points[i]["color"]
        row.appendChild(cell);
        var cell = document.createElement("div");
        cell.innerHTML = points[i].val;
        cell.className = "table-cell";
        row.appendChild(cell);
    }
}

var x = window.matchMedia("(max-width: 480px)")
function myFunction(x) {
    if (x.matches) {
        mobileView(points)
    } else {
        loadData(points)
    }
} 
myFunction(x)
x.addListener(myFunction) 