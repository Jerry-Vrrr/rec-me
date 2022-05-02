
# Rec-Me

![Screen Shot 2022-04-18 at 5 24 56 PM](https://user-images.githubusercontent.com/92049763/163893003-5bb91e8d-c52a-4ef9-8e07-12a4f8f5a7e2.png)

## Description

Rec-Me is a music discovery app and game aimed at people who are sick of listening to the same music every day!

On page load, the user can view a collection of related artists with a featured artist in the center of the page -- clicking on a related artist  will move that artist to the center featured artist position and update the related artists around them. Clicking on the featured artist will route the user to that artist's details page and will include a bio, music video and list of related artists. 

Users can use the search bar in the header to find an artist by name and discover new artists!

Ready for a challenge? Click the play button on the home page to be assigned a random artist to reach in 6 or less clicks. Each selection will be greeted with a snarky comment from the music gods and a tally of how many turns you have left. Start the game and enjoy the adventure!

Our featured stretch technology for this project incorporated the React Context API to manage and access global state across our application. We primarily used this in managing our data from our APIs and tracking our game. 

## Motivation
- Gain an understanding of global state management in React
- Utilize acceptance and E2E testing of site and asynchronous JavaScript with Cypress
- Create a multi-page application with React Router

## Technology Stack
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![React Context](https://img.shields.io/badge/react_context-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
- ![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

## Deployment
This site is deployed on Heroku and cab be found [here](https://rec-me.surge.sh/)!
Alternatively, this repo can be cloned to your local machine. run `npm i` before running `npm start`.

## Features

### Main Dashboard

On page load the user will see a random featured artist and related artist bubbles. Users can also use the search bar to search for a specific artist. 

![rec-me-main-dash-demo](https://user-images.githubusercontent.com/92049763/163893175-3c53da44-fb0b-4c1d-a481-b52d40718436.gif)

![rec-me-search-demo](https://user-images.githubusercontent.com/92049763/163893229-b86c48f2-92b4-4b85-870c-5e276f5ee727.gif)

<details>
  <summary>Under the Hood</summary>
  Artist data is fetched from the TasteDive API while the artist images are fetched from the BandsInTown API. On each search submit, a new fetch is triggered. 
</details>
</br>

### Single Artist Detail

When a user clicks on the center featured artist on the main dashboard, they are routed to a page with the information on that specific artist with a unique URL.

![rec-me-single-artist-demo](https://user-images.githubusercontent.com/92049763/163893278-4f503410-1933-4732-8568-44e4d6c4d514.gif)

<details>
  <summary>Under the Hood</summary>
  Single artist's are retrieved using the fetch API and interpolating an artist's name into the URL. The site's URL is also changed to reflect that individual artist's name via React Router. Users can bookmark this URL to return to later!
</details>
</br>

### Let's play a game!

A user can start the game by pressing the 'Lets play a game' button on the homepage. This switches the main page into game-mode. Users are given a random artist to try 
to reach in 6 moves or less. Users are told how many turns are left and given motivational messages to keep going!

![rec-me-game-demo](https://user-images.githubusercontent.com/92049763/163893455-68e3e260-4f0b-4410-96aa-22b8b59cdeac.gif)

<details>
  <summary>Under the Hood</summary>
 Game state is tracked via the React Context API which allows users to see the turn count and whether they win or lose. We have a custom array for game goal artists that are most likely to be recognized. 
</details>
</br>

### Testing

Rec-Me is fully end-to-end tested with Cypress. URLs are tested and network requests are stubbed.

## Future Additions
- Incorporate a favorites mechanism so user's can favorite artists and save them to a list
- Create customized user playlists
- Search and filter by genre
- Improve site accessibility
- Add a randomizer feature to allow user's to re-shuffle the current artist without reloading the page

## Credits
Authors: [Maddie Law](https://github.com/maddielaw) [Eric Matlock](https://github.com/ermatlock) [Jerry Vohrer](https://github.com/Jerry-Vrrr) [Katie Ammon](https://github.com/kammon10)

Project spec -> [here](https://frontend.turing.edu/projects/module-3/stretch.html)

[Turing School of Software and Design's GitHub](https://github.com/turingschool-examples)

