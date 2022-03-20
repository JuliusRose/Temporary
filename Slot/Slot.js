let Money = localStorage.getItem("Money");
let TimesWon = 0;
let TimesLost = 0; 

let MoneyText = document.querySelector(".Money");
let TimesWonText = document.querySelector(".TimesWon")
let TimesLostText = document.querySelector(".TimesLost")


let images = [
"SlotImages/Apple.png",
"SlotImages/Bar.png",
"SlotImages/Cherry.png",
"SlotImages/Coin.png",
"SlotImages/Orange.png",
"SlotImages/Pear.png",
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
        let dieThreeValue = Math.floor(Math.random()*6);
        document.querySelector("#Slot01").setAttribute("src", images[dieOneValue]);
        document.querySelector("#Slot02").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#Slot03").setAttribute("src", images[dieThreeValue]);
        
          if((dieOneValue + 1) == (dieTwoValue + 1) == (dieThreeValue + 1)) {
              document.querySelector("#SlotTotal").innerHTML = "Win";
              Money *= 1000;
              TimesWon += 1;
              MoneyText.innerHTML = `Money: ${Money} $`; 
              TimesWonText.innerHTML = `TimesWon: ${TimesWon}`
              localStorage.setItem("Money", Money);
          }
          else if((dieOneValue + 1) == (dieTwoValue + 1)) {
            document.querySelector("#SlotTotal").innerHTML = "Semi-Win";
            Money *= 10;
            TimesWon += 1;
            MoneyText.innerHTML = `Money: ${Money} $`; 
            TimesWonText.innerHTML = `TimesWon: ${TimesWon}`
            localStorage.setItem("Money", Money);
        }
        else if((dieTwoValue + 1) == (dieThreeValue + 1)) {
            document.querySelector("#SlotTotal").innerHTML = "Semi-Win";
            Money *= 10;
            TimesWon += 1;
            MoneyText.innerHTML = `Money: ${Money} $`; 
            TimesWonText.innerHTML = `TimesWon: ${TimesWon}`
            localStorage.setItem("Money", Money);
        }
        else if((dieOneValue + 1) == (dieThreeValue + 1)) {
            document.querySelector("#SlotTotal").innerHTML = "Semi-Win";
            Money *= 10;
            TimesWon += 1;
            MoneyText.innerHTML = `Money: ${Money} $`; 
            TimesWonText.innerHTML = `TimesWon: ${TimesWon}`
            localStorage.setItem("Money", Money);
        }
          else {
              document.querySelector("#SlotTotal").innerHTML = "Lose";
              Money *= 0.1;
              TimesLost += 1;
              MoneyText.innerHTML = `Money: ${Money} $`; 
              TimesLostText.innerHTML = `TimesLost: ${TimesLost}` 
              localStorage.setItem("Money", Money);
          }
    },
    1500
    );
}
roll();