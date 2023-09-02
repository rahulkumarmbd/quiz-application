# Quiz Application
Test your knowledge with this interactive quiz application! You have 30 minutes to answer 15 questions. After completing the quiz, you can check your score and analyze your attempts.

### Tech Stack: Next JS 13, React JS, and Redux Js
Github repo link:- https://github.com/rahulkumarmbd/quiz-application
Production deployment link:- https://quiz-application-nextjs.netlify.app/

## Home Screen
Here users have to fill in details like first name, last name and email address to start the quiz

<img width="1436" alt="image" src="https://github.com/rahulkumarmbd/quiz-application/assets/87120020/e37f9fbf-9de9-4fa9-9f91-3a94fff340dc">

## Quiz Screen
Here user can select one option for the given question. On the right side of the problem, you can go to any question corresponding to its number by clicking on it. 

* Circular Buttons: Used to represent individual questions.
* Pink Buttons: Indicate that a question has been visited but not answered.
* Orange Buttons: Show that a question has been answered.
* Grey Buttons: Indicate that a question hasn't been visited.
* Blue Highlight: Shows the currently selected/question being viewed.

In the top-right corner, there's a timer displaying the remaining time out of the allocated 30 minutes. Once the timer runs out or when the user chooses to click the 'Submit All' button, the application will gather all the attempted and unattempted answers. Afterwards, it will automatically redirect the user to the reports page, where they can review their performance and see the results of their quiz or questionnaire.

<img width="1440" alt="image" src="https://github.com/rahulkumarmbd/quiz-application/assets/87120020/63135dcf-0dc9-4daa-a117-b371e97bcc45">

## Report Screen
In the table, you can track the number of questions you have attempted as well as those you have not attempted, along with their corresponding correct answers. Your score out of 15 is calculated based on this information.

<img width="1439" alt="image" src="https://github.com/rahulkumarmbd/quiz-application/assets/87120020/ecfa77e5-bb6f-44af-a328-27e6b31b7058">

## How to set up this application in your local environment.
Clone this GitHub repo in your local environment [Github Repo](https://github.com/rahulkumarmbd/quiz-application). After cloning run `npm i` to install the required npm packages and then run `npm run dev` to start the development server. Go to any browser and visit `http://localhost:3000` then you will be able to see the application in the working mode in your local environment.

## Quiz Application - Project Approach

### Home Screen
- **Objective**: Create a user authentication form where users enter their email addresses.
- **Implementation**: 
  - Designed a form on the home screen ("/" route) using Next.js.
  - Built the form by creating Button and TextInput components.
  - Authentication is handled by Auth.jsx component.

### Quiz Screen
- **Objective**: Display 15 questions on the quiz screen.
- **Implementation**: 
  - Fetched questions from the API provided in the document.
  - Stored questions in Redux for reusability.
  - Created Question.jsx for displaying each question's problem statement and Option.jsx for displaying answer options.
  - Combined these components in Problem.jsx to show complete questions.
  - Implemented a navigation panel to allow users to switch between questions.
  - Designed circular buttons using NavigationButtonsGrid.jsx and ProblemNavigation.jsx.
  - Used Redux to store properties like isVisited and selectedAnswer to track user interactions.
  - Added features for navigating to the previous or next question and for submitting the quiz.
  - Utilized dynamic URLs ("/quiz/1") to indicate the current question number.

### Report Page
- **Objective**: Show a table summarizing user performance in the quiz.
- **Implementation**: 
  - Gathered information from the quiz screen to create a table.
  - Developed a Table.jsx component, including TableHead.jsx and TableBody.jsx components.
  - Integrated this component into the reports route page.jsx to display the table on "/reports".
  - The table provides details on attempted and unattempted questions, correctness, and the user's total score out of 15.


