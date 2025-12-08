export const sites = [
  {
    id: 1,
    name: "Cape Coast Castle",
    region: "Central",
    type: "Historical",
    img: "images/capecoast.png",
    alt: "Cape Coast Castle exterior",
    description: "A UNESCO World Heritage site, once a major hub of the transatlantic slave trade.",
    expect: "Guided tours, historical exhibits, and a sobering reflection on Ghana’s past."
  },
  {
    id: 2,
    name: "Kakum National Park",
    region: "Central",
    type: "Natural",
    img: "images/Kakum_National_Park_bridge.png",
    alt: "Canopy walkway at Kakum National Park",
    description: "A lush rainforest reserve famous for its canopy walkway.",
    expect: "Walk among treetops, spot wildlife, and enjoy eco-tourism activities."
  },
  {
    id: 3,
    name: "Mole National Park",
    region: "Northern",
    type: "Natural",
    img: "images/Mole_National_Park_from_the_viewing_platform.png",
    alt: "Elephants at Mole National Park",
    description: "Ghana’s largest wildlife refuge, home to elephants, antelopes, and over 300 bird species.",
    expect: "Safari drives, walking tours, and close encounters with wildlife."
  },
  {
    id: 4,
    name: "Kwame Nkrumah Memorial Park",
    region: "Greater Accra",
    type: "Historical",
    img: "images/Kwame_Nkrumah_memorial.png",
    alt: "Kwame Nkrumah Memorial Park",
    description: "Ghana’s largest wildlife refuge, home to elephants, antelopes, and over 300 bird species.",
    expect: "Safari drives, walking tours, and close encounters with wildlife."
  },
  {
    id: 5,
    name: "Elmina Castle",
    region: "Northern",
    type: "Historical",
    img: "images/Elmina_Castle.png",
    alt: "Elmina Castle",
    description: "Ghana’s largest wildlife refuge, home to elephants, antelopes, and over 300 bird species.",
    expect: "walking tours,personal experience, and close encounters with history."
  },
  {
    id: 6,
    name: "Boti Falls",
    region: "Eastern",
    type: "Natural",
    img: "images/Boti_falls.png",
    alt: "Waterfalls at Bati falls",
    description: "Naturally, the star of a visit to Boti is the waterfall. During the rainy season, the high pressure creates double waterfalls which are said to be “male” and “female”. The two meet in a “mating ritual” in a splash of rainbows and rushing water. Legend has it this is the spot for people who want to have twins.",
    expect: "hike, walking tours, and waterfall."
  }
];

// Burger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
  nav.classList.toggle('open');
});


// Display function
function displaySites(filteredSites) {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  filteredSites.forEach(site => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${site.img}" alt="${site.alt}" loading="lazy">
      <div class="card-body">
        <h2>${site.name}</h2>
        <p><strong>Region:</strong> ${site.region}</p>
        <p><strong>Type:</strong> ${site.type}</p>
        <p><strong>Description:</strong> ${site.description}</p>
        <p><em>${site.expect}</em></p>
      </div>
    `;

    const img = card.querySelector("img");
    img.onerror = () => {
      img.src = "images/placeholder.png";
      img.alt = "Image not available";
    };

    container.appendChild(card);
  });
}
// Initial load
displaySites(sites);

const form = document.getElementById("filter-form");
const resultsCount = document.getElementById("results-count");
const resetBtn = document.getElementById("reset-filters");

// Handle filter form submit
form.addEventListener("submit", e => {
  e.preventDefault();

  const region = document.getElementById("region").value;
  const type = document.getElementById("type").value;

  const filtered = sites.filter(site => {
    return (region === "all" || site.region === region) &&
           (type === "all" || site.type === type);
  });

  displaySites(filtered);
  resultsCount.textContent = `${filtered.length} site(s) found`;
});

// Handle reset button
resetBtn.addEventListener("click", () => {
  displaySites(sites);
  resultsCount.textContent = `${sites.length} site(s) found`;
});