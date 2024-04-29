const userNameComplete = document.getElementById('user-complete');
const titleComplete = document.getElementById('title-complete');
const contentComplete = document.getElementById('content-complete');
const backButton = document.querySelector('#back-button');
const themeButtonEl = document.querySelector('#theme-button');
const bodyEl = document.querySelector ('#body');

let isDark = true;

themeButtonEl.addEventListener('click', function () { 
    if (isDark) {
        bodyEl.style.backgroundColor = "#d9e9e8";
        bodyEl.style.color = "#1a1a1a";
        isDark = !isDark;
    } else {
        bodyEl.style.backgroundColor = "#1a1a1a";
        bodyEl.style.color = "#d9e9e8";
        isDark = !isDark;
    }
  });

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "/Users/mdrag/Desktop/Bootcamp/challenge-04/index.html" 
  })

function saveUserResponses() { 
    let userLocal = localStorage.getItem("Username");
    let titleLocal = localStorage.getItem("Title");
    let contentLocal = localStorage.getItem("Content");
    userNameComplete.textContent = userLocal;
    titleComplete.textContent = titleLocal;
    contentComplete.textContent = contentLocal;
    return
  }

  saveUserResponses();
