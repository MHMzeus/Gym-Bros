//https://www.youtube.com/watch?v=5Qo_vyN8bsM
var mavButton = document.getElementById("mavAudio1");

function playMavAudio(audioId) {
    var mavAudio = document.getElementById(audioId);
    mavAudio.play();
}

// Link configuration
const buttonLinks = document.querySelectorAll("a[href]");

if (mavButton) {
    mavButton.addEventListener("canplaythrough", () => {
        buttonLinks.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const href = btn.getAttribute("href");
                setTimeout(() => {
                    window.location = href;
                }, mavButton.duration * 650);
            });
        });
    });
}