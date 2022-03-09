require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const ctrl = require('./controller')
const path = require('path')

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "../Client")))

// app.get('/seed', ctrl.seed)

///////////ENDPOINTS 
app.post('/Dot-Color', ctrl.updateDotColor)
app.post('/Dice-Color', ctrl.updateDiceColor)
app.post('/Custom-Dice', ctrl.getCustomDice)
app.post('/Unlocks', ctrl.checkUnlocked)
app.post('/New_User', ctrl.createUser)
app.post('/Login', ctrl.login)
app.put('/Change_Username', ctrl.changeUsername)
app.delete('/Delete_User', ctrl.deleteProfile)
app.put('/Update_Progress', ctrl.updateProgress)
app.get('/Get_Progress', ctrl.getProgress)
app.get('/Get_Stats', ctrl.getStats)
app.put('/Add_Lie', ctrl.addLie)
app.put('/Add_Lie_Called', ctrl.addLieCalled)
app.put('/Add_Win', ctrl.addWin)
app.put('/Add_Loss', ctrl.addLoss)


app.listen(SERVER_PORT, ()=> console.log(`up on ${SERVER_PORT}`))
