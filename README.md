
# Rec-Me

###screenshot here

## Description

Rec-Me is a music discovery app and game aimed at people who are sick of the same music every day. 

On page load, the user can view a collection of related artists with a featured artist in the center of the page -- clicking on a a related artist  will move that artist to the featured artis position and update the related artists around them. Clicking on the featured artist will route the user to that artist's details page and will include a bio, music video and list of related artists. 

Use the search bar in the header to find an artist by name and discover new artists!

Ready for a challenge? Click the play button on the home page to be assigned a random artist to reach in 6 or less clicks on related artists. Each selection will be greeted with a snarky comment from the music gods and a tally of how many turns you have left. Start the game and enjoy the adventure!

Our featured stretch technology for this project incorporated the React-context-api to manage and access global state across our application.
We primaraly used this in managing our data from our API's and tracking our game. 
## Motivation
- Gain an understanding of global state management in React
- Utilize acceptance and E2E testing of site and asynchronous JavaScript with Cypress
- Create a multi-page application with React Router

## Technology Used
- ![React Context](https://img.shields.io/badge/react_context-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)


## Deployment
This site is deployed on [insert location here] pages and can be found [here](coming soon!)
Alternatively, the repo can be cloned to your local machine. run 'npm i' before running 'npm start'

## Features
the main page displaying a search bar and featuring artists in bubbles. The single artist page and the game.
### Main Dashboard

On page load the user will see a random featured artist and related artist bubbles. Users can also use the search bar to search for a specific artist. 

![main_page](comming soon)

<details>
  <summary>Under the Hood</summary>
  artist data is fetch from the tastDive API while the artist images are fetched from the bands in town API. On search submit, a new fetch is triggered. 
</details>
</br>

### Single Artist Detail

When a user clicks on the featured artist, on the main dashboard they are routed to a page with the information on that specific artist with a unique URL.

![single_Artist_View](comming soon)

<details>
  <summary>Under the Hood</summary>
  Single artist are retrieved using the fetch API and interpolating a artits name into the URL. The site's URL is also changed to reflect that individual artits's name via React Router. Users can bookmark this URL to return to later!
</details>
</br>

### Game feature

A user can start the game by pressing the 'lets play a game' button on the homepage. This switches the main page into game mode. Users are given a random artist to try 
to reach in 6 moves or less. Users are told how many turns are left and given motivational messages to keep going!

![Game_View](https://user-images.githubusercontent.com/92049763/161648886-ae3cb6ca-e3d1-4e2b-9e06-85cbfbd999b1.gif)

<details>
  <summary>Under the Hood</summary>
 Game state is tracked via the context API which allows users to see the turn count and whether they win or loose. We have a custom array with for goal artists that are most likely to 
 be recognized. 
</details>
</br>

### Testing

Rec-Me is fully end-to-end tested with Cypress. URLs are tested and network requests are stubbed.

## Future Additions
- favorite mechenism so users can favorite and save artists.
- make playlists based on genre

## Credits
Authors: [Maddie Law](https://github.com/maddielaw) [Eric Matlock](https://github.com/ermatlock) [Jerry Vohrer](https://github.com/Jerry-Vrrr) [Katie Ammon](https://github.com/kammon10)

Project spec -> [here](https://frontend.turing.edu/projects/module-3/stretch.html)

[Turing School of Software and Design's GitHub](https://github.com/turingschool-examples)

