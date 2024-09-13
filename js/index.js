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
  if (isMenu) closeNav();
  if (supportsSmoothScrolling()) {
    return;
  }
  event.preventDefault();
  const scrollToElem = document.getElementById(section);
  SmoothVerticalScrolling(scrollToElem, 300, "top");
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
      "How to code a multiple-input handler method in React.js or React-Native",
    link: "https://www.linkedin.com/pulse/how-code-multiple-input-handler-method-reactjs-ram-pandey/?trackingId=Yts55EGfJJ1kQqCi7UTHdw%3D%3D",
  },

  {
    plat: "linkedin.com",
    title: "Docker from a beginner's perspective: What, Why and How of Docker?",
    link: "https://www.linkedin.com/pulse/docker-101-part-1-what-why-how-ram-pandey/?trackingId=K3V%2Fo9MlCEOpuVX1LbB5Aw%3D%3D",
  },
  {
    plat: "linkedin.com",
    title: "Debunking Tech Jargons",
    link: "https://www.linkedin.com/pulse/debunking-jargons-backend-development-rest-apis-endpoints-ram-pandey",
  },
  {
    plat: "dev.to",
    title: "Guide to building Multi-Tenant",
    link: "https://dev.to/rampa2510/guide-to-building-multi-tenant-architecture-in-nodejs-40og",
  },
  {
    plat: "dev.to",
    title: "MongoDB Replication Why and How?",
    link: "https://dev.to/rampa2510/mongodb-replication-why-and-how-53c5",
  },
  {
    plat: "dev.to",
    title: "Advice for Intermediate developers",
    link: "https://dev.to/rampa2510/mongodb-replication-why-and-how-53c5",
  },
];

function appendBlog() {
  const ele = document.querySelector(".blog-info");
  ele.style.display = "grid";
  ele.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
  ele.style.gap = "20px";
  ele.style.padding = "20px";

  blogs.forEach((d) => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.style.border = "1px solid #ddd";
    card.style.borderRadius = "8px";
    card.style.padding = "15px";
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    card.style.backgroundColor = "#fff";
    card.style.transition = "transform 0.3s ease-in-out";

    const title = d.title.length > 40 ? d.title.substr(0, 40) + "..." : d.title;

    card.innerHTML = `
      <h4 style="margin-top: 0; color: #333;">${title}</h4>
      <p style="color: #666; font-size: 0.9em;">Platform: ${d.plat}</p>
      <a href="${d.link}" target="_blank" style="display: inline-block; margin-top: 10px; color: #007bff; text-decoration: none;">Read More</a>
    `;

    card.addEventListener("mouseover", () => {
      card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "translateY(0)";
    });

    ele.appendChild(card);
  });
}

// Make sure to call this function after the DOM is loaded
document.addEventListener("DOMContentLoaded", appendBlog);
