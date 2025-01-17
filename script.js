// Countdown Timer
const weddingDate = new Date("2025-02-05T08:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "Selamat Menikah!";
    }
}

const timerInterval = setInterval(updateCountdown, 1000);

// RSVP Form Submission
document.getElementById("rsvp-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Terima kasih atas konfirmasi Anda!");
});