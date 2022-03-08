
function createUser(e){
    e.preventDefault()
    if(document.querySelector('#newUsername').value.length > 14){
        alert('username must be shorter than 14 characters')
        return
    }
    console.log(document.querySelector('#newUsername').value)
    console.log(document.querySelector('#newPassword').value)
    console.log(document.querySelector('#newEmail').value)

    let body={
        username: document.querySelector('#newUsername').value,
        password: document.querySelector('#newPassword').value,
        recovery_email: document.querySelector('#newEmail').value
    }

    axios.post('http://localhost:6969/New_user', body)
    .then(()=>{
         alert('User successfully created')
         document.querySelector('#newUsername').textContent=''
         document.querySelector('#newPassword').textContent=''
         document.querySelector('#newEmail').textContent=''
         location.reload()
     })
    .catch(err => {
        console.log(err) 
        alert('uh oh something went wrong')
    })
    
}
function login(e){
    e.preventDefault()

    let body={
        loginUsername: document.querySelector('#loginUsername').value,
        loginPassword: document.querySelector('#loginPassword').value,
    }
    console.log('getting here')
    axios.post('http://localhost:6969/Login', body)
    .then((res)=>{
         alert('logged in')
         sessionStorage.setItem('user_id', `${res.data.user_id}`)
         sessionStorage.setItem('username', `${res.data.username}`)
         window.location.href='./homepage.html'
     })
    .catch(err => {
        alert('uh oh something went wrong')
        location.reload()
        console.log(err) 
    })
    
}

sessionStorage.setItem('starting', 'true')
document.querySelector('#createForm').addEventListener('submit', createUser)
document.querySelector('#loginForm').addEventListener('submit', login)