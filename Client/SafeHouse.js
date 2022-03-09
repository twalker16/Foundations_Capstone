let user_id = sessionStorage.getItem('user_id')
console.log(sessionStorage.getItem('user_id'))
function giveTextbox(e){
    e.preventDefault()
    if(!!document.getElementById('usernameInput')===true){
        document.querySelector('input').remove()
        document.querySelector('#submit').remove()
    }
    let usernameInput = document.createElement('input')
    let submitBtn = document.createElement('button')
    usernameInput.type = 'text'
    usernameInput.placeholder = 'New Username'
    usernameInput.id='usernameInput'
    submitBtn.id ='submit'
    submitBtn.textContent = 'Submit'
    document.querySelector('#change').appendChild(usernameInput)
    document.querySelector('#change').appendChild(submitBtn)
    document.querySelector('#change').addEventListener('submit', changeUsername)
}
function changeUsername(e){
    e.preventDefault()
    console.log('changing name')
    let body = {
        newUsername: document.querySelector('#usernameInput').value,
        user_id: sessionStorage.getItem('user_id')
        }
        console.log(document.querySelector('#usernameInput').value)
        axios.put('http://localhost:6969/Change_Username', body)
        .then(res=>{
            console.log(res)
            getCustomDice()
            document.querySelector('#usernameInput').value = ''
            document.querySelector('#submit').remove()
            document.querySelector('#usernameInput').remove()
        })
        .catch(err => console.log(err))
}
function areYouSure(e){
    e.preventDefault()
    let background = document.createElement('div')
    let textHolder = document.createElement('div')
    let yesBtn = document.createElement('button')
    let cancelBtn = document.createElement('button')
    background.id="areYouSureBG"
    textHolder.id="areYouSureText"
    textHolder.textContent="Are You Sure?"
    yesBtn.id="yes"
    yesBtn.textContent="Yes"
    cancelBtn.id="cancel"
    cancelBtn.textContent="Cancel"
    
    document.querySelector('#areYouSure').appendChild(background)
    document.querySelector('#areYouSureBG').appendChild(textHolder)
    document.querySelector('#areYouSureBG').appendChild(yesBtn)
    document.querySelector('#areYouSureBG').appendChild(cancelBtn)
    document.querySelector('#yes').addEventListener('click', deleteUser)
}
function deleteUser(e){
    e.preventDefault()
    axios.delete(`http://localhost:6969/Delete_User`, {
        params:{
            id: sessionStorage.getItem('user_id')
        }
    })
    .then(
        alert(`${sessionStorage.getItem('username')} has been deleted`),
        window.location.href='./Login.html'
    )
    .catch(err => console.log(err))
}
function changeDiceColor(e){
    e.preventDefault()
    // alert(`the id of the element that you clicked is ${this.id}`)
    if(document.querySelector(`#${this.id}`).classList.contains('locked') === false){
        let body = {
            face: `${this.id}DiceFace`,
            side: `${this.id}DiceSide`,
            user_id: sessionStorage.getItem('user_id')
        }
        axios.post('http://localhost:6969/Dice-Color', body)
        .then(()=>{
            document.querySelector('#diceSide').classList = `${this.id}DiceSide`
            document.querySelector('#diceFace').classList = `${this.id}DiceFace`
        })
        .catch(err => console.log(err))
        
    }else{
        alert('You have not unlocked this option yet.')
    }
    
}
function changeDotColor(e){
    e.preventDefault
    let body = {
        dot: `${this.id}`,
        user_id: sessionStorage.getItem('user_id')
    }
    // alert(`the id of the element that you clicked is ${this.id}`)
    if(document.querySelector(`#${this.id}`).classList.contains('locked') === false){
        axios.post('http://localhost:6969/Dot-Color', body)
        .then(()=>{
            for(let i =0; i < document.querySelectorAll('#dot').length; i++){
                document.querySelectorAll('#dot')[i].classList = `${this.id}`
            }
        })
        .catch(err => console.log(err))
        
    }else{
        alert('You have not unlocked this option yet.')
    }
    
}
function getCustomDice(){
    let body = {
        user_id: sessionStorage.getItem('user_id')
    }
    axios.post('http://localhost:6969/Custom-Dice', body)
    .then(res =>{
        res.data.forEach(elem=>{
            for(let i =0; i < document.querySelectorAll('#dot').length; i++){
                document.querySelectorAll('#dot')[i].classList = `${elem.dice_dot}`
            }
            document.querySelector('#diceSide').classList = `${elem.dice_side}`
            document.querySelector('#diceFace').classList = `${elem.dice_face}`
            document.querySelector('#username').textContent=`${elem.username}`
        })
    })
}
function getUnlocked(){
    let body = {
        user_id: sessionStorage.getItem('user_id')
    }
    axios.post('http://localhost:6969/Unlocks', body)
    .then(res =>{
        res.data.forEach(elem=>{
            if(elem.numpy_pass === true){
                document.querySelector('#nft1').classList.remove('locked')
                document.querySelector('#nft1Dot').classList.remove('locked')
            }
            if(elem.rogan_pass === true){
                document.querySelector('#nft2').classList.remove('locked')
                document.querySelector('#nft2Dot').classList.remove('locked')
            }
            if(elem.dom_pass === true){
                document.querySelector('#nft3').classList.remove('locked')
                document.querySelector('#nft3Dot').classList.remove('locked')
            }
            if(elem.absolute_unit_pass === true){
                document.querySelector('#nft4').classList.remove('locked')
                document.querySelector('#nft4Dot').classList.remove('locked')
            }
            if(elem.joe_pass === true){
                document.querySelector('#nft5').classList.remove('locked')
                document.querySelector('#nft5Dot').classList.remove('locked')
            }
            if(elem.duloc_pass === true){
                document.querySelector('#nft6').classList.remove('locked')
                document.querySelector('#nft6Dot').classList.remove('locked')
            }
        })
    })
}
function goToCampaign(){
    window.location.href='./homepage.html'
    sessionStorage.setItem('starting', false)
}
function getStats(){
    axios.get(`http://localhost:6969/Get_Stats`, {
        params:{
            id: sessionStorage.getItem('user_id')
        }
    })
    .then(res=>{
        document.querySelector("#WLUD").textContent=(String((Math.floor((res.data[0].user_wins) / (res.data[0].user_wins + res.data[0].user_losses) * 100))/100))
        document.querySelector("#CBUD").textContent=(String((Math.floor((res.data[0].user_lies/res.data[0].user_lies_called)*100))/100))
        document.querySelector("#BPUD").textContent=(String(res.data[0].user_wins + res.data[0].user_losses))
    })
    .catch(err => {
        console.log(err) 
        alert('uh oh something went wrong')
    })
}

// console.log(document.querySelector('#red'))
getStats()
getUnlocked()
getCustomDice()
document.querySelector('#leave').addEventListener('click', goToCampaign)
document.querySelector('#changeUsername').addEventListener('click', giveTextbox)
document.querySelector('#deleteProfile').addEventListener('click', areYouSure)
document.querySelector('#tan').addEventListener('click', changeDiceColor)
document.querySelector('#red').addEventListener('click', changeDiceColor)
document.querySelector('#blue').addEventListener('click', changeDiceColor)
document.querySelector('#green').addEventListener('click', changeDiceColor)
document.querySelector('#yellow').addEventListener('click', changeDiceColor)
document.querySelector('#purple').addEventListener('click', changeDiceColor)
document.querySelector('#orange').addEventListener('click', changeDiceColor)
document.querySelector('#pink').addEventListener('click', changeDiceColor)
document.querySelector('#white').addEventListener('click', changeDiceColor)
document.querySelector('#grey').addEventListener('click', changeDiceColor)
document.querySelector('#nft1').addEventListener('click', changeDiceColor)
document.querySelector('#nft2').addEventListener('click', changeDiceColor)
document.querySelector('#nft3').addEventListener('click', changeDiceColor)
document.querySelector('#nft4').addEventListener('click', changeDiceColor)
document.querySelector('#nft5').addEventListener('click', changeDiceColor)
document.querySelector('#nft6').addEventListener('click', changeDiceColor)
document.querySelector('#blackDot').addEventListener('click', changeDotColor)
document.querySelector('#redDot').addEventListener('click', changeDotColor)
document.querySelector('#blueDot').addEventListener('click', changeDotColor)
document.querySelector('#greenDot').addEventListener('click', changeDotColor)
document.querySelector('#yellowDot').addEventListener('click', changeDotColor)
document.querySelector('#purpleDot').addEventListener('click', changeDotColor)
document.querySelector('#orangeDot').addEventListener('click', changeDotColor)
document.querySelector('#pinkDot').addEventListener('click', changeDotColor)
document.querySelector('#whiteDot').addEventListener('click', changeDotColor)
document.querySelector('#greyDot').addEventListener('click', changeDotColor)
document.querySelector('#nft1Dot').addEventListener('click', changeDotColor)
document.querySelector('#nft2Dot').addEventListener('click', changeDotColor)
document.querySelector('#nft3Dot').addEventListener('click', changeDotColor)
document.querySelector('#nft4Dot').addEventListener('click', changeDotColor)
document.querySelector('#nft5Dot').addEventListener('click', changeDotColor)
document.querySelector('#nft6Dot').addEventListener('click', changeDotColor)
// if(!!document.getElementById('areYouSureBG')===true){
//     document.querySelector('#yes').addEventListener('click', deleteProfile)
// }