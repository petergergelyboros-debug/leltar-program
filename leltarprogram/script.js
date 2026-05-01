function startClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    setInterval(() => {
        const now = new Date();
        
        // Dátum formázása
        dateElement.innerText = now.toLocaleDateString('hu-HU') + " ";
        
        // Idő formázása
        clockElement.innerText = now.toLocaleTimeString('hu-HU');
    }, 1000);
}

startClock();