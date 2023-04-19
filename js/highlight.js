const redMorooze = document.querySelector(".red_morooze");
const blueMorooze = document.querySelector(".blue_morooze");

redMorooze.addEventListener("click", function() {
    redMorooze.classList.add("highlight");
    blueMorooze.classList.remove("highlight");
});

blueMorooze.addEventListener("click", function() {
    blueMorooze.classList.add("highlight");
    redMorooze.classList.remove("highlight");
});