let Money = localStorage.getItem("Money");
let TimesWon = 0;
let TimesLost = 0; 

let MoneyText = document.querySelector(".Money");
let TimesWonText = document.querySelector(".TimesWon");
let TimesLostText = document.querySelector(".TimesLost");

let images = ["RouletteImages/wheel.png"];
let wheel = document.querySelectorAll("img");

function spin(){
    wheel.forEach((die) => {
        die.classList.add("shake");
    });
    setTimeout(function(){
        wheel.forEach(function(die){
            die.classList.remove("shake");
        });
        let spinOneValue = Math.floor(Math.random()*37);
        document.querySelector("#WheelTotal").innerHTML = "Your roll is " + (spinOneValue);

        if(spinOneValue%2 == 0) {
            Money *= 2;
            TimesWon += 1;
            MoneyText.innerHTML = `Money: ${Money} $`; 
            TimesWonText.innerHTML = `TimesWon: ${TimesWon}`
            localStorage.setItem("Money", Money);
        }
        else {
            Money *= 0.5;
            TimesLost += 1;
            MoneyText.innerHTML = `Money: ${Money} $`; 
            TimesLostText.innerHTML = `TimesLost: ${TimesLost}`
            localStorage.setItem("Money", Money);
        }
    },
    3000
    );
}
spin();