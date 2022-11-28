"use strict";

const cards = document.querySelectorAll(".cards__card");

const addHoverEffect = function (element, action) {
  const card = element.target.closest(".cards__card");
  const cardButton = element.target
    .closest(".cards__card")
    .querySelector("input");

  if (action === "add") {
    card.classList.add("card--hover");
    cardButton.style.color = "#242424";
    cardButton.style.background = "linear-gradient(#f6f6f6, #c4c4c4";
  }

  if (action === "reset") {
    card.classList.remove("card--hover");
    cardButton.style.color = "white";
    cardButton.style.background = "linear-gradient(#5899bd, #26668a)";
  }
};

cards.forEach((e) => {
  e.addEventListener("mouseover", function (e) {
    addHoverEffect(e, "add");
  });
});

cards.forEach((e) => {
  e.addEventListener("mouseleave", function (e) {
    addHoverEffect(e, "reset");
  });
});

// cards.forEach((e) => {
//     e.addEventListener("mouseover", function (e) {
//       const card = e.target.closest(".cards__card");
//       const cardButton = e.target.closest(".cards__card").querySelector("input");

//       card.classList.add("card--hover");
//       cardButton.style.color = "#242424";
//       cardButton.style.background = "linear-gradient(#f6f6f6, #c4c4c4";
//     });
//   });

//   cards.forEach((e) => {
//     e.addEventListener("mouseleave", function (e) {
//       const card = e.target.closest(".cards__card");
//       const cardButton = e.target.closest(".cards__card").querySelector("input");

//       card.classList.remove("card--hover");
//       cardButton.style.color = "white";
//       cardButton.style.background = "linear-gradient(#5899bd, #26668a)";
//     });
//   });
