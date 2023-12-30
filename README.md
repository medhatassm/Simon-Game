# Simon Game

## Overview
Patterns game to test your ability to recall memory

Users should be able to:
 - Press any key to start the game.
 - follow the game sequence to win.
 - if user click wrong sequence that game is over (press any key to start again).

## ScreenShot

![Simon Game](https://github.com/medhatassm/Simon-Game/assets/146084564/1bb53e25-9439-40e6-9538-0839f7d20f3b)

## Link
[Simon Game](https://medhatassm.github.io/Simon-Game/)

## Tools
- HTML
- CSS
- JavaScript
- Jquery

## What i do?
- Using $(document).ready(function(){
  // your code
  });
  To make my game.js not complie before CDN of jquery load complete.
  
- Create var buttonsColors to insert the id of each button in array.
- Create var gamePattren to insert the game random select button ID into array.
- create var userClickPattern to insert the user selected button ID into array.
- create boolen flag to use it to check if game start or not.
- create var level and set it to 0 and make it increse by 1 every time the nextSequence Function excuted.

- Create nextSequence Function and it set userClickPattern array to empty, then increse level variable by 1, and it have randomnumber to select random button by using buttonsColor array, then it animated selected button to have flash animation, and play the button sound as it set.
- Create playSound(name) function that one playsound of selected button even it selected by user or by game, name argument user to get selected button by ID and then play sound as ID button name have.
- Create animatePress(curentColor) function and that make animation using add/remove class from button that selected by user.
- Create CheckAnswer(curentLevel) function it check if gamePattern last index is the same as userClickPattern and if it true then it check for the length of two array are equel or not, and if it false The game is over.
- Create startOver function and it called when game it over in checkAnswer function and it reset (level = 0 , gamePattern = [] , flag = false) to beagin new game by pressing any key.

## What i learn?
- Using TimeOut Function in javaScript.
- Using delay in jquery.
- How to make array useful in my code to make thing easier.
- How to play Media (audio/video) in web project.
- Using jquery animation (fadeIn/fadeOut).
- Using Argument in function to make code readeable.
- Using Math library to make random number and floor it to be integer.

## This project from Dr.Angel Full-Stack web bootcamp course. (but the code by me 😅) Thank for reading.
