let user_id = sessionStorage.getItem('user_id')
const yourDice = document.querySelectorAll(".yourDice");
const enemyDice = document.querySelectorAll(".enemyDice");
let enemyFacing = sessionStorage.getItem("enemyFacing");
sessionStorage.setItem('username', 'TildoShaggins')
let username = sessionStorage.getItem('username')
console.log(enemyFacing)
//////////////////////////////////////////////////////////////////////////////////////////////////Page Functionality
const badGuys = ["numpy", "rogan", "dom", "absoluteUnit"];
let cycleStage = 1;
// function cycle(e){
//     e.preventDefault()
//     if(cycleStage === 1){
//         document.querySelector('#enemy').classList.remove(`${badGuys[3]}`)
//         document.querySelector('#banter').classList.remove(`${badGuys[3]}Banter`)
//         document.querySelector('#enemy').classList.add(`${badGuys[0]}`)
//         document.querySelector('#banter').classList.add(`${badGuys[0]}Banter`)
//         console.log(cycleStage)
//     }else if(cycleStage === 2){
//         document.querySelector('#enemy').classList.remove(`${badGuys[0]}`)
//         document.querySelector('#banter').classList.remove(`${badGuys[0]}Banter`)
//         document.querySelector('#enemy').classList.add(`${badGuys[1]}`)
//         document.querySelector('#banter').classList.add(`${badGuys[1]}Banter`)
//         const mic = document.querySelector('#mic')
//         mic.classList.add('mic')
//         // console.log(mic)
//         console.log(cycleStage)
//     }else if(cycleStage === 3){
//         document.querySelector('#enemy').classList.remove(`${badGuys[1]}`)
//         document.querySelector('#banter').classList.remove(`${badGuys[1]}Banter`)
//         document.querySelector('#enemy').classList.add(`${badGuys[2]}`)
//         document.querySelector('#banter').classList.add(`${badGuys[2]}Banter`)
//         const mic = document.querySelector('#mic')
//         mic.classList.remove('mic')
//         console.log(cycleStage)
//     }else if(cycleStage === 4){
//         document.querySelector('#enemy').classList.remove(`${badGuys[2]}`)
//         document.querySelector('#banter').classList.remove(`${badGuys[2]}Banter`)
//         document.querySelector('#enemy').classList.add(`${badGuys[3]}`)
//         document.querySelector('#banter').classList.add(`${badGuys[3]}Banter`)
//         console.log(cycleStage)
//         cycleStage = 0
//     }
//     cycleStage += 1
// }
function customDice(){
  let body = {
    user_id: sessionStorage.getItem('user_id')
  }
  console.log('starting')
  axios.post('http://localhost:6969/Custom-Dice', body)
  .then(res =>{
    res.data.forEach(elem=>{
        for(let i =0; i < document.querySelectorAll('.dot').length; i++){
            document.querySelectorAll('.dot')[i].classList.add(`${elem.dice_dot}`)
        }
        console.log(elem.dice_dot)
        for(let i =0; i< document.querySelectorAll('.diceSide').length; i++){
          document.querySelectorAll('.diceSide')[i].classList.add(`${elem.dice_side}`)
          // console.log(document.querySelectorAll('.diceSide')[i].classList)
        }
        // console.log(elem.dice_side)
        // console.log(document.querySelectorAll('.diceSide').length)
        for(let i =0; i< document.querySelectorAll('.diceFace').length; i++){
          document.querySelectorAll('.diceFace')[i].classList.add(`${elem.dice_face}`)

        }

        // console.log( document.getElementsByClassName('menuDiceFace') )
        // console.log( document.getElementsByClassName('menuDiceFace').classList )
        // console.log(elem.dice_side)
        
        // document.querySelector('#username').textContent=`${elem.username}`
    })
    .catch(err => {
      console.log(err) 
      alert('uh oh something went wrong')
  })
})

}

function goToCampaign(){
  window.location.href='./homepage.html'
  sessionStorage.setItem('starting', false)
}
function setEnemy(enemyFacing) {
  if (enemyFacing === "numpy") {
    document.querySelector("#enemy").classList.remove(`${badGuys[3]}`);
    document.querySelector("#banter").classList.remove(`${badGuys[3]}Banter`);
    document.querySelector("#enemy").classList.add(`${badGuys[0]}`);
    document.querySelector("#banter").classList.add(`${badGuys[0]}Banter`);
    // console.log(cycleStage)
  } else if (enemyFacing === "rogan") {
    document.querySelector("#enemy").classList.remove(`${badGuys[3]}`);
    document.querySelector("#banter").classList.remove(`${badGuys[3]}Banter`);
    document.querySelector("#enemy").classList.add(`${badGuys[1]}`);
    document.querySelector("#banter").classList.add(`${badGuys[1]}Banter`);
    const mic = document.querySelector("#mic");
    mic.classList.add("mic");
    // console.log(mic)
    // console.log(cycleStage)
  } else if (enemyFacing === "dom") {
    document.querySelector("#enemy").classList.remove(`${badGuys[3]}`);
    document.querySelector("#banter").classList.remove(`${badGuys[3]}Banter`);
    document.querySelector("#enemy").classList.add(`${badGuys[2]}`);
    document.querySelector("#banter").classList.add(`${badGuys[2]}Banter`);
    const mic = document.querySelector("#mic");
    mic.classList.remove("mic");
    // console.log(cycleStage)
  }
}

let diceValArr = [
  "diceValOne",
  "diceValTwo",
  "diceValThree",
  "diceValFour",
  "diceValFive",
  "diceValSix",
];
function generateDiceVal() {
  // console.log(yourDice)
  let div = "";
  let ones = document.querySelectorAll(".diceValOne");
  let twos = document.querySelectorAll(".diceValTwo");
  let threes = document.querySelectorAll(".diceValThree");
  let fours = document.querySelectorAll(".diceValFour");
  let fives = document.querySelectorAll(".diceValFive");
  let sixs = document.querySelectorAll(".diceValSix");
  for (let i = 0; i < ones.length; i++) {
    div = document.createElement("div");
    div.classList.add("dot");
    ones[i].appendChild(div);
  }
  div = "";
  for (let i = 0; i < twos.length; i++) {
    div = document.createElement("div");
    div.classList.add("dot");
    twos[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    twos[i].appendChild(div);
  }
  div = "";
  for (let i = 0; i < twos.length; i++) {
    div = document.createElement("div");
    div.classList.add("dot");
    threes[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    threes[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    threes[i].appendChild(div);
  }
  div = "";
  for (let i = 0; i < fours.length; i++) {
    div = document.createElement("div");
    div.classList.add("dot");
    fours[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    fours[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    fours[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    fours[i].appendChild(div);
  }
  div = "";
  for (let i = 0; i < fives.length; i++) {
    div = document.createElement("div");
    div.classList.add("dot");
    div.classList.add("firstDot");
    fives[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    fives[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    fives[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    fives[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    fives[i].appendChild(div);
  }
  div = "";
  for (let i = 0; i < sixs.length; i++) {
    div = document.createElement("div");
    div.classList.add("dot");
    sixs[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    sixs[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    sixs[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    sixs[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    sixs[i].appendChild(div);
    div = document.createElement("div");
    div.classList.add("dot");
    sixs[i].appendChild(div);
  }
  div = "";
  player.createHand();
  // console.log(player.hand)
  for (let i = 0; i < yourDice.length; i++) {
    yourDice[i].classList.add(`${diceValArr[player.hand[i] - 1]}`);
    // console.log(yourDice[i].classList)
    for (let j = 0; j < player.hand[i]; j++) {
      div = document.createElement("div");
      div.classList.add("dot");
      yourDice[i].appendChild(div);
      if (j === 0 && player.hand[i] === 5) {
        div.classList.add("firstDot");
      }
    }
  }
  enemyPlayer.createHand();
  // console.log(enemyPlayer.hand)

  for (let i = 0; i < enemyDice.length; i++) {
    enemyDice[i].classList.add(`${diceValArr[enemyPlayer.hand[i] - 1]}`);
    // console.log(enemyDice[i].classList)
    // console.log(enemyPlayer.hand[i]-1)
    for (let j = 0; j < enemyPlayer.hand[i]; j++) {
      div = document.createElement("div");
      div.classList.add("dot");
      enemyDice[i].appendChild(div);
      if (j === 0 && enemyPlayer.hand[i] === 5) {
        div.classList.add("firstDot");
      }
    }
  }
  
  // for(let i=0; i<yourDice.length; i++){
  //     let genDiceVal = Math.floor((Math.random() * 6))
  //     yourDice[i].classList.add(`${diceValArr[genDiceVal]}`)
  //     // console.log(yourDice[i].classList)
  //     for(let j =0; j<genDiceVal+1; j++){
  //         div = document.createElement('div')
  //         div.classList.add('dot')
  //         yourDice[i].appendChild(div)
  //         if(j===0 && genDiceVal === 4){
  //             div.classList.add('firstDot')
  //         }
  //     }
  // }
}
let numpyBanter = ["I HATE red. It's such a stupid color.", "I'm a sssssneaky little ssssnake you sssssei", "Yes, I am a rejected Pokemon. Please stop pointing it out", "No, like I really mean it. I hate red. it hurts my eyes.", "Hsssssssssssssss..."]
let roganBanter = ["(whispering)...and you turn yourself, and that's what it's all about.", "My stage name is actually Kyle. Throw Rogan just doesn't sound like an entertainer", "I don't know what to do, p**p. SORRY ANDREW", "welcome to my keyboard asmr... (intense clicking noises)", "I move that the next set of dice must be rolled with your non-dominant hand."]
let domBanter = ['Your mom got stuck and asked me, \n her step-bro, for help, I said, "anything for Family"', "I don’t have friends, I have a family.", "The other enemies and I are \ntechnically a Class, but I prefer Family.", "Originally my we where supposed to reroll dice every turn, but family got in the way of that. Respect." ]
let absoluteUnitBanter =[`"Don't put me in your game" - Scott (probably)`, `"Hey man," - Scott (definitely)`, `"Scott is an Absolute-Unit" - People who know what's up`, "I like motorcycles", "This is due on wendsday... I mean tuesday"]


function shakeCups() {
  document.querySelector("#yourCup").classList.add("shake");
  document.querySelector("#enemyCup").classList.add("enemyShake");
  document.querySelector('#banter').classList = `${enemyFacing}Banter`


  document.querySelector('.talkBubble').id=''
  if(enemyFacing === 'numpy'){
    document.querySelector('#banter').textContent = numpyBanter[Math.floor((Math.random()*5))]
  }else if(enemyFacing === 'rogan'){
    document.querySelector('#banter').textContent = roganBanter[Math.floor((Math.random()*5))]
  }else if(enemyFacing === 'dom'){
    document.querySelector('#banter').textContent = domBanter[Math.floor((Math.random()*5))]
  }else if(enemyFacing === 'absoluteUnit'){
    let randomNumber=Math.floor((Math.random()*5))
    console.log(randomNumber)
    document.querySelector('#banter').textContent = absoluteUnitBanter[randomNumber]
  }
  setTimeout(() => {
    generateDiceVal();
    customDice()
    enemyPlayer.takeTurn();
    player.updateDisplay()
    document.querySelector('#banter').textContent = `I call ${diceNum} ${diceVal}'s`
    readyForPlayer=true
  }, 4000);
  document.querySelector('form').classList=''
  document.querySelector('.liar').id=''
  setTimeout(()=>{document.querySelector('.talkBubble').id = 'hide'}, 10000)
}


//////////////////////////////////////////////////////////////////////////////////////////////////Game Rules
let diceNum = 0;
let diceVal = 1;
let numberOfRolls = 5;
let numOfPlayer = 0;
let previousPlayer = "";
let gameStillGoing = true;
let bluffTruth = true;
let allHandsArrCL = [];
let addedDice = 0;
let readyForPlayer = false
function factorialize(num) {
  let answer = 1;
  if (num === 0 || num === 1) {
    return answer;
  } else {
    for (let i = num; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}

function allHands() {
  console.log(allHandsArrCL);
}

function checkTruth() {
  document.querySelector(".hide").id = "enemyDiceContainer";
  document.querySelector('form').id='hide'
  document.querySelector('.liar').id='hide'
  console.log(previousPlayer)
  let allHandsArr = [];
  allHandsArr.push(player.hand, enemyPlayer.hand);
  let counts = {};
  for (let num of allHandsArr.flat()) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  if (counts[diceVal] >= diceNum) {
    if(previousPlayer === enemyFacing){
      document.querySelector('.talkBubble').id=''
      document.querySelector('#banter').textContent = "Haha Gotcha! Read 'em and weep"

      setTimeout(()=>{
        document.querySelector('.talkBubble').id='hide'
        retry()
      }, 8000)
    }else{
      document.querySelector('.talkBubble').id=''
      document.querySelector('#banter').textContent = "Good game. You won fair and square"

      setTimeout(()=>{
        document.querySelector('.talkBubble').id='hide'
        updateProgress()
        // goToCampaign()
      }, 8000)
    }
    console.log(`there is actually ${counts[diceVal]} ${diceVal}'s`)
    return (bluffTruth = true);
  } else {
    if(previousPlayer !== enemyFacing){
      document.querySelector('.talkBubble').id=''
      document.querySelector('#banter').textContent = "Haha Gotcha! Filthy liar. I can Sei right through you"

      setTimeout(()=>{
        document.querySelector('.talkBubble').id='hide'
        retry()
      }, 8000)
    }else{
      document.querySelector('.talkBubble').id=''
      document.querySelector('#banter').textContent = "I'm a terrible liar. You can Sei right through me"

      setTimeout(()=>{
        document.querySelector('.talkBubble').id='hide'
        updateProgress()
        // goToCampaign()
      }, 8000)
    }
    console.log(`there is actually only ${counts[diceVal]} ${diceVal}'s`);
    return (bluffTruth = false);
  }
}

class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      numOfPlayer += 1;
    }
    rollDice() {
      let possibleRolls = [1, 2, 3, 4, 5, 6];
      let randomNum = Math.floor(Math.random() * possibleRolls.length);
      return possibleRolls[randomNum];
    }
    createHand() {
      for (let i = 0; i < numberOfRolls; i++) {
        this.hand.push(this.rollDice());
      }
      this.counts = {};
      for (let num of this.hand) {
        this.counts[num] = this.counts[num] ? this.counts[num] + 1 : 1;
      }
      // console.log(
      //   this.counts[1],
      //   this.counts[2],
      //   this.counts[3],
      //   this.counts[4],
      //   this.counts[5],
      //   this.counts[6]
      // );
  
      this.oneArr = [];
      this.twoArr = [];
      this.threeArr = [];
      this.fourArr = [];
      this.fiveArr = [];
      this.sixArr = [];
  
      if (this.counts[1] === undefined) {
        this.counts[1] = 0;
      }
      if (this.counts[2] === undefined) {
        this.counts[2] = 0;
      }
      if (this.counts[3] === undefined) {
        this.counts[3] = 0;
      }
      if (this.counts[4] === undefined) {
        this.counts[4] = 0;
      }
      if (this.counts[5] === undefined) {
        this.counts[5] = 0;
      }
      if (this.counts[6] === undefined) {
        this.counts[6] = 0;
      }
  
      ////////////////////////////////////////////////////////////////First Dice//////////////////////////////////////////////////////////////////
      for (let i = 0; i < numOfPlayer * numberOfRolls + addedDice; i++) {
        this.oneArr[i] =
          (factorialize((numOfPlayer - 1) * numberOfRolls) /
            (factorialize(i + 1) *
              factorialize((numOfPlayer - 1) * numberOfRolls - (i + 1)))) *
          (Math.pow(1 / 6, i + 1) *
            Math.pow(5 / 6, (numOfPlayer - 1) * numberOfRolls - (i + 1)));
      }
      for (let i = 6; i > 0; i--) {
        this.oneArr.pop();
      }
      for (let i = 0; i < this.counts[1]; i++) {
        this.oneArr.unshift(1);
      }
      for (let i = 6 - this.counts[1]; i > 0; i--) {
        this.oneArr.push(0);
      }
      for (let i = 0; i < this.oneArr.length - 1; i++) {
        if (this.oneArr[i] !== 1) {
          function calc(array, lowerLimit, upperLimit) {
            let result = 0;
            array.slice(lowerLimit, upperLimit + 1).forEach((element) => {
              result += element;
            });
            return result;
          }
          this.oneArr[i] = calc(this.oneArr, i, this.oneArr.length - 1);
        }
      }
      ////////////////////////////////////////////////////////////////Second Dice//////////////////////////////////////////////////////////////////
      for (let i = 0; i < numOfPlayer * numberOfRolls + addedDice; i++) {
        this.twoArr[i] =
          (factorialize((numOfPlayer - 1) * numberOfRolls) /
            (factorialize(i + 1) *
              factorialize((numOfPlayer - 1) * numberOfRolls - (i + 1)))) *
          (Math.pow(1 / 6, i + 1) *
            Math.pow(5 / 6, (numOfPlayer - 1) * numberOfRolls - (i + 1)));
      }
      for (let i = 6; i > 0; i--) {
        this.twoArr.pop();
      }
      for (let i = 0; i < this.counts[2]; i++) {
        this.twoArr.unshift(1);
      }
      for (let i = 6 - this.counts[2]; i > 0; i--) {
        this.twoArr.push(0);
      }
      for (let i = 0; i < this.twoArr.length - 1; i++) {
        if (this.twoArr[i] !== 1) {
          function calc(array, lowerLimit, upperLimit) {
            let result = 0;
            array.slice(lowerLimit, upperLimit + 1).forEach((element) => {
              result += element;
            });
            return result;
          }
          this.twoArr[i] = calc(this.twoArr, i, this.twoArr.length - 1);
        }
      }
      ////////////////////////////////////////////////////////////////Third Dice//////////////////////////////////////////////////////////////////
      for (let i = 0; i < numOfPlayer * numberOfRolls + addedDice; i++) {
        this.threeArr[i] =
          (factorialize((numOfPlayer - 1) * numberOfRolls) /
            (factorialize(i + 1) *
              factorialize((numOfPlayer - 1) * numberOfRolls - (i + 1)))) *
          (Math.pow(1 / 6, i + 1) *
            Math.pow(5 / 6, (numOfPlayer - 1) * numberOfRolls - (i + 1)));
      }
      for (let i = 6; i > 0; i--) {
        this.threeArr.pop();
      }
      for (let i = 0; i < this.counts[3]; i++) {
        this.threeArr.unshift(1);
      }
      for (let i = 6 - this.counts[3]; i > 0; i--) {
        this.threeArr.push(0);
      }
      for (let i = 0; i < this.threeArr.length - 1; i++) {
        if (this.threeArr[i] !== 1) {
          function calc(array, lowerLimit, upperLimit) {
            let result = 0;
            array.slice(lowerLimit, upperLimit + 1).forEach((element) => {
              result += element;
            });
            return result;
          }
          this.threeArr[i] = calc(this.threeArr, i, this.threeArr.length - 1);
        }
      }
      ////////////////////////////////////////////////////////////////Fourth Dice//////////////////////////////////////////////////////////////////
      for (let i = 0; i < numOfPlayer * numberOfRolls + addedDice; i++) {
        this.fourArr[i] =
          (factorialize((numOfPlayer - 1) * numberOfRolls) /
            (factorialize(i + 1) *
              factorialize((numOfPlayer - 1) * numberOfRolls - (i + 1)))) *
          (Math.pow(1 / 6, i + 1) *
            Math.pow(5 / 6, (numOfPlayer - 1) * numberOfRolls - (i + 1)));
      }
      for (let i = 6; i > 0; i--) {
        this.fourArr.pop();
      }
      for (let i = 0; i < this.counts[4]; i++) {
        this.fourArr.unshift(1);
      }
      for (let i = 6 - this.counts[4]; i > 0; i--) {
        this.fourArr.push(0);
      }
      for (let i = 0; i < this.fourArr.length - 1; i++) {
        if (this.fourArr[i] !== 1) {
          function calc(array, lowerLimit, upperLimit) {
            let result = 0;
            array.slice(lowerLimit, upperLimit + 1).forEach((element) => {
              result += element;
            });
            return result;
          }
          this.fourArr[i] = calc(this.fourArr, i, this.fourArr.length - 1);
        }
      }
      ////////////////////////////////////////////////////////////////Fifth Dice//////////////////////////////////////////////////////////////////
      for (let i = 0; i < numOfPlayer * numberOfRolls + addedDice; i++) {
        this.fiveArr[i] =
          (factorialize((numOfPlayer - 1) * numberOfRolls) /
            (factorialize(i + 1) *
              factorialize((numOfPlayer - 1) * numberOfRolls - (i + 1)))) *
          (Math.pow(1 / 6, i + 1) *
            Math.pow(5 / 6, (numOfPlayer - 1) * numberOfRolls - (i + 1)));
      }
      for (let i = 6; i > 0; i--) {
        this.fiveArr.pop();
      }
      for (let i = 0; i < this.counts[5]; i++) {
        this.fiveArr.unshift(1);
      }
      for (let i = 6 - this.counts[5]; i > 0; i--) {
        this.fiveArr.push(0);
      }
      for (let i = 0; i < this.fiveArr.length - 1; i++) {
        if (this.fiveArr[i] !== 1) {
          function calc(array, lowerLimit, upperLimit) {
            let result = 0;
            array.slice(lowerLimit, upperLimit + 1).forEach((element) => {
              result += element;
            });
            return result;
          }
          this.fiveArr[i] = calc(this.fiveArr, i, this.fiveArr.length - 1);
        }
      }
      ////////////////////////////////////////////////////////////////Sixth Dice//////////////////////////////////////////////////////////////////
      for (let i = 0; i < numOfPlayer * numberOfRolls + addedDice; i++) {
        this.sixArr[i] =
          (factorialize((numOfPlayer - 1) * numberOfRolls) /
            (factorialize(i + 1) *
              factorialize((numOfPlayer - 1) * numberOfRolls - (i + 1)))) *
          (Math.pow(1 / 6, i + 1) *
            Math.pow(5 / 6, (numOfPlayer - 1) * numberOfRolls - (i + 1)));
      }
      for (let i = 6; i > 0; i--) {
        this.sixArr.pop();
      }
      for (let i = 0; i < this.counts[6]; i++) {
        this.sixArr.unshift(1);
      }
      for (let i = 6 - this.counts[6]; i > 0; i--) {
        this.sixArr.push(0);
      }
      for (let i = 0; i < this.sixArr.length - 1; i++) {
        if (this.sixArr[i] !== 1) {
          function calc(array, lowerLimit, upperLimit) {
            let result = 0;
            array.slice(lowerLimit, upperLimit + 1).forEach((element) => {
              result += element;
            });
            return result;
          }
          this.sixArr[i] = calc(this.sixArr, i, this.sixArr.length - 1);
        }
      }
      this.possDiceArr = [
        this.oneArr,
        this.twoArr,
        this.threeArr,
        this.fourArr,
        this.fiveArr,
        this.sixArr,
      ];
    //   console.log(this.possDiceArr)
      allHandsArrCL.push(`${this.name} ` + this.hand);
    }
    updateProbabilities() {
        this.turnNum = diceNum
        this.turnVal = diceVal
      //////////////////////////////////////////////////////////////////////////////////////Updating Probabilities//////////////////////////////////////////////////////////////
      //  console.log("turn num: " + this.turnNum + " this val: " + this.turnVal)
      for (let i = 0; i < this.turnNum - 1; i++) {
        this.oneArr[i] = 0;
        this.twoArr[i] = 0;
        this.threeArr[i] = 0;
        this.fourArr[i] = 0;
        this.fiveArr[i] = 0;
        this.sixArr[i] = 0;
      }
      if (diceVal === 1) {
        //   console.log(this.oneArr)
        //   console.log(this.turnNum-1)
        this.oneArr[this.turnNum - 1] = 0;
      } else if (diceVal === 2) {
        this.oneArr[this.turnNum - 1] = 0;
        this.twoArr[this.turnNum - 1] = 0;
      } else if (diceVal === 3) {
        this.oneArr[this.turnNum - 1] = 0;
        this.twoArr[this.turnNum - 1] = 0;
        this.threeArr[this.turnNum - 1] = 0;
      } else if (diceVal === 4) {
        this.oneArr[this.turnNum - 1] = 0;
        this.twoArr[this.turnNum - 1] = 0;
        this.threeArr[this.turnNum - 1] = 0;
        this.fourArr[this.turnNum - 1] = 0;
      } else if (diceVal === 5) {
        this.oneArr[this.turnNum - 1] = 0;
        this.twoArr[this.turnNum - 1] = 0;
        this.threeArr[this.turnNum - 1] = 0;
        this.fourArr[this.turnNum - 1] = 0;
        this.fiveArr[this.turnNum - 1] = 0;
      } else if (diceVal === 6) {
        this.oneArr[this.turnNum - 1] = 0;
        this.twoArr[this.turnNum - 1] = 0;
        this.threeArr[this.turnNum - 1] = 0;
        this.fourArr[this.turnNum - 1] = 0;
        this.fiveArr[this.turnNum - 1] = 0;
        this.sixArr[this.turnNum - 1] = 0;
      }
    //   console.log(this.oneArr)
    //   console.log(this.twoArr)
    //   console.log(this.threeArr)
    //   console.log(this.fourArr)
    //   console.log(this.fourArr)
    //   console.log(this.fiveArr)
    //   console.log(this.sixArr)
      
    //   console.log(Math.max(...this.oneArr))
    //   console.log(this.oneArr.indexOf(Math.max(...this.oneArr))+1)
    //   document.querySelector('#ones').textContent = `${this.oneArr.indexOf(Math.max(...this.oneArr))+1}<`
    //   document.querySelector('#twos').textContent = `${this.twoArr.indexOf(Math.max(...this.twoArr))+1}<`
    //   document.querySelector('#threes').textContent = `${this.threeArr.indexOf(Math.max(...this.threeArr))+1}<`
    }
    
  }
  
  class EnemyPlayer extends Player {
    constructor(name, riskConstant) {
      super(name);
      this.riskConstant = riskConstant;
    }
    setTurnRisk() {
      this.turnRiskConstant =
        Math.floor(Math.random() * this.riskConstant * 10) + 3;
      // console.log("turn riskConstant: " + this.turnRiskConstant);
    }
  
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CALLING BLUFFS//////////////////////////////////////////////////////////////
    callBluff() {
      ///////////////////////////////////////////////////////////////Set Num/Val for turn start/////////////////////////////////////////////////////////////////////
      this.turnNum = diceNum;
      this.turnVal = diceVal;
      this.setTurnRisk();
      this.updateProbabilities();
      this.fear = 120;
      
  
      if (this.turnVal === 1) {
        if (this.oneArr[diceNum] > this.turnRiskConstant / this.fear) {
          return console.log(
            `${this.name} does not call ${previousPlayer}'s bluff.`
          );
        } else {
          gameStillGoing = false;
          console.log(`I think you're full of it ${previousPlayer}`);
          allHands();
          checkTruth();
          if (bluffTruth === true) {
            if (this.name === "Davey Jones") {
              console.log(
                `${previousPlayer}'s bluff was true. ${this.name} must give up the key to his heart.`
              );
            } else {
              console.log(
                `${previousPlayer}'s bluff was true. ${this.name} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
              );
            }
          } else if (bluffTruth === false)
            if (previousPlayer === "Davey Jones") {
              console.log(
                `${previousPlayer} is a filthy liar. ${previousPlayer} must give up the key to his heart.`
              );
            } else {
              console.log(
                `${previousPlayer} is a filthy liar. ${previousPlayer} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
              );
            }
        }
      }else if (this.turnVal === 2) {
        if (this.twoArr[diceNum] > this.turnRiskConstant / this.fear) {
          return console.log(
            `${this.name} does not call ${previousPlayer}'s bluff.`
          );
        } else {
          gameStillGoing = false;
          console.log(`I think you're full of it ${previousPlayer}`);
          allHands();
          checkTruth();
          if (bluffTruth === true) {
            if (this.name === "Davey Jones") {
              console.log(
                `${previousPlayer}'s bluff was true. ${this.name} must give up the key to his heart.`
              );
            } else {
              console.log(
                `${previousPlayer}'s bluff was true. ${this.name} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
              );
            }
          } else if (bluffTruth === false)
            if (previousPlayer === "Davey Jones") {
              console.log(
                `${previousPlayer} is a filthy liar. ${previousPlayer} must give up the key to his heart.`
              );
            } else {
              console.log(
                `${previousPlayer} is a filthy liar. ${previousPlayer} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
              );
            }
        }
      }else if (this.turnVal === 3) {
        if (this.threeArr[diceNum] > this.turnRiskConstant / this.fear) {
          return console.log(
            `${this.name} does not call ${previousPlayer}'s bluff.`
          );
        } else {
          gameStillGoing = false;
          console.log(`I think you're full of it ${previousPlayer}`);
          allHands();
          checkTruth();
          if (bluffTruth === true) {
            if (this.name === "Davey Jones") {
              console.log(
                `${previousPlayer}'s bluff was true. ${this.name} must give up the key to his heart.`
              );
            } else {
              console.log(
                `${previousPlayer}'s bluff was true. ${this.name} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
              );
            }
          } else if (bluffTruth === false)
            if (previousPlayer === "Davey Jones") {
              console.log(
                `${previousPlayer} is a filthy liar. ${previousPlayer} must give up the key to his heart.`
              );
            } else {
              console.log(
                `${previousPlayer} is a filthy liar. ${previousPlayer} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
              );
            }
        }
      }else if (this.turnVal === 4) {
        if (this.fourArr[diceNum] > this.turnRiskConstant / this.fear) {
          return console.log(
            `${this.name} does not call ${previousPlayer}'s bluff.`
          );
        } else {
          gameStillGoing = false;
          console.log(`I think you're full of it ${previousPlayer}`);
          allHands();
          checkTruth();
          if (bluffTruth === true) {
            if (this.name === "Davey Jones") {
              console.log(
                `${previousPlayer}'s bluff was true. ${this.name} must give up the key to his heart.`
              );
            } else {
              console.log(
                `${previousPlayer}'s bluff was true. ${this.name} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
              );
            }
          } else if (bluffTruth === false)
            if (previousPlayer === "Davey Jones") {
              console.log(
                `${previousPlayer} is a filthy liar. ${previousPlayer} must give up the key to his heart.`
              );
            } else {
              console.log(
                `${previousPlayer} is a filthy liar. ${previousPlayer} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
              );
            }
        }
      }else if (this.turnVal === 5) {
        if (this.fiveArr[diceNum] > this.turnRiskConstant / this.fear) {
          return console.log(
            `${this.name} does not call ${previousPlayer}'s bluff.`
          );
        } else {
          gameStillGoing = false;
          console.log(`I think you're full of it ${previousPlayer}`);
          allHands();
          checkTruth();
          if (bluffTruth === true) {
            if (this.name === "Davey Jones") {
              console.log(
                `${previousPlayer}'s bluff was true. ${this.name} must give up the key to his heart.`
              );
            } else {
              console.log(
                `${previousPlayer}'s bluff was true. ${this.name} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
              );
            }
          } else if (bluffTruth === false)
            if (previousPlayer === "Davey Jones") {
              console.log(
                `${previousPlayer} is a filthy liar. ${previousPlayer} must give up the key to his heart.`
              );
            } else {
              console.log(
                `${previousPlayer} is a filthy liar. ${previousPlayer} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
              );
            }
        }
      }else if (this.turnVal === 6) {
        if (this.sixArr[diceNum] > this.turnRiskConstant / this.fear) {
          return console.log(
            `${this.name} does not call ${previousPlayer}'s bluff.`
          );
        } else {
          gameStillGoing = false;
          setTimeout(()=>{
            document.querySelector('.talkBubble').id=''
            document.querySelector('#banter').textContent = "I think your full of it"
          }, 5000)
          setTimeout(()=>{
            console.log(`I think you're full of it ${previousPlayer}`);
            allHands();
            checkTruth();
            if (bluffTruth === true) {
              if (this.name === "Davey Jones") {
                console.log(
                  `${previousPlayer}'s bluff was true. ${this.name} must give up the key to his heart.`
                  );
                } else {
                  console.log(
                    `${previousPlayer}'s bluff was true. ${this.name} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
                    );
                  }
                } else if (bluffTruth === false)
                if (previousPlayer === "Davey Jones") {
                  console.log(
                    `${previousPlayer} is a filthy liar. ${previousPlayer} must give up the key to his heart.`
                    );
                  } else {
                    console.log(
                      `${previousPlayer} is a filthy liar. ${previousPlayer} will serve as a member of the Flying Dutchman for all of eternity as punishment for losing.`
                      );
                    }
                  }, 9000)
                  }
                }
              }
              
              takeTurn() {
        if (diceNum === 0 && diceVal === 1) {
          this.turnNum = diceNum;
          this.turnVal = diceVal;
          this.setTurnRisk();
          this.updateProbabilities();
          console.log("first turn");
        } else {
            // this.turnNum = diceNum;
            // this.turnVal = diceVal;
            // this.setTurnRisk();
            // this.updateProbabilities();

            this.callBluff();
        }
        ///////////////////////////////////////////////////////////////Making Bets/////////////////////////////////////////////////////////////////////
        
        if (gameStillGoing === true) {
          if (
            (this.turnNum < diceNum && this.turnVal <= diceVal) ||
            (this.turnNum <= diceNum && this.turnVal < diceVal) ||
            (this.turnNum < diceNum && this.turnVal < diceVal) ||
            (this.turnNum === diceNum && this.turnVal === diceVal)
          ) {
            
            this.oneMax = Math.max(...this.oneArr);
            this.oneIndex = this.oneArr.indexOf(this.oneMax);
        
            this.twoMax = Math.max(...this.twoArr);
            this.twoIndex = this.twoArr.indexOf(this.twoMax);
           
            this.threeMax = Math.max(...this.threeArr);
            this.threeIndex = this.threeArr.indexOf(this.threeMax);
            
            this.fourMax = Math.max(...this.fourArr);
            this.fourIndex = this.fourArr.indexOf(this.fourMax);
           
            this.fiveMax = Math.max(...this.fiveArr);
            this.fiveIndex = this.fiveArr.indexOf(this.fiveMax);
           
            this.sixMax = Math.max(...this.sixArr);
            this.sixIndex = this.sixArr.indexOf(this.sixMax);
           
          } else {
            return "Not possible";
          }
          this.picksArr = [
            this.oneIndex,
            this.twoIndex,
            this.threeIndex,
            this.fourIndex,
            this.fiveIndex,
            this.sixIndex,
          ];
          this.probabilityForPics = [
            this.oneArr[this.oneIndex],
            this.twoArr[this.twoIndex],
            this.threeArr[this.threeIndex],
            this.fourArr[this.fourIndex],
            this.fiveArr[this.fiveIndex],
            this.sixArr[this.sixIndex],
          ];
    
    
          this.turnVal =
            this.probabilityForPics.indexOf(Math.max(...this.probabilityForPics)) +
            1;
          this.turnNum = this.picksArr[this.turnVal - 1] + 1;
    
    
          diceVal = this.turnVal;
          diceNum = this.turnNum;
          previousPlayer = `${this.name}`;
          return `${this.name} calls ${diceNum} ${diceVal}'s`;
        }
        else{return 'game over'
      }
      }
    }
class PlayerPlayer extends Player{
    constructor(name) {
        super(name);
    }
    updateDisplay(){
        this.updateProbabilities()

        // console.log(this.turnNum)
        // console.log(this.turnVal)
        // console.log(Math.max(...this.oneArr))
        // console.log(this.oneArr.indexOf(Math.max(...this.oneArr))+1)
        document.querySelector('#ones').textContent = `${this.oneArr.indexOf(Math.max(...this.oneArr))+1}=<`
        document.querySelector('#twos').textContent = `${this.twoArr.indexOf(Math.max(...this.twoArr))+1}=<`
        document.querySelector('#threes').textContent = `${this.threeArr.indexOf(Math.max(...this.threeArr))+1}=<`
        document.querySelector('#fours').textContent = `${this.fourArr.indexOf(Math.max(...this.fourArr))+1}=<`
        document.querySelector('#fives').textContent = `${this.fiveArr.indexOf(Math.max(...this.fiveArr))+1}=<`
        document.querySelector('#sixes').textContent = `${this.sixArr.indexOf(Math.max(...this.sixArr))+1}=<`
    }
    playerTurn(e){
      e.preventDefault()
      if(readyForPlayer === false){
        alert('Wait for your turn')
        document.getElementById('bettingForm').reset()
      }else{
        let yourNum = Number(document.querySelector('#bettingNum').value)
        let yourVal = Number(document.querySelector('#bettingVal').value)

        if(diceNum <= yourNum && diceVal < yourVal ||diceNum < yourNum){
          readyForPlayer=false  
          previousPlayer = 'player'
          diceNum= yourNum
          diceVal= yourVal
          console.log(diceNum)
          console.log(diceVal)
          document.getElementById('bettingForm').reset()
          setTimeout(()=>{
            document.querySelector('.talkBubble').id=''
            document.querySelector('#banter').textContent =`Hmmmmm... ${diceNum} ${diceVal}'s you say?`
          }, 1000)
          setTimeout(()=>{
            document.querySelector('.talkBubble').id='hide'
          }, 3000)
          
          setTimeout(()=>{
            document.querySelector('.talkBubble').id=''
            if(enemyFacing === 'numpy'){
              document.querySelector('#banter').textContent = numpyBanter[Math.floor((Math.random()*5))]
            }else if(enemyFacing === 'rogan'){
              document.querySelector('#banter').textContent = roganBanter[(Math.random()*5)]
            }else if(enemyFacing === 'dom'){
              document.querySelector('#banter').textContent = domBanter[(Math.random()*5)]
            }else if(enemyFacing === 'absoluteUnit'){
              document.querySelector('#banter').textContent = absoluteUnitBanter[(Math.random()*5)]
            }
            enemyPlayer.takeTurn()
          }, 5000)
          setTimeout(()=>{
            document.querySelector('.talkBubble').id=''
            player.updateDisplay()
            if(gameStillGoing === true){
              document.querySelector('#banter').textContent = `I call ${diceNum} ${diceVal}'s`
              readyForPlayer=true      
            }
          }, 11000)
          setTimeout(()=>{
            document.querySelector('.talkBubble').id='hide'
            player.updateDisplay()
          }, 15000)
        }else{
          alert('Your bet is invalid')
          document.querySelector('.talkBubble').id=''
          document.querySelector('#banter').textContent = 'You tried to pull a fast one on me did ya?'
          document.getElementById('bettingForm').reset()
          setTimeout(()=>{
            document.querySelector('.talkBubble').id='hide'
          }, 10000)
        }
        }
      }
    }
    function retry(){
      let background = document.createElement('div')
    let textHolder = document.createElement('div')
    let yesBtn = document.createElement('button')
    let noBtn = document.createElement('button')
    background.id="retryBG"
    textHolder.id="retryText"
    textHolder.textContent="Wanna try again?"
    yesBtn.id="yes"
    yesBtn.textContent="Yes"
    noBtn.id="no"
    noBtn.textContent="No"
    
    document.querySelector('#retry').appendChild(background)
    document.querySelector('#retryBG').appendChild(textHolder)
    document.querySelector('#retryBG').appendChild(yesBtn)
    document.querySelector('#retryBG').appendChild(noBtn)

    document.querySelector('#yes').addEventListener('click', ()=>{location.reload()})
    document.querySelector('#no').addEventListener('click', ()=>{window.location.href='./homepage.html'})
    }
    function updateProgress(){
      // console.log(enemyFacing)
      let body={
        user_id: sessionStorage.getItem('user_id'),
        enemyFacing: enemyFacing
      }
      axios.put('http://localhost:6969/Update_Progress', body)
      .then(()=>{
        goToCampaign()
      })
      .catch(err => {
        console.log(err) 
        alert('uh oh something went wrong')
    })

    }
    
    
setEnemy(enemyFacing);
let enemyPlayer = new EnemyPlayer(`${enemyFacing}`, 3);
let player = new PlayerPlayer(username);


customDice()
document.querySelector("#yourCup").addEventListener("click", shakeCups, { once: true });
document.querySelector(".liar").addEventListener("click", checkTruth);
document.querySelector('#bettingForm').addEventListener('submit', player.playerTurn)
