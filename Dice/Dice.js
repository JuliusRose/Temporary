let Money = localStorage.getItem("Money");
let TimesWon = 0;
let TimesLost = 0; 



let MoneyText = document.querySelector(".Money");
let TimesWonText = document.querySelector(".TimesWon");
let TimesLostText = document.querySelector(".TimesLost");

let images = [
    "DiceImages/dice-01.svg",
    "DiceImages/dice-02.svg",
    "DiceImages/dice-03.svg",
    "DiceImages/dice-04.svg",
    "DiceImages/dice-05.svg",
    "DiceImages/dice-06.svg"
];

let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach((die) => {
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#Dice01").setAttribute("src", images[dieOneValue]);
        document.querySelector("#Dice02").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#DiceTotal").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );

          if((dieOneValue +1) + (dieTwoValue + 1) > 6) {
              Money *= 2;
              TimesWon += 1;
              MoneyText.innerHTML = `Money: ${Money} $`; 
              TimesWonText.innerHTML = `TimesWon: ${TimesWon}`
              localStorage.setItem("Money", Money);

          }
          else if ((dieOneValue +1) + (dieTwoValue + 1) <= 6) {
              Money *= 0.5;
              TimesLost += 1;
              MoneyText.innerHTML = `Money: ${Money} $`; 
              TimesLostText.innerHTML = `TimesLost: ${TimesLost}`
              localStorage.setItem("Money", Money);
          }
    },
    1000
    );
}
roll();