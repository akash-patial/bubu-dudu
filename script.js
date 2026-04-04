const textEl = document.getElementById("text");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// Hide buttons initially
yesBtn.style.display = "none";
noBtn.style.display = "none";

// 🐼 Dudu's apology
const duduMessages = [
  "Hey Bubu... 🐻",
  "It's me... your Dudu 🐼",
  "I know I hurt you 😔",
  "And I'm really really sorry...",
  "You mean everything to me 💕",
  "Please don't stay mad at me 🥺",
  "Will you forgive me?"
];

let i = 0;
let j = 0;
let current = "";

// Typing effect (Dudu)
function typeDudu() {
  if (i < duduMessages.length) {
    if (j < duduMessages[i].length) {
      current += duduMessages[i][j];
      textEl.innerHTML = current;
      j++;
      setTimeout(typeDudu, 40);
    } else {
      current += "<br><br>";
      j = 0;
      i++;
      setTimeout(typeDudu, 600);
    }
  } else {
    // Show buttons after message
    yesBtn.style.display = "inline-block";
    noBtn.style.display = "inline-block";
  }
}

typeDudu();

// 😈 Moving NO button
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// 💖 Floating hearts
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// 🐻 Bubu's reply
yesBtn.onclick = () => {
  textEl.innerHTML = "";

  const bubuMessages = [
    "Dudu... 🐼",
    "I was really hurt 😔",
    "But I know your heart is good...",
    "You are still my cute Dudu 💕",
    "I forgive you 🥺",
    "But don't repeat it again 😤❤️",
    "Come here... 🫂",
    "I love you 💖🐻🐼"
  ];

  let i = 0;
  let j = 0;
  let current = "";

  function typeBubu() {
    if (i < bubuMessages.length) {
      if (j < bubuMessages[i].length) {
        current += bubuMessages[i][j];
        textEl.innerHTML = current;
        j++;
        setTimeout(typeBubu, 40);
      } else {
        current += "<br><br>";
        j = 0;
        i++;
        setTimeout(typeBubu, 600);
      }
    }
  }

  typeBubu();

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
};