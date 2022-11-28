
![Nordic mythology Memory Game Welcome](/assets/images/memorygame.jpeg)

# Welcome to Nordic Mythology Memory Game!
#### This website is created to give the user an opportunity to play a flip card memory game with inspering images from the Nordic mythology. It is a game with 8 pairs of images which should be matched. The game is inspired byt the book "Lyktgubben, Skogsfrun och andra väsen" (by Tor Jäger and Jan Jäger) which presents facts and illustrations of nordic mychology creatures for children and young adults. The game could suit any ages.

#### [Deployed site](https://karasp1980.github.io/nordic-mythology-memory-game/)
------

# Table of Contents
+ [Responsove](#responsive)
+ [Wireframes](#wireframes)
+ [Style/design](#style-design)
  + [Background image](#background-image)
  + [Backside card](#backside-card)
  + [Memory cards](#memory-cards)
+ [Features](#features)
  + [Timer](#timer)
  + [Moves](#moves)
  + [Memory game](#memory-game)
  + [Reset button](#reset-button)
  + ["How to play" button](#how-to-play-button)
  + ["How to play" popup window](#how-to-play-popup-window)
  + [Win popup window](#win-popup-window)
+ [Testing](#testing)
+ [Validator testing](#validator-testing)
  + [HTML](#html)
  + [CSS](#css)
  + [JavaScript](#javascript)
  + [Accesibility](#accessability)
+ [Unfixed bugs](#unfixed-bugs)  
+ [Deployment](#deployment)  
+ [Media](#media)  
+ [Credits](#credits)  

-----

## Responsive

#### The Site is made responsive and checked through [Am I responsive](ami.responsivedesign.is)
![Responsive](/assets/images/memoryresponsive.png)

----


## Wireframes

#### Wireframes were made by using [Balsamiq](https://balsamiq.com/)
### **Memory game**

#### Desktop
![Start game](/assets/images/memory-game-desktop-wireframe.jpeg)



#### Mobile
![Start game](/assets/images/memory-game-mobile-wireframe.jpeg)

### **"How to play" popup**

#### Desktop
![Start game](/assets/images/memory-game-desktop-howtoplay.jpeg)

#### Mobile
![Start game](/assets/images/memory-game-mobile-howtoplay.jpeg)

### **"Win message" popup**

#### Desktop
![Start game](/assets/images/memory-game-desktop-win.jpeg)

#### Mobile
![Start game](/assets/images/memory-game-mobile-win.jpeg)



------
## Style/design

#### The colors were chosen in order to have a good contrast between the white and red #A43F2D chosen (+ the groove border) in order to make the site easy to read. The red #A43F2D was also considered to be a good choice for the nordic mythology theme (a bit like the red color commonly used in the Swedish old folclore and traditions: everything from art and clothing to Falu copper red house paint). The readibility was also checked on  [WebAIM](https://webaim.org/resources/contrastchecker) 
![WebAIM contrastchecker](/assets/images/webaim.jpeg)


### **Background image:**
#### The background (from the book "Lyktgubben, Skogsfrun och andra väsen") is chosen to provide a feeling of Nordic mythology and what creatures that hide in the nature without taking to much focus from the game. It should inspire the user to play the game.

![Background image](/assets/images/vasenbakgrund-small.jpg)


### **Backside card:**
#### The backside card is designed (by the illustrator Tor Jäger) to give a clear destinction between fliped cards and the backside card when playing. It is designed to be in the same style as the images in the game and the red background #A43F2D with white text is the same as the color pattern chosen for the game. The icon used is also taken from the book "Lyktgubben, Skogsfrun och andra väsen".

![Backside card](/assets/images/backside.jpg)


### **Memory cards:**
#### All the memory cards (8 images) are taken from the book "Lytkgubben, Skogsfrun och andra väsen" and are chosen to make the user inspired by the art work to inspire to play the game. They are chosen to have different colors and style in order to recognice them when playing the game. They also represent the most famouse creatures from the Nordic mythology:


* Älva (Fairy)

![Fairy](/assets/images/alva.jpg)


* Häxa (Witch)

![Witch](/assets/images/haxa.jpg)


* Jätten (Giant)

![Giant](/assets/images/jatten.jpg)


* Lyktgubben (Alf with lantern)

![Alf with lantern](/assets/images/lyktgubben.jpg)


* Tomten (Alf)

![Alf](/assets/images/tomten.jpg)


* Troll (Troll)

![Troll](/assets/images/troll.jpg)


* Strandvaskaren (The drowning ghost)

![The drowning ghost](/assets/images/strandvaskare.jpg)


* Näcken (The neck)

![The Neck](/assets/images/nacken.jpg)


----

## Features


### **Timer:**
#### The timer starts when the player starts the game, which is when the player clicks the first card. The timer stops when all 8 pairs are found and the total time is also displayed in the Win popup window which shows when the game is over (all 8 pairs are found). The purpose of the timer is to provide the player whith the time info and to encourge the player to find all pairs as fast as possible, and also try to beat the time. It is placed in the top left side of the memory game in order to be seen while playing.
![Timer](/assets/images/timer.jpg)

### **Moves:**
#### The move detects the number of moves the player makse (one move = clicking two cards). The purpose of the move counter is to provide the player whith the info and to encourge the player to find all pairs in as few moves as possible, and also try to beat the number. It is placed in the top right side of the memory game in order to be seen while playing.
![Moves](/assets/images/moves.jpg)

### **Memory game:**
#### The memory game is created to be inspiring and easy to play. You click two cards at a time (the game does not aloud clicking more than two cardd at a time) which then make a flip and shows the memory cards underneath the backside-card. If there is a match (same two cards) the cards stay open and the player can make a new move, but if there is no match the cards flip back again (after 1s, in order to give the player enough time to memorize the cards) and the player can make a new move. The game is over when all 8 pairs are found.
![Memory game board](/assets/images/memory-game-box.jpg)


### **Reset button:**
#### The reset button resets the whole game when clicked, which means the timer, moves counter is reset to 0 and the memory game is reset from start to be ready (and the cards are shuffled) to start a new game. The button is placed in the bottom left side of the memory game. The purpose of the button is to make it easy for the player to reset the game and start over again.
![Reset button](/assets/images/reset-button.jpg)

### **"How to play" button:**
#### When clicking the "How to play" button a popup window should appear with short description on how to play the game. It is placed slightley over the Memory game in order to be easy to locate. 

!["How to play"-button](/assets/images/how-to-play-button.jpg) 



### **"How to play" popup window**
#### When clicking the "How to play" button a popup window should appear with short description on how to play the game. It has a closing x button in the upper right corner for the user to easily find to close the window.

!["How to play" popup window](/assets/images/how-to-play-popup.jpeg)

### **"Win" popup window**
#### When the player has finished a game and found all 8 pairs, a win-popup window should appear with a Congratulations message. It also shows the time it took to finish the game and the number of moves in order for the user to beat these scores next time. It has a closing x button in the upper right corner for the user to easily find to close the window.

![Win popup window](/assets/images/win-popup.jpeg)






-------
## Testing

#### I tested that the site worked in different browsers: Google Chrome, Firefox, Edge

#### I confirmed that this project is responsive, looks good and functions on all standard screen sizes using the devtools device toolbar. The site has been tested on different physical devices: desktop, laptop, tablet and mobile.

#### I confirmed that the site index.html with the game is readable and easy to understand.

#### I confirmed that the game will only accept two clicks (at two different memory cards) at a time (=one move) and also not accept a double click on the same card.

------

## Validator testing

### HTML:
#### No errors were returned when passed through the official W3C validator
[W3 validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkarasp1980.github.io%2Fnordic-mythology-memory-game%2F)

![W3 validator](/assets/images/w3validator.jpeg)

### CSS:
#### No errors were returned when style.css passed through the official W3C validator.
[Jigsaw W3 validator for style.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkarasp1980.github.io%2Fnordic-mythology-memory-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)

![Jigsaw W3 validator](/assets/images/jigsawCssValidator.jpeg)

### JavaScript:
#### No errors were returned when style.css passed through the official W3C validator.
[JSHint](https://jshint.com)

![JSHint](/assets/images/jshint.jpg)

### Accessability:
#### I confirmed that the colors and fonts chosen are easy to read and accesible through lighthouse in devtools.

![Lighthouse performance](/assets/images/lighthouse.jpeg)


-----

## Unfixed bugs

#### No unfixed bugs.

-----

## Deployment

#### This site was deployed to Github pages. The steps to deploy are as follows:
* In the Github repository, navigate to the settings tab. 
* From the source section drop-down menu, select the Master branch.
* Once the master branch has been selected, the page provided the link to the completed website. 
The link can be found here: [Deployed site](https://karasp1980.github.io/nordic-mythology-memory-game)

-----

## Media

#### All the images on this page are provided by the illustator Tor Jäger For the social media-links icons [Font Awesome](https://fontawesome.com) has been used. The fonts come from [Google fonts](fonts.google.com).

-----

## Credits

#### The basic structure with the color scheme and the ide of using the images from the book "Lyktgubben, Skogsfrun och andra väsen" (written and illustrated by Tor Jäger and Jan Jäger) is taken from the project 1 [Tor Jäger Illustration](https://github.com/Karasp1980/torjagerillustration). All images (except the front flip card) comes from the book. Furhter material/images (the front flip card) has been provided from the illustrator Tor Jäger who has also given his appproval of using all the material for this project. 
#### Inspiration and help has also come from the Code Institute projects [Love Maths](https://karasp1980-lovemaths-v0k5uya07g9.ws-eu74.gitpod.io/).

#### The following sites has also been helpful:
* [W3Schools](https://www.w3schools.com/) 
* [Marina Ferrerira, GitHub](https://github.com/code-sketch/memory-game) + [youtube tutorial](https://www.youtube.com/watch?v=ZniVgo8U7ek)
* [Iyanuoluwa Odusanya, GitHub](https://riyiike-memorygame-oup61v9vxo5.ws-eu74.gitpod.io/) +[tutorial](https://medium.com/@funkiefabulous003/how-to-build-a-memory-matching-game-in-javascript-fbe0bf9884a2)
* [Alian memory game](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game)
* [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) 

