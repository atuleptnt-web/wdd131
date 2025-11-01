const currentYear = new Date().getFullYear();
document.getElementById("footerCopyright").innerHTML =
  `&copy; ${currentYear} Paul Tetteh Nerquaye-Tetteh 🇬🇭 Ghana<br>Note this CodePen ☼ JavaScript Date Object summary of using the Date object in different ways.`;

document.getElementById("lastModified").innerHTML =
  `Final Modification: ${document.lastModified}`;