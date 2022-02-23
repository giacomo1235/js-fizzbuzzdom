let areaNumbers = document.querySelector('.area-numbers');

for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        areaNumbers.innerHTML += '<div class= "box both">fizzbuzz</div>'
    }  else if (i % 3 == 0) {
        areaNumbers.innerHTML += '<div class= "box three">buzz</div>'
    } else if (i % 5 == 0) {
        areaNumbers.innerHTML += '<div class= "box five">fizz</div>'
    }  else {
    areaNumbers.innerHTML += `<div class= "box">${i}</div>`
    }
};



