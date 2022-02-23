let areaNumbers = document.querySelector('.area-numbers');

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        areaNumbers.innerHTML += `<div class= "box three">${i}</div>`
    } else if (i % 5 == 0) {
        areaNumbers.innerHTML += `<div class= "box five">${i}</div>`
    } else if (i % 5 == 0 && i % 3 == 0) {
        areaNumbers.innerHTML += `<div class= "box both">${i}</div>`
    } else {
    areaNumbers.innerHTML += `<div class= "box">${i}</div>`
    }
}