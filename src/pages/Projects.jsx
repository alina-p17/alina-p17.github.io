import React from "react";
import Project from "../components/Project";

const Projects = () => {
  let counter = 0;
  return (
    <div>
      <h4 className="projects-page-title">
        take a look at my <span>PROJECTS</span>
      </h4>
      <div className="projects-page-div">
        <Project
          counter={counter++}
          projectImgSrc="/images/hangman_game.png"
          projectTitle="The Hangman Game"
          projectText="The Hangman is a simple JavaScript project about guessing letters from A to Z to form a words. The player has to find the word by selecting a letter each time. If the player guesses the right letter that is within the word, the letter appears at its correct positions. If the player finds the word in certain amount of chances he wins, otherwise, if he fails to complete the word then the game is over."
          focusOn=" HTML | CSS | JavaScript | ES6 Modules | ES6 Classes"
        />
        <Project
          counter={counter++}
          projectImgSrc="/images/rock_paper_scissors.png"
          projectTitle="Rock paper scissors"
          projectText="Rock, paper, scissors  is a simple fun game in which both the players have to choose one option among the rock, paper and scissors. It has three possible outcomes a draw,  a win or a loss . I've implemented the game using JavaScript where a player will be playing against the computer.  A random option will be generated from the computer’s side."
          focusOn="  HTML | CSS | JavaScript + ES6 | DOM Manipulation"
        />
        <Project
          counter={counter++}
          projectImgSrc="/images/monsters_game.png"
          projectTitle="Monsters Game"
          projectText=" I've implemented a game in which the user must uses the arrow keys to help Mario move in order to reach the door and escape the monsters. If Mario encounters a monster the number of his lives decreases. The users has 3 chances to win the game."
          focusOn=" ES6 Modules |  ES6 Classes | OOP "
        />
        <Project
          counter={counter++}
          projectImgSrc="/images/digital_timer.png"
          projectTitle="Digital Timer"
          projectText=" The implementation of a digital timer to which I've added the start, stop, reset and save functionalities using JavaScript."
          focusOn=" JavaScript + ES6 , DOM Manipulation, Web APIs "
        />
        <Project
          counter={counter++}
          projectImgSrc="/images/bmi_calculator.png"
          projectTitle="BMI calculator"
          projectText=" You can use this calculator to check your body mass index (BMI) and find out if you're a healthy weight. You can enter the weight and height and then see the result printed on the screen. The result will tell you which weight-group category you fall into."
          focusOn=" JavaScript | DOM Manipulation "
        />
        <Project
          counter={counter++}
          projectImgSrc="/images/API-calls.png"
          projectTitle="Random Pictures Generator"
          projectText=" Are you a cat person or a dog person? Eitherway you can have some fun with this small project which shows you random picture of your favourite pet."
          focusOn=" HTML | CSS | JavaScript+ES6 | AJAX | API calls "
        />
        <Project
          counter={counter++}
          projectImgSrc="/images/spaceships.png"
          projectTitle="Spaceships"
          projectText="  This project was my first encounter with ES6  Modules and ES6 Classes.  The user can choose between different types of spaceships that  can then be moved in all directions with arrow keys."
          focusOn=" ES6 Modules |  ES6 Classes "
        />
        <Project
          counter={counter++}
          projectImgSrc="/images/comment_box.png"
          projectTitle="Comment Box"
          projectText="   I've implemented a comment box  that displays a list of comments. The user is able to add new comments and to delete old ones. "
          focusOn=" HTML5 |  CSS3 | JavaScript - DOM Manipulation "
        />
        <Project
          counter={counter++}
          projectImgSrc="/images/comment_box.png"
          projectTitle="Travel website"
          projectText="  In this project I've created a website with a travel theme. The purpose of the project was to practice my HTML and CSS skills. This project involved working with HTML / HTML5 elements (adding images, links, paragraphs, form, nav, section, main, etc.) and also focus on the style."
          focusOn=" HTML5 elements | CSS3 Flexbox layout, media queries (Responsive Web Design) "
        />
      </div>
    </div>
  );
};

export default Projects;
