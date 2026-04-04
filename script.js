// Floating hearts
for (let i = 0; i < 15; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
}

// Forgive button
function forgive() {
    document.body.innerHTML = `
        <h1 style="color:white; text-align:center; margin-top:40vh;">
            YAYYY 🥰💖 I LOVE YOU!!
        </h1>
    `;
}

// Moving "No" button
function moveBtn(btn) {
    btn.style.position = "absolute";
    btn.style.top = Math.random() * window.innerHeight + "px";
    btn.style.left = Math.random() * window.innerWidth + "px";
}

let music = document.getElementById("bgMusic");
let isPlaying = false;

function toggleMusic() {
    if (!isPlaying) {
        music.play();
        isPlaying = true;
    } else {
        music.pause();
        isPlaying = false;
    }
}
