function hplus(points) {
    let homeScore = document.getElementById("homeScore");
    homeScore.innerText = parseInt(homeScore.innerText) + points;
}

function gplus(points) {
    let guestScore = document.getElementById("guestScore");
    guestScore.innerText = parseInt(guestScore.innerText) + points;
}

function reset() {
    document.getElementById("homeScore").innerText = 0;
    document.getElementById("guestScore").innerText = 0;
}
