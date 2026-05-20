const destinations = [
  {
    id: 1, name: "Mt. Samat National Shrine", municipality: "Pilar", category: "Historical Site",
    image: "images/kagitingan.jpg",
    shortDesc: "Iconic WWII memorial atop Mt. Samat featuring the 92-meter Dambana ng Kagitingan cross.",
    fullDesc: "The National Shrine of Valor at Mt. Samat stands as Bataan's most iconic landmark — a solemn tribute to the Filipino and American soldiers who fought and fell in the Battle of Bataan (1942). The towering 92-meter Cross-shaped Dambana ng Kagitingan (Shrine of Valor) offers a panoramic 360° view of the peninsula. An elevator inside the cross takes visitors to an observation deck. The shrine grounds feature the Altar of Valor, heroic murals, and manicured gardens.",
    activities: ["Historical tour", "Hiking", "Photography", "Pilgrimage", "Elevator ride to cross apex"],
    bestTime: "October to May, especially April 9 (Araw ng Kagitingan)",
    fee: "₱20 (adults) · ₱10 (students)",
    hours: "8:00 AM – 5:00 PM daily",
    tip: "Arrive early to beat the heat. The view at golden hour is spectacular. Dress respectfully as this is a sacred heritage site."
  },
  {
    id: 2, name: "Las Casas Filipinas de Acuzar", municipality: "Bagac", category: "Historical Site",
    image: "images/casas.png",
    shortDesc: "An extraordinary open-air heritage resort featuring restored Spanish colonial houses from across the Philippines.",
    fullDesc: "Las Casas Filipinas de Acuzar is one of the Philippines' most unique heritage destinations — a sprawling beachfront resort in Bagac housing meticulously restored 18th and 19th-century Spanish colonial bahay na bato (stone houses) gathered from different provinces. Each house is a living museum of Filipino architectural history. Guests can stay overnight in the heritage houses, take heritage tours, enjoy sunset river cruises on a casco boat, and experience colonial-era Filipino life.",
    activities: ["Heritage walking tour", "Photography", "Overnight stays", "River cruise on casco", "Cultural workshops", "Beach leisure"],
    bestTime: "November to April (dry season, ideal for outdoor tours)",
    fee: "Day tour: ₱800–₱1,500 (varies by package)",
    hours: "Day tours: 10:00 AM – 5:00 PM (reservation required)",
    tip: "Book your tour in advance — walk-ins are limited. The afternoon golden hour makes heritage photography magical. Stay overnight for the full experience."
  },
  {
    id: 3, name: "Pawikan Conservation Center", municipality: "Morong", category: "Adventure",
    image: "images/pawikan-center.jpg",
    shortDesc: "Watch endangered sea turtles nest and release hatchlings on Morong Beach.",
    fullDesc: "The Pawikan Conservation Center at Morong Beach is dedicated to protecting endangered sea turtles (pawikans) — primarily the olive ridley and leatherback species. From November to February, visitors can witness the awe-inspiring spectacle of turtles nesting on the shore at night and participate in hatchling releases at dawn. The center has an educational exhibit, ranger-guided night walks, and a release program that has helped thousands of hatchlings reach the sea.",
    activities: ["Sea turtle watching (Nov–Feb)", "Hatchling release", "Night ranger tours", "Educational exhibit", "Beach walk"],
    bestTime: "November to February (nesting and hatching season)",
    fee: "Free (donations welcome)",
    hours: "Open during nesting season: night watches from 8:00 PM",
    tip: "Register with the conservation center staff before arriving at the beach. Wear dark clothing, avoid flashlights and cameras during turtle nesting — follow ranger instructions strictly."
  },
  {
    id: 4, name: "Dunsulan Falls", municipality: "Pilar", category: "Waterfall",
    image: "images/dunsulan.jpg",
    shortDesc: "A hidden multi-tiered waterfall surrounded by lush tropical rainforest in Pilar.",
    fullDesc: "Dunsulan Falls is one of Bataan's most rewarding natural escapes — a multi-tiered cascade plunging into a cool, refreshing pool deep within the forests of Pilar. The hike to reach the falls takes 30–45 minutes through dense jungle trails, passing through streams and bamboo groves. The reward is a stunning natural swimming hole surrounded by towering trees and the sound of rushing water. The area is pristine and relatively uncrowded.",
    activities: ["Hiking", "Swimming", "Nature photography", "Trekking", "Picnicking"],
    bestTime: "December to May (post-rain = more water, but trails are clearer in dry season)",
    fee: "₱30–₱50 guide fee recommended",
    hours: "6:00 AM – 4:00 PM",
    tip: "Hire a local guide — the trail can be tricky without one. Wear water-resistant footwear and bring a dry bag. Start early to have the falls to yourself."
  },
  {
    id: 5, name: "Sisiman Bay", municipality: "Mariveles", category: "Beach",
    image: "images/lighthouse.jpg",
    shortDesc: "A tranquil cove with calm blue-green waters, ideal for swimming and kayaking.",
    fullDesc: "Sisiman Bay is a hidden gem tucked along the southern tip of the Bataan Peninsula in Mariveles. The bay's calm, protected waters make it perfect for kayaking, paddleboarding, and leisurely swimming. Small beachside cottages and local eateries line the shore, serving the freshest seafood caught the same day. The view of Manila Bay at sunset from Sisiman is one of the most beautiful in the province, with silhouettes of nearby islands and the Cavite coastline in the distance.",
    activities: ["Swimming", "Kayaking", "Paddleboarding", "Fishing", "Seafood dining", "Sunset watching"],
    bestTime: "November to May (calm seas and clear skies)",
    fee: "Free (cottage rental: ₱200–₱500)",
    hours: "Open daily (no set hours)",
    tip: "Visit on weekdays to avoid weekend crowds. Try the fresh tawilis (sardines) at the beachside eateries — they're pan-fried to perfection."
  },
  {
    id: 6, name: "Bataan Death March Markers", municipality: "Province-wide", category: "Historical Site",
    image: "images/zero.jpg",
    shortDesc: "Stone markers tracing the 112km route of the infamous WWII Death March from Mariveles to Tarlac.",
    fullDesc: "The Bataan Death March markers are a series of stone monuments erected along the historic route where approximately 75,000 Filipino and American POWs were forced to march 112 kilometers by Japanese forces in April 1942 — one of the most notorious war crimes of WWII. The markers, spaced every kilometer along the route, serve as solemn reminders of the immense suffering endured. Following the trail is a deeply moving historical experience connecting visitors to one of the Philippines' most significant WWII events.",
    activities: ["Historical walk/drive", "Photography", "Reflection", "Wreath-laying ceremony", "Guided heritage tour"],
    bestTime: "Year-round; most meaningful on April 9 (Araw ng Kagitingan)",
    fee: "Free",
    hours: "Accessible 24/7 (outdoor markers)",
    tip: "Hiring a local historian or guide dramatically enriches the experience. The full route can be done as a driving tour in 3–4 hours. Bring water and sunscreen."
  },
  {
    id: 7, name: "Morong Beach", municipality: "Morong", category: "Beach",
    image: "images/morong.jpg",
    shortDesc: "A long, wide gray-sand beach stretching along Morong's coastline, home to the Pawikan Center.",
    fullDesc: "Morong Beach is one of Bataan's longest stretches of coastline — a wide, gray-sand shore lapped by the South China Sea. Unlike the busy beaches of Subic, Morong remains relatively undeveloped and serene. The beach is the site of the Pawikan Conservation Center and is a nesting ground for endangered sea turtles. Visitors enjoy long beach walks, kite-flying, and fresh seafood at the small establishments along the shore. The sunsets here are dramatic and often overlooked by tourists.",
    activities: ["Beach walking", "Swimming", "Sea turtle watching", "Kite flying", "Seafood dining", "Photography"],
    bestTime: "November to April",
    fee: "Free",
    hours: "Open daily",
    tip: "The beach is best visited early morning or late afternoon. Combine with a visit to the Pawikan Center for a full day trip."
  },
  {
    id: 8, name: "Anvaya Cove Beach & Nature Club", municipality: "Morong", category: "Beach",
    image: "images/anavaya.png",
    shortDesc: "An exclusive private beach club with crystal-clear cove waters and world-class amenities.",
    fullDesc: "Anvaya Cove is Bataan's premier private beach and nature resort, located along a stunning protected cove in Morong. The resort features pristine white sand, calm turquoise water perfect for snorkeling and paddleboarding, luxury accommodations, water sports facilities, golf, and nature trails. Day passes are available for non-members. The cove's visibility is exceptional, making it one of the best snorkeling spots in Central Luzon.",
    activities: ["Swimming", "Snorkeling", "Paddleboarding", "Golf", "Nature hiking", "Water sports", "Beach volleyball"],
    bestTime: "November to May",
    fee: "Day pass: ₱2,000–₱3,500 (varies by season, includes amenities)",
    hours: "Day access: 7:00 AM – 6:00 PM",
    tip: "Book your day pass online in advance — they sell out on peak weekends. The snorkeling is best at high tide; bring your own gear or rent on-site."
  },
  {
    id: 9, name: "Granadero Fortress", municipality: "Mariveles", category: "Historical Site",
    image: "images/granadero.png",
    shortDesc: "Ruins of a Spanish-era fortress in Mariveles with panoramic views of Manila Bay.",
    fullDesc: "The Granadero Fortress is a colonial-era Spanish fortification in Mariveles, built during the 18th century to defend Manila Bay from foreign attacks. Today its ruins sit atop a scenic hilltop offering sweeping views of Manila Bay and the Cavite coastline. The site is of significant historical and archaeological value, predating WWII, and offers a glimpse into Bataan's colonial past before the Japanese occupation. The sunrise view from the fortress is legendary among local photographers.",
    activities: ["Historical exploration", "Photography", "Sunrise viewing", "Hiking", "Picnicking"],
    bestTime: "December to April",
    fee: "Free (local guide: ₱100–₱200 recommended)",
    hours: "Accessible during daylight hours",
    tip: "Go at sunrise for the most dramatic photography conditions. The ruins can be slippery after rain — wear proper footwear."
  },
  {
    id: 10, name: "Mt. Mariveles", municipality: "Mariveles", category: "Mountain",
    image: "images/mt-mariveles.png",
    shortDesc: "A majestic volcanic peaks complex offering challenging trails, scenic views, and the famous Tarak Ridge.",
    fullDesc: "Mt. Mariveles is a massive, dormant stratovolcano dominant at the southern tip of the Bataan Peninsula. It features several peaks, with Tarak Ridge being the most popular destination for seasoned hikers. The trek offers a challenging climb through dense forests, leading to a breathtaking, windy ridge that provides panoramic views of the South China Sea, Corregidor Island, and Manila Bay. It is a favorite among outdoor enthusiasts seeking a rigorous trek and stunning sunset views.",
    activities: ["Hiking & Mountaineering", "Camping", "Photography", "Bird watching", "Stargazing"],
    bestTime: "November to May",
    fee: "Registration fee: ₱40; Guide fees vary (Highly recommended)",
    hours: "Open daily (Pre-registration usually required at the Barangay hall)",
    tip: "Prepare for strong, unpredictable gusts of wind when camping at Tarak Ridge, and make sure to pitch your tent securely with extra stakes."
  },
  {
    id: 11, name: "Balanga Cathedral (St. Joseph Parish)", municipality: "Balanga City", category: "Historical Site",
    image: "images/cathedral-shrine.png",
    shortDesc: "A 17th-century Spanish baroque church at the heart of Balanga City, one of Bataan's oldest.",
    fullDesc: "The Parish Church of Saint Joseph the Worker in Balanga City is one of the oldest churches in Bataan, dating back to the Spanish colonial period. The church's classic baroque architecture, massive stone facade, and ornate interiors reflect centuries of Catholic faith in the region. The church survived the devastation of WWII and remains an active parish and cultural heritage site. Its bell tower offers a view of old Balanga and its adjacent plaza is a social hub.",
    activities: ["Church visit", "Cultural heritage tour", "Photography", "Mass attendance", "Historical study"],
    bestTime: "Year-round",
    fee: "Free",
    hours: "Open daily 6:00 AM – 8:00 PM",
    tip: "Visit during Sunday morning mass for the full cultural experience. Photography inside the church is allowed; be respectful of ongoing services."
  },
  {
    id: 12, name: "Mariveles Food Hub", municipality: "Mariveles", category: "Food Destination",
    image: "images/cactus-jack.jpg",
    shortDesc: "The culinary gateway of Bataan — fresh seafood from Manila Bay at rock-bottom prices.",
    fullDesc: "Mariveles is Bataan's southernmost municipality and a gateway for fresh Manila Bay seafood. The local public market and riverside eateries are famous for serving the day's freshest catch — crabs, prawns, fish, and squid — at prices far lower than Manila. The municipality's proximity to both the sea and the mountains means the food scene combines coastal and highland flavors. Don't miss the grilled pusit (squid) and kare-kareng pugita (octopus in peanut sauce).",
    activities: ["Seafood dining", "Market hopping", "Street food tour", "Cooking class (arranged)", "Local barko (boat) watching"],
    bestTime: "Year-round (freshest catch: early morning market)",
    fee: "Meals from ₱80–₱400 per person",
    hours: "Market: 5:00 AM – 10:00 PM; Eateries: 7:00 AM – 9:00 PM",
    tip: "Arrive early (7–9 AM) for the freshest and cheapest seafood. Haggle politely at the market — it's expected and friendly here."
  }
];

const galleryImages = [
  { src: "images/peninsula.jpg", caption: "Bataan Peninsula" },
  { src: "images/mt-samat.jpg", caption: "Mt. Samat Summit" },
  { src: "images/peak.jpg", caption: "Bataan Mountains" },
  { src: "images/panoypoy.jpg", caption: "Panoypoy Cove" },
  { src: "images/mt-natib.jpg", caption: "Bataan Nature" },
  { src: "images/province-scenery.png", caption: "Province Scenery" },
  { src: "images/bataan-coastline.png", caption: "Bataan Coastline" },
  { src: "images/casas.png", caption: "Las Casas Filipinas de Acuzar" },
  { src: "images/heritage-houses.jpg", caption: "Heritage Houses" },
  { src: "images/colonial-architecture.png", caption: "Colonial Architecture" },
  { src: "images/courtyard.png", caption: "Las Casas Courtyard" },
  { src: "images/saint.png", caption: "Historical Shrine" },
  { src: "images/bahay-na-bato.jpg", caption: "Bahay na Bato" },
  { src: "images/colonial-house.jpg", caption: "Colonial House" },
  { src: "images/kagitingan.jpg", caption: "Mt. Samat National Shrine" },
  { src: "images/valor.jpg", caption: "Shrine of Valor Cross" },
  { src: "images/dambana.jpg", caption: "Dambana ng Kagitingan" },
  { src: "images/shrine-gardens.jpg", caption: "Shrine Gardens" },
  { src: "images/heritage-walk.png", caption: "Heritage Walk" },
  { src: "images/baga-heritage.jpg", caption: "Bagac Heritage" },
  { src: "images/memorial.png", caption: "WWII Memorial" },
  { src: "images/background.jpg", caption: "Bataan Landscape" },
  { src: "images/acuzar-resort.png", caption: "Acuzar Resort" },
  { src: "images/pilar-bataan.JPG", caption: "Pilar, Bataan" },
  { src: "images/bataan-sunset.jpg", caption: "Bataan at Sunset" },
  { src: "images/kairukan.jpg", caption: "Kairukan Falls"},
  { src: "images/ambon-ambon.jpg", caption: "Ambon-Ambon Falls"},
  { src: "images/dunsulan.jpg", caption: "Dunsulan Falls"}
];

window.addEventListener('scroll', () => {
  const mainNav = document.getElementById('mainNav');
  if (mainNav) {
    mainNav.classList.toggle('scrolled', window.scrollY > 60);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  
  const destGrid = document.getElementById('destGrid');
  if (destGrid) {
    renderCards(destinations);
  }

  const selectedDest = document.getElementById('selectedDest');
  if (selectedDest) {
    selectedDest.querySelectorAll('option:not([value=""])').forEach(opt => opt.remove());
    destinations.forEach(d => {
      const o = document.createElement('option');
      o.value = d.name; 
      o.textContent = d.name;
      selectedDest.appendChild(o);
    });
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchVal = e.target.value;
      applyFilters();
    });
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.cat;
      applyFilters();
    });
  });

  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    galleryGrid.innerHTML = '';
    galleryImages.forEach((img, i) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.innerHTML = `
        <img src="${img.src}" alt="${img.caption}" loading="lazy"/>
        <div class="gallery-caption"><span>${img.caption}</span></div>`;
      item.addEventListener('click', () => openLightbox(i));
      galleryGrid.appendChild(item);
    });
  }

  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;

      function validate(id, condition, msgOverride) {
        const el = document.getElementById(id);
        if (!el) return;
        const fb = el.nextElementSibling;
        if (!condition(el.value)) {
          el.classList.add('is-invalid'); 
          el.classList.remove('is-valid');
          if (msgOverride && fb && fb.classList.contains('invalid-feedback')) {
            fb.textContent = msgOverride;
          }
          valid = false;
        } else {
          el.classList.remove('is-invalid'); 
          el.classList.add('is-valid');
        }
      }

      validate('fullName', v => v.trim().length > 1);
      validate('email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
      validate('contactNum', v => /^[0-9\s\-\+\(\)]{7,15}$/.test(v.trim()), 'Contact number must contain numbers only.');
      validate('selectedDest', v => v !== '');
      validate('travelDate', v => v.trim() !== '');
      validate('numVisitors', v => parseInt(v) >= 1);
      validate('message', v => v.trim().length > 5);

      if (valid) {
        // Correctly apply Bootstrap's display utilities
        inquiryForm.classList.add('d-none');
        const formSuccess = document.getElementById('formSuccess');
        if (formSuccess) {
          formSuccess.classList.remove('d-none');
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });

    ['fullName', 'email', 'contactNum', 'selectedDest', 'travelDate', 'numVisitors', 'message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          el.classList.remove('is-invalid', 'is-valid');
        });
      }
    });
  }

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') lbNav(-1);
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'Escape') closeLightbox();
  });
});

function renderCards(list) {
  const grid = document.getElementById('destGrid');
  const noRes = document.getElementById('no-results');
  if (!grid) return;
  
  grid.innerHTML = '';
  if (!list.length) { 
    if (noRes) noRes.style.display = 'block'; 
    return; 
  }
  if (noRes) noRes.style.display = 'none';
  
  list.forEach(d => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 d-flex';
    col.innerHTML = `
      <div class="dest-card w-100">
        <img src="${d.image}" alt="${d.name}" loading="lazy" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Bataan_Province.jpg/400px-Bataan_Province.jpg'"/>
        <div class="dest-overlay">
          <div class="dest-category">${d.category}</div>
          <div class="dest-name">${d.name}</div>
          <div class="dest-municipality">📍 ${d.municipality}</div>
          <div class="dest-fee">Entrance: ${d.fee}</div>
          <button class="btn-details" onclick="openModal(${d.id})">View Details</button>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

let activeFilter = 'All';
let searchVal = '';

function applyFilters() {
  let list = destinations;
  if (activeFilter !== 'All') list = list.filter(d => d.category === activeFilter);
  if (searchVal.trim()) {
    const q = searchVal.toLowerCase();
    list = list.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.municipality.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q)
    );
  }
  renderCards(list);
}

function openModal(id) {
  const d = destinations.find(x => x.id === id);
  if (!d) return;
  
  const modalEl = document.getElementById('destModal');
  if (!modalEl) return;
  
  document.getElementById('modalCategory').textContent = d.category;
  document.getElementById('modalTitle').textContent = d.name;
  
  const mImg = document.getElementById('modalImg');
  mImg.src = d.image;
  mImg.alt = d.name;
  
  document.getElementById('modalMuni').textContent = d.municipality;
  document.getElementById('modalDesc').textContent = d.fullDesc;
  document.getElementById('modalActivities').innerHTML = d.activities.map(a => `<span class="activity-tag">${a}</span>`).join('');
  document.getElementById('modalBestTime').textContent = d.bestTime;
  document.getElementById('modalFee').textContent = d.fee;
  document.getElementById('modalHours').textContent = d.hours;
  document.getElementById('modalTip').textContent = d.tip;
  
  const destModal = new bootstrap.Modal(modalEl);
  destModal.show();
}

let lbIndex = 0;

function openLightbox(i) {
  lbIndex = i;
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lightbox-caption');
  const lb = document.getElementById('lightbox');
  
  if (lbImg && lbCap && lb) {
    lbImg.src = galleryImages[i].src;
    lbCap.textContent = galleryImages[i].caption;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function lbNav(dir) {
  lbIndex = (lbIndex + dir + galleryImages.length) % galleryImages.length;
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lightbox-caption');
  
  if (lbImg && lbCap) {
    lbImg.src = galleryImages[lbIndex].src;
    lbCap.textContent = galleryImages[lbIndex].caption;
  }
}
