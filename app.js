var button = document.querySelector("button");
var h1 = document.querySelector("h1");

function changename() {
  h1.textContent = "Odin";
  console.log("ok");
}

button.addEventListener("click", function() {
  changename();
});

//// CHANGER D'IMAGE///////////////////////////////////////////

var button = document.querySelector(".button2");
var img = document.querySelector("img");

function changeimg() {
  console.log(img.getAttribute("src"));
  // getAttibute permet de recuperer la valeur d'un attribut

  if (img.getAttribute("src") === "./Images/jacouille.jpg") {
    img.setAttribute("src", "./Images/françois-pignon.jpg");
  } else {
    img.setAttribute("src", "./Images/jacouille.jpg");
  }
}

button.addEventListener("click", function() {
  changeimg();
});

//// Valeur random///////////////////////////////////////////
//// Creer une function qui renvoie soit 0, 1 ou 2.

var button = document.querySelector(".random");
var h3 = document.querySelector("h3");

function getRandomInt() {
  console.log(Math.floor(Math.random() * Math.floor(3)));
  h3.textContent = Math.floor(Math.random() * Math.floor(3));
}

button.addEventListener("click", function() {
  getRandomInt();
});

/////// PIERRE FEUILLE CISEAUX /////////////////

var image1 = document.querySelector(".image1");
var image2 = document.querySelector(".image2");
var image3 = document.querySelector(".image3");
var imgbas = document.querySelector(".imgbas");
var imgbas2 = document.querySelector(".imgbas2");
var h2mychoice = document.querySelector(".h2imgbas");
var h2choicecomputer = document.querySelector(".h2imgbas2");
var resultath2 = document.querySelector(".resultath2");
var h2pointsmy = document.querySelector(".resultatmoi");
var h2pointscomputer = document.querySelector(".resultatcomputer");

var source = ["./Images/feu.jpg", "./Images/eau.jpg", "./Images/plante.jpg"];

var noms = ["Feu", "Eau", "Plante"];

image1.addEventListener("click", function() {
  imgbas.setAttribute("src", "./Images/feu.jpg");
  var random = Math.floor(Math.random() * Math.floor(3));
  imgbas2.setAttribute("src", source[random]);
  mychoice = "Feu";
  console.log(mychoice);
  choicecomputer = noms[random];
  console.log(choicecomputer);
  h2mychoice.textContent = mychoice;
  h2choicecomputer.textContent = choicecomputer;
  resultat();
  scoref();
  console.log(score);
  h2pointsmy.textContent = score;
  h2pointscomputer.textContent = scorecomputer;
});

image2.addEventListener("click", function() {
  imgbas.setAttribute("src", "./Images/eau.jpg");
  var random = Math.floor(Math.random() * Math.floor(3));
  imgbas2.setAttribute("src", source[random]);
  mychoice = "Eau";
  console.log(mychoice);
  choicecomputer = noms[random];
  console.log(choicecomputer);
  h2mychoice.textContent = mychoice;
  h2choicecomputer.textContent = choicecomputer;
  resultat();
  scoref();
  console.log(score);
  h2pointsmy.textContent = score;
  h2pointscomputer.textContent = scorecomputer;
});

image3.addEventListener("click", function() {
  imgbas.setAttribute("src", "./Images/plante.jpg");
  var random = Math.floor(Math.random() * Math.floor(3));
  imgbas2.setAttribute("src", source[random]);
  mychoice = "Plante";
  console.log(mychoice);
  choicecomputer = noms[random];
  console.log(choicecomputer);
  h2mychoice.textContent = mychoice;
  h2choicecomputer.textContent = choicecomputer;
  resultat();
  scoref();
  console.log(score);
  h2pointsmy.textContent = score;
  h2pointscomputer.textContent = scorecomputer;
});

///////// changer 2eme image //////////////////////////////////////////

var mychoice = "";
var choicecomputer = "";

var score = 0;
var scorecomputer = 0;

function resultat() {
  if (mychoice === choicecomputer) {
    resultath2.textContent = "Egalité";
  }

  if (mychoice === "Feu" && choicecomputer === "Eau") {
    resultath2.textContent = "Défaite";
  } else if (mychoice === "Feu" && choicecomputer === "Plante") {
    resultath2.textContent = "Victoire";
  } else if (mychoice === "Eau" && choicecomputer === "Feu") {
    resultath2.textContent = "Victoire";
  } else if (mychoice === "Eau" && choicecomputer === "Plante") {
    resultath2.textContent = "Défaite";
  } else if (mychoice === "Plante" && choicecomputer === "Feu") {
    resultath2.textContent = "Défaite";
  } else if (mychoice === "Plante" && choicecomputer === "Eau") {
    resultath2.textContent = "Victoire";
  }
}

function scoref() {
  if (resultath2.textContent === "Victoire") {
    score++;
  } else if (resultath2.textContent === "Défaite") {
    scorecomputer++;
  }
}
