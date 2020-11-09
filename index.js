var test = new Letterize({
  targets: "#animateMe",
});

var animation = anime.timeline({
  targets: test.listAll(),
  delay: anime.stagger(50),
  loop: true,
});

animation
  .add({
    translateY: -40,
  })
  .add({
    translateY: 0,
  });
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
