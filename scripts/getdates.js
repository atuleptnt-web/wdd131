/ Get the current year using the Date object
const currentYear = new Date().getFullYear();

// Output the copyright year and message in the first paragraph of the footer
document.getElementById("footerCopyright").innerHTML =
  `&copy; ${currentYear} — Note this CodePen ☼ JavaScript Date Object summary of using the Date object in different ways.`;

// Output the last modified date in the second paragraph of the footer
document.getElementById("lastModified").innerHTML = document.lastModified;
