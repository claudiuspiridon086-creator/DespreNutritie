function verificaRaspuns(raspuns) {
    const rezultat = document.getElementById("rezultat");

    if (raspuns === "apa") {
        rezultat.textContent = "Corect! 💧 Apa ajută la hidratare!";
        rezultat.style.color = "green";
    } else {
        rezultat.textContent = "Mai încearcă! 😊 Răspunsul corect este apa.";
        rezultat.style.color = "red";
    }
}