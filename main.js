function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
     ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

var dataBase = {
    wine: 10,
    peanutButter: 4.5,
    bread: 1,
    flour: 3,
    milk: 2,
    oil: 1.5,
    ketchup: 3.2,
    salt: 0.45,
    water: 1,
    chips: 2,
}









