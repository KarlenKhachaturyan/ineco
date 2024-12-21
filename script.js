const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    if (id) {
      const target = document.getElementById(id);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  });
});

const myID = document.getElementById("scrollup");
const header = document.querySelector("header");
myID.addEventListener("click", () => {
  header.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
});

const myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 400) {
    myID.className = "show";
  } else {
    myID.className = "hide";
  }
};

window.addEventListener("scroll", myScrollFunc);
