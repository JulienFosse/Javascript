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

/////// Changer d'image en bas /////////////////

var image1 = document.querySelector(".image1");
var image2 = document.querySelector(".image2");
var image3 = document.querySelector(".image3");
var imgbas = document.querySelector(".imgbas");
var imgbas2 = document.querySelector(".imgbas2");
var h2mychoice = document.querySelector(".h2imgbas");
var h2choicecomputer = document.querySelector(".h2imgbas2");
var resultath2 = document.querySelector(".resultath2");
var h2points = document.querySelector(".h2points");

var source = [
  "./Images/ciseaux.gif",
  "./Images/pierre.jpg",
  "./Images/feuille.jpg"
];

var noms = ["ciseaux", "pierre", "feuille"];

image1.addEventListener("click", function() {
  imgbas.setAttribute("src", "./Images/ciseaux.gif");
  var random = Math.floor(Math.random() * Math.floor(3));
  imgbas2.setAttribute("src", source[random]);
  mychoice = "ciseaux";
  console.log(mychoice);
  choicecomputer = noms[random];
  console.log(choicecomputer);
  h2mychoice.textContent = mychoice;
  h2choicecomputer.textContent = choicecomputer;
  resultat();
});

image2.addEventListener("click", function() {
  imgbas.setAttribute("src", "./Images/pierre.jpg");
  var random = Math.floor(Math.random() * Math.floor(3));
  imgbas2.setAttribute("src", source[random]);
  mychoice = "pierre";
  console.log(mychoice);
  choicecomputer = noms[random];
  console.log(choicecomputer);
  h2mychoice.textContent = mychoice;
  h2choicecomputer.textContent = choicecomputer;
  resultat();
});

image3.addEventListener("click", function() {
  imgbas.setAttribute("src", "./Images/feuille.jpg");
  var random = Math.floor(Math.random() * Math.floor(3));
  imgbas2.setAttribute("src", source[random]);
  mychoice = "feuille";
  console.log(mychoice);
  choicecomputer = noms[random];
  console.log(choicecomputer);
  h2mychoice.textContent = mychoice;
  h2choicecomputer.textContent = choicecomputer;
  resultat();
});

///////// changer 2eme image //////////////////////////////////////////

var mychoice = "";
var choicecomputer = "";

function resultat() {
  if (mychoice === choicecomputer) {
    resultath2.textContent = "Egalité";
  }

  if (mychoice === "pierre" && choicecomputer === "ciseaux") {
    resultath2.textContent = "victoire";
  } else if (mychoice === "ciseaux" && choicecomputer === "feuille") {
    resultath2.textContent = "victoire";
  } else if (mychoice === "feuille" && choicecomputer === "pierre") {
    resultath2.textContent = "victoire";
  } else if (mychoice === "pierre" && choicecomputer === "feuille") {
    resultath2.textContent = "Défaite";
  } else if (mychoice === "ciseaux" && choicecomputer === "pierre") {
    resultath2.textContent = "Défaite";
  } else if (mychoice === "feuille" && choicecomputer === "ciseaux") {
    resultath2.textContent = "Défaite";
  }
}
