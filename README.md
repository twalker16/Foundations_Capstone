# Foundations Capstone Project: Numbered Fun Throwables


## About:
Numbered Fun Throwables is a browser based game of liar's dice. Through the campaign of the game, you must face 3 mini bosses before unlocking the ability to challange the final boss atop of Dev Mountian. Through beating bosses you unlock customization options for your dice that you can equip at your "Safe House".


## Tech Stack:
### Languages:
#### JavaScript
##### HTML
##### CSS
##### PostgreSQL
### Dependencies:
#### axios
###### bcrpytjs
###### cors
###### dotenv
###### express
###### pg
###### pg-hstore
###### sequelize

## Features/Walkthrough:
### Create account/Log in
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/Login.JPG?raw=true)
### Hompage
#### Animations/transitions 
(clicking "Campaign" will lead you to your map)
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/Homepage.JPG?raw=true)
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/Map.JPG?raw=true)
#### Click info button at the top right for rules
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/howToPlay.JPG?raw=true)
### Battles
#### Click Cup to roll dice and begin game
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/NumpyPreRoll.JPG?raw=true)
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/Rolling%20Animation.JPG?raw=true)
#### The player's customized dice appear in the top left
#### The enemy is going to make the first bet
#### Player's possible bets display will update with bets you are allowed to counter with
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/numpyMakingBets.JPG?raw=true)
#### There are another 3 different enemies with custom lines of banter and fonts, I'm only showing the other two mini bosses for now
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/ThrowRogan.JPG?raw=true)
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/Dom.JPG?raw=true)
#### Player makes their counter-bet
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/UpdatedBets-makingbet.JPG?raw=true)
note: I can only screenshot so fast, so the following screenshots are from several different rounds.
#### Enemy reads back player's bet before deciding what to do.
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/yourBetBackToYou.JPG?raw=true)
#### Gameplay loop continues until either the player or their enemy calls liar
#### After calling liar, no more bets are placed and the enemy's dice are revealed in the top right corner
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/call%20you%20a%20liar.JPG?raw=true)
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/Liar%20Called%20Condition.JPG?raw=true)
#### Losing will prompt the player with the option to play again or return to the campaign map
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/Try%20Again.JPG?raw=true)
#### Winning will bring players back to the campain map, and update the battle area as glowing yellow signifying completion
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/updatedMap.JPG?raw=true)
### Safe House
#### Safe House is where the player goes to customize their dice, change thier username, or delete their account if they want to do so.
#### Beating bosses grant you with more customization options. You collect their "NFTs" to be displayed on your dice either as a background or their character model as the dots on the die.
#### Safe House in future builds will also host stats of player W/L, games played, how often they get caught lying, etc.
![alt text](https://github.com/twalker16/Foundations_Capstone/blob/main/ReadMePhotos/SafeHouse.JPG?raw=true)
