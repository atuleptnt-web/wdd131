const currentYear = new Date().getFullYear();
document.getElementById("footerCopyright").innerHTML =
  `&copy; ${currentYear} Paul Tetteh Nerquaye-Tetteh Ghana<br>.`;

document.getElementById("lastModified").innerHTML =
  `Final Modification: ${document.lastModified}`;