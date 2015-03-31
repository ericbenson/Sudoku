# Sudoku

Creating a Sudoku game

## Team 

- __Project Manager__: [Eric Benson](https://github.com/ericbenson)

## Assignment

1. Create a playable game of Sudoku. 
	Features: 
  -  appealing UI
  -  mobile-friendly
  -  supports multiple browers
  -  can use libraries, but not frameworks
  -  build systems and tests are a big plus
  -  git history to demonstrate progress
  -  detailed readme explaining how to run, technologies used, and technological choices

## Installing Dependencies & Build Process

Running the following commands installs the dependencies

```bash
npm install
bower install
gulp
```

To open, first run gulp, then open then index.html inside the build folder in browser 

## Structure and Technologies Used
  - Used Jade and Sass for html templating and styling
  - Mocha and Chai for testing
  - jQuery for manipulating DOM elements
  - Used browserify.js to enable require statements
  - the main javascript file is index.js. All helper functions are modularized and categorized within the utils folder
  - gulp is used as a task runner and streams files into a build folder which contains the final code 

## Reasoning for Technical Choices Made
  -Used 2-D array as an efficient way to track board state
  -Displayed Sudoku board as nested tables so users can easily understand that the board they are looking at is a Sudoku board
  -Starting numbers are hard-coded into the board so they cannot be changed
  -Implemented changeable numbers on the sudoku board as buttons so users know they can click on the buttons to change number. Buttons highlight on hover to indicate they are clickable. 
  -When changing numbers, put the numpad of possible numbers in the cell that was clicked so mobile users don't have to scroll around to input numbers. 
  -Used all buttons so that users only have to use their mouse and don't need to constantly reposition their hands to use keyboard 
  -Submit button changes color and text on submit to give users feedback on whether they completed the board successfully. 
  -Big technical question was how modular to make the code. I decided to modularize as much as I could to create easily readable files and to facilitate easier testing. However, this involved having to pass parameters between the different modules. 
  -Used jQuery's append and detach methods to update 
  -Text on buttons are based on the initial user selection and not based on the status of the board. Although, it is theoretically possible that the two could become out of sync, the likelihood of this occuring is low and I feel the code is more readable in its current state. 
  -The most confusing file at first glance is renderBoard.js. I thought about modularizing some of this file into smaller sections, but thought that would only add to the confusion.
  -When clicking on a button, the num pad that appears resizes sections of the larger table. I kept this as is so that the buttons are not too small to be clicked, particularly for mobile users. 
  -Added karma testing to gulp file but didn't end up utilizing it. It is commented out of the gulpfile.js but the related files are still part of the respository. 
  -Overall, my focus was to not only create functional code, but modular and readable code. I believe I succeed at both.  

## Changes to be Implemented with More Time
  -Add a hint button if users become stuck
  -Display which cells are incorrect after users submit an attepmt
  -Add CSS animations, particularly after winner submits a correct board
  -Sudoku board generator so that more than one level can be played
  -Track user attempts at each puzzle, and assign users a score based on how quickly they can solve puzzles of a certain difficulty and how many wrong attempts they submit
  -More comprehensive testing suite
  -Allow users to create their own boards and send them to their friends