let btnReview = document.querySelector(".btnReview");
let btnDelete = document.querySelector(".btnDelete");
let textAreaBox = document.getElementById("textAreaBox");
let paraReviewBox = document.querySelector(".paraReviewBox");

btnReview.addEventListener("click", () => {
  paraReviewBox.innerHTML = textAreaBox.value + "<br>";
  textAreaBox.value = "";
});

btnDelete.addEventListener("click", () => {
  paraReviewBox.innerHTML = "";
});


let cardBody = document.querySelector('.card-body');
let cardTitle = document.querySelector('h2');
let cardTitle2 = document.querySelector('.card-title2');
let btnDark = document.querySelector('.btnDark');
let btnLight = document.querySelector('.btnLight');

btnDark.addEventListener('click', () => {
    cardBody.style.backgroundColor = "black";
    cardTitle.style.color = "white";
    cardTitle2.style.color = "white"
    paraReviewBox.style.color = "white"
})

btnLight.addEventListener('click', () => {
    cardBody.style.backgroundColor = "";
    cardTitle.style.color = "";
    cardTitle2.style.color = ""
    paraReviewBox.style.color = "black"
})