let count = 0;
const button = document.getElementById("charm")
const countDisplay = document.getElementById("charm-count")
const targetClicks = 39;

button.addEventListener("click", () => {
    count++;
    
    if (count === 11) {
        button.textContent = `Ooh you finished counting the first picture! Good job <3`;
    } 

    else if (count === 20) {
        button.textContent = `SECOND PICTURE DONEEEE! COUNTING DIVA IN THE MAKING?`;
    }

    else if (count === 39) {
        button.textContent = `YOU DID IT! YOU CAN COUNT! YIPPEEEEEE!`;
    }

    else if (count > 39) {
        button.textContent = `Well you don't have to click this anymore, but you can if you want to!`;
    }

    else {
        button.textContent = `yay! more.`;
    }

  countDisplay.textContent = count;

});