let rootContainer = document.querySelector(".got-container");
let spinner = document.querySelector(".lds-roller");

// by default  the spinner do not load  but before fetching the data it loads and after fetching data it stops
spinner.style.display = "none";
// creating the spinner  or loader to fetch  the data
function loadSpinner(spin = false) {
  if (spin === true) {
    spinner.style.display = "inline-block";
  } else {
    spinner.style.display = "none";
  }
}

function createUI(data) {
  let container = document.createElement("div");
  container.classList.add("card-container");

  data.forEach((eachBook) => {
    // user Interface for  the  card and books
    let characterCount = eachBook.characters.length;
    let card = document.createElement("div");
    card.classList.add("card");
    let h2 = document.createElement("h2");
    h2.innerText = eachBook.name;
    let p = document.createElement("p");
    p.innerText = eachBook.authors[0];
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("characterContainer");
    let heading = document.createElement("h3");
    heading.innerText = "Characters";
    heading.classList.add("characters-heading");
    characterContainer.append(heading);
    let btn = document.createElement("a");
    btn.innerText = `show character(${characterCount})`;
    btn.classList.add("btn");
    card.append(h2, characterContainer, p, btn);
    container.append(card);

    // now adding the event listner so on card so on  click we wil get the characters data
    btn.addEventListener("click", function () {
      // card width gets 100% so we can see data more clearly
      card.style.flex = " 0  1 100%";
      // showing the character when the click event got triggered
      characterContainer.style.display = "inline-block";
      let span = document.createElement("span");
      span.innerText = "❌";
      characterContainer.append(span);
      // fetching the each character data and displaying it
      eachBook.characters.forEach((character) => {
        fetch(character)
          .then((res) => {
            loadSpinner(true);
            return res.json();
          })
          .then((obj) => {
            // Making the user interface to show data such as name  , gender , in which
            // series  the character is participated  or aliases  for each characters this
            // after fetching the  data from the api we show each user data
            let ul = document.createElement("ul");
            let name = document.createElement("li");
            let gender = document.createElement("li");
            let tvseries = document.createElement("li");
            let aliases = document.createElement("li");
            obj.tvSeries.forEach((season) => {
              tvseries.innerText += ` ${season}`;
            });
            obj.aliases.forEach((cv) => {
              aliases.innerText += `  ${cv}`;
            });
            name.innerText = obj.name;
            gender.innerText = obj.gender;
            ul.append(name, gender, tvseries, aliases);
            characterContainer.append(ul);
            console.log(obj);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            loadSpinner(false);
          });
      });

      // if  the click event trigerred  on the close icon then hide  the character div

      span.addEventListener("click", () => {
        characterContainer.style.display = "none";
        card.style.flex = " 0  1 30%";
      });
    });
    rootContainer.append(container);
  });
}

// fetching the data  to make book cards
function fetchData(url, callBack) {
  let data = fetch(url);
  data
    .then((res) => {
      loadSpinner(true);
      return res.json();
    })
    .then((data) => {
      callBack(data);
      console.log(data);
    })
    .catch((error) => {
      return error;
    })
    .finally(() => {
      loadSpinner(false);
    });
}
fetchData("https://www.anapioficeandfire.com/api/books", createUI);