
const muteBtn = document.querySelector("#mute")
const menuMusic = document.getElementById("my_audio")
// menuMusic.muted = false
const menuDice = document.querySelectorAll('.menuDice')
// function playMusic() {
//    if(menuMusic.muted === false){
//        menuMusic.play();
//    }
// }
// function muteUnmute(){
//     if(menuMusic.muted === false){
//         muteBtn.classList.remove('unmuted') 
//         muteBtn.classList.add('muted')
//         menuMusic.muted = true
//     }else if(menuMusic.muted === true){
//         muteBtn.classList.remove('muted')
//         muteBtn.classList.add('unmuted')
//         menuMusic.muted = false
//     }
// }
let diceValArr= ['diceValOne', 'diceValTwo', 'diceValThree', 'diceValFour', 'diceValFive', 'diceValSix' ]
function generateDiceVal(){
    // console.log(menuDice)
    let div = ''
    for(let i=0; i<menuDice.length; i++){
        let genDiceVal = Math.floor((Math.random() * 6))
        menuDice[i].classList.add(`${diceValArr[genDiceVal]}`)
        // console.log(menuDice[i].classList)
        for(let j =0; j<genDiceVal+1; j++){
            div = document.createElement('div')
            div.classList.add('dot')
            menuDice[i].appendChild(div)
        }
    }
   
}
function openInfo(){
    document.querySelector('#infoButton').name = 'clicked'

    const summary = document.createElement('summary')
    summary.classList.add('summary')
    
    const header = document.createElement('div')
    header.innerText= 'How to Play'
    const rules = document.createElement('div')
    rules.innerText=`Each player rolls 5 dice to start the game. You are betting the number of dice of a specified face value. The player challanged makes the first bet.\n\nBets must be at least one more dice of any face value or the same number of dice of a higher face value over the previous bet.\n\nAfter betting, the next player in rotation has the option of either calling out the liar or raising the bet. \n\nWhen a liar is called the game ends. If the liar was lying then the player that called them out wins. If the liar was telling the truth, they win.`
    header.classList.add('header')
    rules.classList.add('rules')
    
    summary.appendChild(header)
    summary.appendChild(rules)
    
    const xButton = document.createElement('button')
    xButton.innerText = 'X'
    xButton.classList.add('xButton')
    
    summary.appendChild(xButton)
    document.body.appendChild(summary)
    xButton.addEventListener('click', closeInfo)
    
}
function closeInfo(){
    document.querySelector('.summary').remove()
    document.querySelector('#infoButton').name = 'clicked'
    
}
if(document.querySelector("#safeHouse").classList.contains('hide') === false){
    let labelsArr = document.querySelectorAll('label')
    for(let i=0; i< labelsArr.length; i++){
        if(labelsArr[i].classList.contains('cleared')){
            document.getElementById(`${labelsArr[i].id}`).style.color = '#f6f1bc'
        }
    } 
}
generateDiceVal()

function goToMap(){
    // console.log('doing it rn')
document.querySelector('#campaign').style.display = 'none'
document.querySelector('#safeHouseDice').style.display = 'none'
// document.querySelector('#battle').style.display = 'none'
setTimeout(()=>{
    document.querySelector('#numberedFunThrowables').style.display = 'none'

}, 2000)

const mapLocations = ['#safeHouse', '#dom', '#rogan', '#numpy', '#absoluteUnit', '#duloc', '#joe']

mapLocations.forEach(location =>{
    document.querySelector(`${location}`).style.height = '12vh'
    document.querySelector(`${location}`).style.width = '12vh'
    document.querySelector(`${location}`).style.cursor = 'pointer'
})
 document.querySelector('title').textContent = 'Campaign'

const textbox = document.querySelectorAll('.textbox')
textbox.forEach(textbox =>{
    textbox.id = ''
    textbox.style.height = '14px'
    textbox.style.width = '12vh'
    textbox.style.fontSize = '16px'
})
if(document.querySelector("#safeHouse").classList.contains('hide') === false){
    // document.querySelectorAll('.cleared').classList.remove('hide')
   let labelsArr = document.querySelectorAll('label')
    for(let i=0; i< labelsArr.length; i++){
        if(labelsArr[i].classList.contains('cleared')){
            document.getElementById(`${labelsArr[i].id}`).style.color = '#f6f1bc'
        }
    } 
}
}
function goToBattle(){
    if(this.classList.contains('locked')){
        alert('You must beat the other three bosses before facing the ABSOLUTE-UNIT')
    }else{
        let enemyFacing = this.id
        sessionStorage.setItem('enemyFacing', enemyFacing)
        window.location.href='./Battle.html'
    }
}
function getProgress(){
    // let user_id = sessionStorage.getItem('user_id')
    axios.get(`http://localhost:6969/Get_Progress`, {
        params:{
            id: sessionStorage.getItem('user_id')
        }
    })
    .then(res=>{
        if(res.data[0].numpy_pass === true){
            document.querySelector('#numpy').classList.remove('awaitingPass')
            document.querySelector('#numpy').classList.add('cleared')
        }
        console.log(res.data[0].numpy_pass)
        if(res.data[0].rogan_pass === true){
            document.querySelector('#rogan').classList.remove('awaitingPass')
            document.querySelector('#rogan').classList.add('cleared')
        }
        if(res.data[0].dom_pass === true){
            document.querySelector('#dom').classList.remove('awaitingPass')
            document.querySelector('#dom').classList.add('cleared')
        }
        if(res.data[0].absolute_unit_pass === true){
            document.querySelector('#absoluteUnit').classList.remove('awaitingPass')
            document.querySelector('#absoluteUnit').classList.add('cleared')
        }
        if(res.data[0].numpy_pass === true && res.data[0].rogan_pass === true && res.data[0].dom_pass === true){
            document.querySelector('#absoluteUnit').classList.remove('locked')
        }
    })
    .catch(err => {
        console.log(err) 
        alert('uh oh something went wrong')
    })

}


getProgress()
document.querySelector('#infoButton').addEventListener('click', openInfo)
// document.querySelector('.background').addEventListener('mouseover', playMusic)
// muteBtn.addEventListener('click', muteUnmute)
// console.log(sessionStorage.getItem('starting'))
if(sessionStorage.getItem('starting') === 'false'){
    goToMap()
}
document.querySelector('#safeHouse').addEventListener('click', function() {
    document.querySelector('#safeHouse').classList.add('transition');
    console.log('working on it boss')
})
document.querySelector('#campaign').addEventListener('click', goToMap)
document.querySelector('#numpy').addEventListener('click', goToBattle)
document.querySelector('#rogan').addEventListener('click', goToBattle)
document.querySelector('#dom').addEventListener('click', goToBattle)
document.querySelector('#absoluteUnit').addEventListener('click', goToBattle)
document.querySelector('#safeHouse').addEventListener('click', ()=>{window.location.href='./SafeHouse.html'})
document.querySelector('#safeHouseDice').addEventListener('click', ()=>{window.location.href='./SafeHouse.html'})

