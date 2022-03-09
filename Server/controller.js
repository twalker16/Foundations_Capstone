require('dotenv').config()
const bcrypt = require('bcryptjs')
// let {user_id} = require('/Client/Login.js') 

const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgress',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})
module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists users;
        drop table if exists progress;

        CREATE TABLE users(
            user_id SERIAL PRIMARY KEY, 
            username VARCHAR(14) NOT NULL, 
            password VARCHAR(10000) NOT NULL,
            recovery_email VARCHAR(20000),
            dice_face VARCHAR(50) DEFAULT 'tanDiceFace',
            dice_side VARCHAR(50) DEFAULT 'tanDiceSide',
            dice_dot VARCHAR(50) DEFAULT 'blackDot',
            user_wins INTEGER DEFAULT 0,
            user_losses INTEGER DEFAULT 0,
            user_lies INTEGER DEFAULT 0,
            user_truths INTEGER DEFAULT 0,
            user_lies_called INTEGER DEFAULT 0
          );
          
          CREATE TABLE progress(
            progress_id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(user_id),
            numpy_pass BOOLEAN DEFAULT false,
            rogan_pass BOOLEAN DEFAULT false,
            dom_pass BOOLEAN DEFAULT false,
            absolute_unit_pass BOOLEAN DEFAULT false,
            joe_pass BOOLEAN DEFAULT false,
            duloc_pass BOOLEAN DEFAULT false
          );
          `)
        .then(()=>{
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    createUser: (req, res)=>{
        const {username, password, recovery_email} = req.body
        let salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        const hashedEmail = bcrypt.hashSync(recovery_email, salt)

        sequelize.query(`INSERT INTO users (username, password, recovery_email)
        VALUES('${username}', '${hashedPassword}', '${hashedEmail}');
        INSERT INTO progress (user_id)
        VALUES((SELECT user_id FROM users WHERE password = ${hashedPassword}))
        `)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    login:(req, res)=>{
        const {loginUsername, loginPassword} = req.body


        sequelize.query(`SELECT username, user_id, password FROM users
        WHERE username = '${loginUsername}'`)
        .then(dbRes=>{
        // console.log(dbRes[0])

        const {password} = dbRes[0][0]
        const exists = bcrypt.compareSync(loginPassword, password)
        // console.log(exists)
        if(exists === true){
            console.log('logged in')
            // sessionStorage.setItem('username', `${loginUsername}`)
            // sessionStorage.setItem('user_id', `${bdRes[0].user_id}`)
            res.status(200).send(dbRes[0][0])
        }else{
            res.status(400).send("User not found.")
        }
        })
    },
    numpyIsTrue: (req, res)=>{
        sequelize.query(`UPDATE progress
        SET numpy_pass = true
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    roganIsTrue: (req, res)=>{
        sequelize.query(`UPDATE progress
        SET rogan_pass = true
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    domIsTrue: (req, res)=>{
        sequelize.query(`UPDATE progress
        SET dom_pass = true
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    absoluteUnitIsTrue: (req, res)=>{
        sequelize.query(`UPDATE progress
        SET absolute_unit_pass = true
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    joeIsTrue: (req, res)=>{
        sequelize.query(`UPDATE progress
        SET joe_pass = true
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    dulocIsTrue: (req, res)=>{
        sequelize.query(`UPDATE progress
        SET duloc_pass = true
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    updateUsername: (req, res)=>{
        const {newUserName} = req.body
        sequelize.query(`UPDATE users
        SET username = ${newUserName}
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    deleteProfile: (req, res)=>{
        const {id} = req.query
        // const {user_id} = body.user_id
        console.log(id)
        console.log(req.query)
        sequelize.query(`DELETE FROM progress
        WHERE user_id = ${id};
        DELETE FROM users
        WHERE user_id = ${id};
        `)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    dulocIsTrue: (req, res)=>{
        sequelize.query(`UPDATE progress
        SET duloc_pass = true
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    updateDotColor: (req, res)=>{
        const {dot, user_id} = req.body
        sequelize.query(`UPDATE users
        SET dice_dot = '${dot}'
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    updateDiceColor: (req, res)=>{
        const {face, side, user_id} = req.body
        console.log('here')
        console.log(face)
        console.log(side)
        console.log(user_id)
        sequelize.query(`UPDATE users
        SET dice_face = '${face}', dice_side = '${side}'
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    getCustomDice: (req, res)=>{
        // console.log(req)
        // console.log(req.query)
        // console.log(req.query.user_id)
        const{user_id} = req.body
        // console.log('look here')
        // console.log(user_id)
        // console.log(user_id)
        sequelize.query(`SELECT dice_dot, dice_face, dice_side, username FROM users
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    checkUnlocked: (req, res)=>{
        const{user_id} = req.body
        sequelize.query(`SELECT numpy_pass, rogan_pass, dom_pass, absolute_unit_pass, joe_pass, duloc_pass FROM progress
        WHERE user_id=${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    changeUsername: (req, res)=>{
        const {newUsername, user_id} = req.body
        console.log('here')
        console.log(newUsername)
        console.log(user_id)
        sequelize.query(`UPDATE users
        SET username = '${newUsername}'
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    updateProgress: (req, res)=>{
        const {user_id, enemyFacing} = req.body
        console.log(user_id)
        console.log(enemyFacing)
        if(enemyFacing === 'numpy'){
            sequelize.query(`UPDATE progress
        SET numpy_pass = true
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
        }else if(enemyFacing === 'rogan'){
            sequelize.query(`UPDATE progress
        SET rogan_pass = true
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
        }else if(enemyFacing === 'dom'){
            sequelize.query(`UPDATE progress
        SET dom_pass = true
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
        }else if(enemyFacing === 'absoluteUnit'){
            sequelize.query(`UPDATE progress
        SET absolute_unit_pass = true
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
        }
    },
    getProgress: (req, res)=>{
        // response.json(req.query)
        const {id} = req.query
        console.log(id)
        sequelize.query(`SELECT numpy_pass, rogan_pass, dom_pass, absolute_unit_pass FROM progress
        WHERE user_id = ${id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    getStats: (req, res)=>{
        const {id} = req.query
        console.log(id)
        sequelize.query(`SELECT user_wins, user_losses, user_lies_called, user_lies FROM users
        WHERE user_id = ${id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    addLie: (req, res)=>{
        const {user_id} = req.body
        sequelize.query(`UPDATE users
        SET user_lies = user_lies + 1
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    addLieCalled: (req, res)=>{
        const {user_id} = req.body
        sequelize.query(`UPDATE users
        SET user_lies_called = user_lies_called + 1
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    addWin: (req, res)=>{
        const {user_id} = req.body
        sequelize.query(`UPDATE users
        SET user_wins = user_wins + 1
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    },
    addLoss: (req, res)=>{
        const {user_id} = req.body
        sequelize.query(`UPDATE users
        SET user_losses = user_losses + 1
        WHERE user_id = ${user_id}`)
        .then(dbRes => {res.status(200).send(dbRes[0])})
        .catch(err => console.log(err))
    }
}
