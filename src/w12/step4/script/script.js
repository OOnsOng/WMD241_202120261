let elemBody = document.body;
elemBody.style.backgroundColor = "#00ff00";
let container = document.querySelector(".container");
let cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.dataset.nth = i + 1;
  eachCard.addEventListener("click", function (evt) {
    container.dataset.selected = evt.currentTarget.dataset.nth;
    // "엄마 저 몇 째에요~!";
  });
}
// // let aCard = document.querySelector(".card");
// // aCard.addEventListener("click", function () {
// //   console.log("클릭!");
// //   // aCard.style.backgroundColor = '#ff0000';
// //   aCard.classList.toggle("card--state-clicked");
// //   console.log(aCard.classList);
// // });

// // document.querySelectorAll('.card');
// let cards = document.querySelectorAll(".card");
// console.log(cards);
// for (let i = 0; i < cards.length; i++) {
//   let eachCard = cards[i];
//   eachCard.addEventListener("click", function () {
//     eachCard.classList.toggle("card--state-clicked");
//   });
// }
// // cards.forEach(eachCard) => {
// //   eachCard.addEventListener("click", function() {});
// // });
