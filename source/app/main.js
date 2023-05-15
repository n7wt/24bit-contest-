// Прелоадер
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
// ----

// lang-switcher
const switcher = document.querySelector(".language-switch");

switcher.addEventListener("click", function () {
  const active = switcher.querySelector(".active");
  const ru = switcher.querySelector(".ru");
  const ch = switcher.querySelector(".ch");

  if (active === ru) {
    ru.classList.remove("active");
    ch.classList.add("active");
  } else {
    ch.classList.remove("active");
    ru.classList.add("active");
  }
});

// autoplay
const myVideo = document.getElementById("video_chechnya");

window.addEventListener("load", function () {
  myVideo.play();
});
// ----

// autoscroll
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
// ----

// title animation
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
// -------

// email validation / modal-window

const emailInput = document.querySelector(".subscribe__input");
const subscribeButton = document.querySelector(".subscribe__button");

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

subscribeButton.addEventListener("click", () => {
  const email = emailInput.value;
  if (isValidEmail(email)) {
    showModal("Поздравляю! Вы успешно подписались на рассылку.");
  } else {
    showModal("Почта недействительна! Попробуйте заново.");
  }
});

function showModal(message, isSuccess) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const contentClass = isSuccess
    ? "modal__content--success"
    : "modal__content--error";
  modal.innerHTML = `<div class="modal__content ${contentClass}">
                        <p class="modal__message">${message}</p>
                        <button class="modal__close-button">Закрыть</button>
                      </div>`;
  document.body.appendChild(modal);
  const closeButton = modal.querySelector(".modal__close-button");
  closeButton.addEventListener("click", () => {
    modal.remove();
  });
}
// -----
