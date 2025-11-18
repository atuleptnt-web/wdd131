// Footer date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// Wind Chill Calculation
const temp = 28; // °C
const speed = 10; // km/h

function calculateWindChill(t, s) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

const chillElement = document.getElementById("chill");

if (temp <= 10 && speed > 4.8) {
  const chill = calculateWindChill(temp, speed).toFixed(1);
  chillElement.textContent = `${chill} °C`;
} else {
  chillElement.textContent = "N/A";
}