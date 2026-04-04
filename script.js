// Floating hearts
for (let i = 0; i < 15; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
}

const images = ["bubu1.webp", "bubu2.webp", "bubu3.webp"];

images.forEach((src, index) => {
    let img = document.createElement("img");
    img.src = src;
    img.className = "bubu";

    // Fixed starting positions
    if (index === 0) {
        img.style.top = "10%";
        img.style.left = "5%";
    } else if (index === 1) {
        img.style.top = "70%";
        img.style.left = "10%";
    } else {
        img.style.top = "20%";
        img.style.right = "5%";
    }

    document.body.appendChild(img);

    moveSmooth(img);
});

// Smooth floating movement
function moveSmooth(el) {
    setInterval(() => {
        let x = (Math.random() * 40) - 20; // small movement
        let y = (Math.random() * 40) - 20;

        el.style.transform = `translate(${x}px, ${y}px)`;
    }, 2000);
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
