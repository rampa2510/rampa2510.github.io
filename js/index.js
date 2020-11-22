/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function fadeOut(elem, ms) {
  if (!elem) return;

  if (ms) {
    var opacity = 1;
    var timer = setInterval(function () {
      opacity -= 50 / ms;
      if (opacity <= 0) {
        clearInterval(timer);
        opacity = 0;
        elem.style.display = "none";
        elem.style.visibility = "hidden";
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacty=" + opacity * 100 + ")";
    }, 50);
  } else {
    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.display = "none";
    elem.style.visibility = "hidden";
  }
}
function onLoad() {
  fadeOut(document.getElementById("preloader"), 400);
}

function scrollToSection(event, section, isMenu = false) {
  if (supportsSmoothScrolling()) {
    return;
  }
  event.preventDefault();
  const scrollToElem = document.getElementById(section);
  SmoothVerticalScrolling(scrollToElem, 300, "top");
  if (isMenu) closeNav();
}

function supportsSmoothScrolling() {
  const body = document.body;
  const scrollSave = body.style.scrollBehavior;
  body.style.scrollBehavior = "smooth";
  const hasSmooth = getComputedStyle(body).scrollBehavior === "smooth";
  body.style.scrollBehavior = scrollSave;
  return hasSmooth;
}

function SmoothVerticalScrolling(element, time, position) {
  var eTop = element.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, position);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, position) {
  if (position == "center" || position == "") window.scrollBy(0, eAmt / 2);
  if (position == "top") window.scrollBy(0, eAmt);
}

const blogs = [
  {
    link: "https://dev.to/rampa2510/how-to-automate-your-git-workflow-ilh",
    plat: "dev.to",
    title: "How to automate your Git workflow",
  },
  {
    plat: "dev.to",
    title: "3 Tips for new developers",
    link: "https://dev.to/rampa2510/3-tips-for-new-developers-49hj",
  },

  {
    plat: "dev.to",
    title: "An advanced setup for Travis CI",
    link: "https://dev.to/rampa2510/an-advanced-setup-for-travis-ci-3i1d",
  },

  {
    plat: "linkedin.com",
    title:
      "Docker from a beginner's perspective: Understanding some essential commands used in Docker world",
    link:
      "https://www.linkedin.com/pulse/docker-from-beginners-perspective-understanding-some-essential-ram/?trackingId=jC5YX58cB7roLhDybB0cIw%3D%3D",
  },

  {
    plat: "linkedin.com",
    title:
      "How to code a multiple-input handler method in React.js or React-Native",
    link:
      "https://www.linkedin.com/pulse/how-code-multiple-input-handler-method-reactjs-ram-pandey/?trackingId=Yts55EGfJJ1kQqCi7UTHdw%3D%3D",
  },

  {
    plat: "linkedin.com",
    title: "Docker from a beginner's perspective: What, Why and How of Docker?",
    link:
      "https://www.linkedin.com/pulse/docker-101-part-1-what-why-how-ram-pandey/?trackingId=K3V%2Fo9MlCEOpuVX1LbB5Aw%3D%3D",
  },
];

function appendBlog() {
  const ele = document.querySelector(".blog-info");

  blogs.forEach((d) => {
    const pText = document.createTextNode("Platform :- " + d.plat);
    const p = document.createElement("p");
    p.className = "plat";
    p.appendChild(pText);
    const title = d.title.length > 40 ? d.title.substr(0, 40) + "..." : d.title;
    const bText = document.createTextNode("Title :- " + title);
    const b = document.createElement("b");
    b.appendChild(bText);
    const h4 = document.createElement("h4");
    h4.appendChild(b);
    const textDiv = document.createElement("div");
    textDiv.className = "text-cont";
    textDiv.appendChild(h4);
    textDiv.appendChild(p);
    const cardDiv = document.createElement("div");
    cardDiv.className = "card-cont";
    cardDiv.appendChild(textDiv);
    const a = document.createElement("a");
    a.href = d.link;
    a.appendChild(cardDiv);
    const div = document.createElement("div");
    div.className = "col-four";
    div.style = "padding-bottom:20px";
    div.appendChild(a);
    ele.appendChild(div);
  });
}
appendBlog();
