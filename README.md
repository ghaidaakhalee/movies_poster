
# Movies Website
My idea of project is about simple movies website.
If you like movies, this website will be useful to you, as it provides you with the ability to search for all kinds of movies that you want. Simply type the movie name in the search box, and a list of movies will appear for you. You can add movies to your favorites or watch list later. You can register, log in and log out.
##### You can access the website from here [Movies Website](https://pages.git.generalassemb.ly/ghaidaakhalil/Movies-site/)
#
# Getting Started
### You can access the website from here [Movies Website](https://pages.git.generalassemb.ly/ghaidaakhalil/Movies-site/)
### 1- fork and clone this repo 
```
git clone https://git.generalassemb.ly/ghaidaakhalil/Movies-site 
```
 
#### 2- Go to the project directory terminal to install all dependencies
```
npm install 
```
### 3- To start you should to run :
```
npm start
```
# wireframes
### Tree of componants

<img width="500" height=" 400" alt="tree componant" src="https://media.git.generalassemb.ly/user/33227/files/97342180-559b-11eb-8648-3d8b66e27791">


### Home page
<img width="500" height=" 400" alt="homepage" src="https://media.git.generalassemb.ly/user/33227/files/c0ed4880-559b-11eb-823e-39ca6f85a1b2">

### Movies search page
<img width="500" height=" 400" alt="search" src="https://media.git.generalassemb.ly/user/33227/files/d5c9dc00-559b-11eb-9ff3-923da0c4f91d">


### Favorite page
<img width="500" height=" 400" alt="fav" src="https://media.git.generalassemb.ly/user/33227/files/eb3f0600-559b-11eb-927a-14495411f815">

# Demo
<img width="500" height=" 400" alt="Screenshot_9 home" src="https://media.git.generalassemb.ly/user/33227/files/817d6100-5814-11eb-8168-c8d630948fe9">

<img width="500" height=" 400" alt="search" src="https://media.git.generalassemb.ly/user/33227/files/67aa4100-5849-11eb-9925-456ffcd854ae">

# User Stories:
- As a user , i want to search for the films by its name.
- As a user , i want to see the details of the films.
- As a user, i want to add the films into favorite page.
- As a user, i want to remove one film from favorite page.
- As a user, i want to remove all films from favorite page.
- As a user, i want to add the films into watch later page.
- As a user, i want to add movie watch time in watch later page.
- As a user, i want to creat an account.
- As a user, i want to log in and log out from my account.
#
# Technologies Used In The Project 
- React
- Axios
- JAVASCRIPT
- jQuery library 
- HTML
- Firebase
- Css
- Bootstrap libraries
#
# My Project Plan
- At the beginning, I started designing the structure of the website by using (balsamiq.com) wireframes to know how the website will be, then I divided each section to start work with.
- I started by create  react app ```npx create-react-app my-app```
- After that I started work on app.js then created the componats i needed
- I used the router and the link to move between the pages of the site
- After I finished the basic requirements of the project, I tried to work on the feature of creating a user account and logging in and logging out from the account by using firbase
- After I finished with all the logic and made sure there was no errors, I started working on the website style using CSS and Bootstrap.
# description the method getting movies from API
```
getFilms = (searchUser) => {
    console.log("test function");
    axios

      .get(`https://www.omdbapi.com/?s=${searchUser}&apikey=19c9609`)
      .then((response) => {
        console.log(response.data.Search);
        const moviesList = response.data.Search;

        // if statement (only setState if get response)
        if (moviesList) {
          this.setState({ movies: moviesList }); // update the movies list
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };
```
inside this function i used axios for geting a request from OMDB api . and created a variable to storage the getting request inside it. after that i created if statement to set state of movies array only if gotting a request
# Future features Want Work On
- save the information of the user into local storage 





