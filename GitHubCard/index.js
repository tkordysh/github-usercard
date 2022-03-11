import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/tkordysh")
  .then(res => {
    document.querySelector(".cards").appendChild(cardMaker(res.data));
  })
  .catch(err => {
    console.error(err);
  })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(res => {
    document.querySelector(".cards").appendChild(cardMaker(res.data));
  })
  .catch(err => {
    console.error(err);
  })
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(gitObj) {

  // instantiating elements 
  const gitCard = document.createElement("div");
  const gitImg = document.createElement("img");
  const gitInfo = document.createElement("div");
  const gitName = document.createElement("h3");
  const gitUserName = document.createElement("p");
  const gitLocation = document.createElement("p");
  const gitProfile = document.createElement("p");
  const gitLink = document.createElement("a");
  const gitFollowers = document.createElement("p");
  const gitFollowing = document.createElement("p");
  const gitBio = document.createElement("p");

  //setting class names, attrs, text 
  gitCard.classList.add("card");
  gitInfo.classList.add("card-info");
  gitName.classList.add("name");
  gitUserName.classList.add("username");

  gitImg.src = gitObj.avatar_url;
  gitName.textContent = gitObj.name;
  gitUserName.textContent = gitObj.login;
  gitLocation.textContent = gitObj.location;
  gitProfile.textContent = "Profile";
  gitLink.textContent = "Link to profile";
  gitLink.href = gitObj.html_url;
  gitFollowers.textContent = `Followers: ${gitObj.followers}`;
  gitFollowing.textContent = `Following: ${gitObj.following}`;
  gitBio.textContent = gitObj.bio;


  //setting hierarchy 
  gitCard.appendChild(gitImg);
  gitCard.appendChild(gitInfo);
  gitInfo.appendChild(gitName);
  gitInfo.appendChild(gitUserName);
  gitInfo.appendChild(gitLocation);
  gitInfo.appendChild(gitProfile);
  gitProfile.appendChild(gitLink);
  gitInfo.appendChild(gitFollowers);
  gitInfo.appendChild(gitFollowing);
  gitInfo.appendChild(gitBio);

  //returning card markup

return gitCard;

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
