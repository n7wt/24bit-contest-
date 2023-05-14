window.addEventListener("load", function () {
  var preloader = document.querySelector(".preloader");
  setTimeout(function () {
    preloader
      .querySelector(".preloader-text")
      .classList.add("preloader-fade-out-text");
    preloader
      .querySelector(".preloader-text")
      .classList.remove("preloader-fade-in-text");
  }, 2000);

  preloader.classList.add("show");

  setTimeout(function () {
    preloader.classList.remove("show");
  }, 2000);

  setTimeout(function () {
    preloader.style.display = "none";
  }, 2500);
});

const myVideo = document.getElementById("video_chechnya");

window.addEventListener("load", function () {
  myVideo.play();
});

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

var words = document.getElementsByClassName("word");
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = "letter out";
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = "letter in";
  }, 340 + i * 80);
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

const emailInput = document.querySelector(".subscribe__input");

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function handleInput() {
  if (validateEmail(emailInput.value)) {
    emailInput.style.border = "5px solid #8bc34a";
  } else {
    emailInput.style.border = "2px solid red";
  }
}

emailInput.addEventListener("input", handleInput);
emailInput.addEventListener("focus", () => {
  emailInput.style.outline = "none";
});
emailInput.addEventListener("blur", handleInput);
