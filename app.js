/* ==========================================================================
   RMG ELECTRONICS JAVASCRIPT LOGIC
   Handles: SPA Router, Session State, Cart Management, Auth, Admin Controls
   ========================================================================== */

// --- VECTOR ART DESIGN SYSTEM (Dynamic SVG Renderers - Offline Fallbacks) ---
function getProductSVG(type, width = "100%", height = "100%") {
  const styles = `
    .bg { fill: #1a1a1a; }
    .glass { fill: rgba(255,255,255,0.03); stroke: rgba(255,255,255,0.1); }
    .teal-glow { filter: drop-shadow(0 0 8px #00828a); }
    .green-glow { filter: drop-shadow(0 0 8px #10b981); }
    .brand-accent { fill: #00828a; }
    .gold-accent { fill: #d4af37; }
    .red-accent { fill: #ff3d00; }
  `;

  switch(type) {
    case "mobile-teal":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <rect x="35" y="15" width="50" height="90" rx="8" fill="#1e2d2a" stroke="#00828a" stroke-width="1.5" class="teal-glow"/>
          <rect x="38" y="18" width="44" height="78" rx="5" fill="#0b1210"/>
          <rect x="42" y="24" width="16" height="25" rx="3" fill="#15201d" stroke="#00828a" stroke-width="0.75"/>
          <circle cx="50" cy="30" r="4" fill="#000" stroke="#00828a" stroke-width="1"/>
          <circle cx="50" cy="42" r="3" fill="#000" stroke="#00828a" stroke-width="0.5"/>
          <path d="M38 65 C 50 50, 70 85, 82 70 L 82 96 L 38 96 Z" fill="url(#tealGradient)" opacity="0.3"/>
          <defs>
            <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#00828a" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#0b1210" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      `;
    case "mobile-titanium":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <rect x="35" y="15" width="50" height="90" rx="8" fill="#2d2d2a" stroke="#8a8a85" stroke-width="1.5"/>
          <rect x="38" y="18" width="44" height="78" rx="5" fill="#0d0d0d"/>
          <rect x="42" y="22" width="18" height="28" rx="4" fill="#1c1c1b" stroke="#8a8a85" stroke-width="0.5"/>
          <circle cx="51" cy="28" r="3.5" fill="#000" stroke="#8a8a85" stroke-width="0.75"/>
          <circle cx="51" cy="36" r="3.5" fill="#000" stroke="#8a8a85" stroke-width="0.75"/>
          <circle cx="51" cy="44" r="2.5" fill="#000" stroke="#8a8a85" stroke-width="0.5"/>
          <path d="M40 85 C 50 60, 60 90, 80 50" fill="none" stroke="#d4af37" stroke-width="1" opacity="0.4"/>
        </svg>
      `;
    case "mobile-s24":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <rect x="36" y="14" width="48" height="92" rx="3" fill="#202022" stroke="#555559" stroke-width="1.5"/>
          <rect x="39" y="17" width="42" height="86" rx="2" fill="#08080a"/>
          <circle cx="46" cy="24" r="3" fill="#000" stroke="#fff" stroke-width="0.5"/>
          <circle cx="46" cy="32" r="3" fill="#000" stroke="#fff" stroke-width="0.5"/>
          <circle cx="46" cy="40" r="3" fill="#000" stroke="#fff" stroke-width="0.5"/>
          <path d="M39 60 L 81 75 L 81 103 L 39 103 Z" fill="url(#s24Gradient)" opacity="0.25"/>
          <defs>
            <linearGradient id="s24Gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#00828a" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#08080a" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      `;
    case "laptop-silver":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <rect x="25" y="25" width="70" height="46" rx="4" fill="#1f1f21" stroke="#a1a1a6" stroke-width="1"/>
          <rect x="28" y="28" width="64" height="40" rx="2" fill="#080a0f"/>
          <polygon points="15,75 105,75 110,81 10,81" fill="#7a7a7d" stroke="#a1a1a6" stroke-width="0.5"/>
          <rect x="45" y="70" width="30" height="5" fill="#3a3a3b"/>
          <rect x="52" y="76" width="16" height="4" rx="0.5" fill="#5c5c5e"/>
          <ellipse cx="60" cy="48" rx="22" ry="12" fill="#00828a" opacity="0.1" class="teal-glow"/>
        </svg>
      `;
    case "audio-headphones":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <path d="M30 60 A 30 30 0 0 1 90 60" fill="none" stroke="#2c3e50" stroke-width="4.5" stroke-linecap="round"/>
          <path d="M30 60 A 30 30 0 0 1 90 60" fill="none" stroke="#00828a" stroke-width="1.5" stroke-linecap="round" class="teal-glow"/>
          <rect x="20" y="52" width="14" height="24" rx="7" fill="#121212" stroke="#00828a" stroke-width="1.5" class="teal-glow"/>
          <rect x="86" y="52" width="14" height="24" rx="7" fill="#121212" stroke="#00828a" stroke-width="1.5" class="teal-glow"/>
          <path d="M27 52 L 27 60 M 93 52 L 93 60" stroke="#2c3e50" stroke-width="2"/>
        </svg>
      `;
    case "audio-buds":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <rect x="38" y="35" width="44" height="50" rx="14" fill="#1b1b1c" stroke="#00828a" stroke-width="1.5" class="teal-glow"/>
          <rect x="42" y="39" width="36" height="15" rx="5" fill="#0d0d0f"/>
          <circle cx="60" cy="72" r="2.5" fill="#00828a" class="teal-glow"/>
          <circle cx="50" cy="46" r="4" fill="#0b0b0c" stroke="#00828a" stroke-width="0.5"/>
          <circle cx="70" cy="46" r="4" fill="#0b0b0c" stroke="#00828a" stroke-width="0.5"/>
        </svg>
      `;
    case "watch-black":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <rect x="48" y="10" width="24" height="100" rx="3" fill="#252528"/>
          <rect x="38" y="38" width="44" height="44" rx="10" fill="#151516" stroke="#00828a" stroke-width="1.5" class="teal-glow"/>
          <rect x="41" y="41" width="38" height="38" rx="7" fill="#000"/>
          <circle cx="60" cy="60" r="11" fill="none" stroke="#222" stroke-width="2.5"/>
          <circle cx="60" cy="60" r="11" fill="none" stroke="#00828a" stroke-width="2.5" stroke-dasharray="50 70" stroke-linecap="round" class="teal-glow"/>
          <rect x="81" y="52" width="3" height="8" rx="1" fill="#00828a"/>
        </svg>
      `;
    case "tv-oled":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <rect x="15" y="25" width="90" height="58" rx="2" fill="#1b1c1e" stroke="#00828a" stroke-width="1" class="teal-glow"/>
          <rect x="17" y="27" width="86" height="54" rx="1" fill="#030406"/>
          <polygon points="50,83 70,83 75,98 45,98" fill="#4b5563"/>
          <rect x="56" y="83" width="8" height="12" fill="#1f2937"/>
          <circle cx="60" cy="54" r="12" fill="#00828a" opacity="0.1" class="teal-glow"/>
          <path d="M18 70 C 35 60, 50 80, 102 65 L 102 80 L 18 80 Z" fill="#00828a" opacity="0.15"/>
        </svg>
      `;
    case "appliance-purifier":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <rect x="45" y="20" width="30" height="80" rx="6" fill="#f3f4f6" stroke="#2d2d2d" stroke-width="1.5"/>
          <rect x="48" y="23" width="24" height="12" rx="2" fill="#2d3748"/>
          <rect x="49" y="55" width="22" height="38" rx="2" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="0.5"/>
          <circle cx="54" cy="60" r="1" fill="#94a3b8"/>
          <circle cx="60" cy="60" r="1" fill="#94a3b8"/>
          <circle cx="66" cy="60" r="1" fill="#94a3b8"/>
          <circle cx="54" cy="68" r="1" fill="#94a3b8"/>
          <circle cx="60" cy="68" r="1" fill="#94a3b8"/>
          <circle cx="66" cy="68" r="1" fill="#94a3b8"/>
          <circle cx="60" cy="45" r="4.5" fill="#000" stroke="#00828a" stroke-width="0.75" class="teal-glow"/>
        </svg>
      `;
    case "appliance-dyson":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <rect x="25" y="30" width="22" height="15" rx="3" fill="#ff3d00" class="red-glow"/>
          <rect x="22" y="38" width="6" height="24" rx="2" fill="#2d2d2d" transform="rotate(-15 22 38)"/>
          <polygon points="45,26 62,34 58,45 42,42" fill="#6b7280" stroke="#ff3d00" stroke-width="0.5"/>
          <rect x="58" y="34" width="42" height="4" fill="#fbbf24" stroke="#d97706" stroke-width="0.5"/>
          <polygon points="98,24 105,24 105,48 98,48" fill="#1f2937" stroke="#ff3d00" stroke-width="0.5" transform="rotate(30 98 24)"/>
        </svg>
      `;
    case "camera-outline":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <rect x="25" y="35" width="70" height="52" rx="6" fill="#1b1c1e" stroke="#ffffff" stroke-width="1.5"/>
          <rect x="35" y="27" width="22" height="8" rx="2" fill="#121212" stroke="#ffffff" stroke-width="1"/>
          <circle cx="60" cy="61" r="21" fill="#0c0d0f" stroke="#ffffff" stroke-width="1.5"/>
          <circle cx="60" cy="61" r="14" fill="#000" stroke="#00828a" stroke-width="1.5" class="teal-glow"/>
          <circle cx="83" cy="45" r="2.5" fill="#ff3d00" class="red-glow"/>
          <rect x="78" y="31" width="10" height="4" fill="#2c2c2f"/>
        </svg>
      `;
    case "accessory-keyboard":
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <style>${styles}</style>
          <rect x="15" y="42" width="90" height="36" rx="4" fill="#1c1c1f" stroke="#ffffff" stroke-width="1.5"/>
          <rect x="21" y="48" width="8" height="6" rx="1" fill="#2d2d32" stroke="#ffffff" stroke-width="0.5"/>
          <rect x="31" y="48" width="8" height="6" rx="1" fill="#2d2d32" stroke="#ffffff" stroke-width="0.5"/>
          <rect x="41" y="48" width="8" height="6" rx="1" fill="#2d2d32" stroke="#ffffff" stroke-width="0.5"/>
          <rect x="51" y="48" width="8" height="6" rx="1" fill="#2d2d32" stroke="#ffffff" stroke-width="0.5"/>
          <rect x="61" y="48" width="8" height="6" rx="1" fill="#2d2d32" stroke="#ffffff" stroke-width="0.5"/>
          <rect x="71" y="48" width="8" height="6" rx="1" fill="#2d2d32" stroke="#ffffff" stroke-width="0.5"/>
          <rect x="81" y="48" width="18" height="6" rx="1" fill="#00828a" stroke="#ffffff" stroke-width="0.5" class="teal-glow"/>
          <rect x="21" y="58" width="12" height="6" rx="1" fill="#2d2d32" stroke="#ffffff" stroke-width="0.5"/>
          <rect x="36" y="58" width="48" height="6" rx="1" fill="#2d2d32" stroke="#ffffff" stroke-width="0.5"/>
          <rect x="87" y="58" width="12" height="6" rx="1" fill="#2d2d32" stroke="#ffffff" stroke-width="0.5"/>
        </svg>
      `;
    default:
      return `
        <svg width="${width}" height="${height}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="30" width="60" height="60" rx="5" fill="#1b1c1f" stroke="#00828a" stroke-width="2"/>
          <text x="60" y="65" font-family="Arial" font-size="12" fill="#fff" text-anchor="middle">RMG TECH</text>
        </svg>
      `;
  }
}

// --- STATE MANAGEMENT ---
let products = JSON.parse(localStorage.getItem("rmg_products")) || initialProducts;
let cart = JSON.parse(localStorage.getItem("rmg_cart")) || [];
let activeUser = JSON.parse(localStorage.getItem("rmg_user")) || null;
let sessionOrders = JSON.parse(localStorage.getItem("rmg_orders")) || [];

// --- DUMMY CREDENTIALS DB ---
const DEMO_ACCOUNTS = {
  user: { email: "user@rmg.com", pass: "user123", name: "Manik", role: "RMG Member" },
  admin: { email: "admin@rmg.com", pass: "admin123", name: "Administrator", role: "RMG Store Manager" }
};

// --- APP ROUTING & DISPLAY UTILITIES ---
function initApp() {
  renderHomepageDeals();
  renderExclusivesRail();
  renderCatalogGrid("all");
  updateCartUI();
  updateAuthUI();
  initDealTimer();
  initHeroCarousel();
  
  // Attach event listeners
  setupHeaderEvents();
  setupSubNavEvents();
  setupModalEvents();
  setupCartEvents();
  setupCatalogEvents();
  setupLoginEvents();
  setupAdminEvents();
  setupRailButtons();
}

// View switcher
function navigateTo(viewId) {
  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.add('hidden');
  });
  
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Toast alerts helper
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "fa-circle-check";
  if (type === "error") icon = "fa-circle-xmark";
  if (type === "info") icon = "fa-circle-info";
  
  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- HEADER INTERACTIONS ---
function setupHeaderEvents() {
  document.getElementById("logo-link").addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("home-view");
    
    // Reset category tabs to 'all'
    document.querySelectorAll(".tab-btn").forEach(btn => {
      if (btn.getAttribute("data-filter") === "all") btn.classList.add("active");
      else btn.classList.remove("active");
    });
    document.querySelectorAll(".sub-nav-link").forEach(btn => btn.classList.remove("active"));
    
    renderCatalogGrid("all");
  });

  const menuBtn = document.getElementById("menu-btn");
  const sideNav = document.getElementById("side-nav");
  const subPanel = document.getElementById("side-nav-sub-panel");
  const menuText = menuBtn.querySelector(".menu-trigger-text");
  const menuIcon = menuBtn.querySelector(".menu-trigger-icon");

  // Dynamic category mapping to subcategories
  const SUBMENU_DATA = {
    "top-brands": [
      { name: "All Top Brands", cat: "all" },
      { name: "Samsung", cat: "mobiles" },
      { name: "Apple", cat: "mobiles" },
      { name: "Sony", cat: "audio" },
      { name: "Dell", cat: "laptops" },
      { name: "HP", cat: "laptops" },
      { name: "OnePlus", cat: "audio" }
    ],
    "tv": [
      { name: "All Televisions", cat: "tv" },
      { name: "4K OLED TVs", cat: "tv" },
      { name: "Smart LED TVs", cat: "tv" },
      { name: "QLED TVs", cat: "tv" },
      { name: "TV Accessories", cat: "accessories" }
    ],
    "appliances": [
      { name: "All Home Appliances", cat: "appliances" },
      { name: "Washing Machines & Dryers", cat: "appliances" },
      { name: "Washing Machine Accessories", cat: "appliances" },
      { name: "Air Conditioners", cat: "appliances" },
      { name: "Air Conditioner Accessories", cat: "appliances" },
      { name: "Refrigerators & Freezers", cat: "appliances" },
      { name: "Refrigerator Accessories", cat: "appliances" },
      { name: "Air Treatment Devices", cat: "appliances" },
      { name: "Air Coolers", cat: "appliances" },
      { name: "Fans", cat: "appliances" },
      { name: "Room Heaters", cat: "appliances" },
      { name: "Geysers", cat: "appliances" },
      { name: "Vacuum Cleaners", cat: "appliances" },
      { name: "Garment Care", cat: "appliances" },
      { name: "Home Safety Security", cat: "appliances" }
    ],
    "mobiles": [
      { name: "All Phones & Wearables", cat: "mobiles" },
      { name: "Smartphones", cat: "mobiles" },
      { name: "Basic Mobiles", cat: "mobiles" },
      { name: "Smart Wearables & Watches", cat: "watches" },
      { name: "Mobile Cases & Covers", cat: "accessories" },
      { name: "Power Banks & Chargers", cat: "accessories" }
    ],
    "laptops": [
      { name: "All Computers & Tablets", cat: "laptops" },
      { name: "Windows Laptops", cat: "laptops" },
      { name: "MacBooks", cat: "laptops" },
      { name: "Gaming Laptops", cat: "laptops" },
      { name: "Tablets", cat: "laptops" },
      { name: "Computer Accessories", cat: "accessories" }
    ],
    "kitchen": [
      { name: "All Kitchen Appliances", cat: "appliances" },
      { name: "Microwaves & Ovens", cat: "appliances" },
      { name: "Water Purifiers", cat: "appliances" },
      { name: "Mixer Grinders", cat: "appliances" },
      { name: "Chimneys", cat: "appliances" },
      { name: "Kettles & Coffee Makers", cat: "appliances" }
    ],
    "audio": [
      { name: "All Audio & Video", cat: "audio" },
      { name: "Bluetooth Speakers", cat: "audio" },
      { name: "Truly Wireless Earbuds", cat: "audio" },
      { name: "Home Theatres", cat: "audio" },
      { name: "Soundbars", cat: "audio" },
      { name: "Headphones", cat: "audio" }
    ],
    "fitness": [
      { name: "All Health & Fitness", cat: "watches" },
      { name: "Smart Bands", cat: "watches" },
      { name: "Weighing Scales", cat: "appliances" },
      { name: "Massagers", cat: "appliances" }
    ],
    "grooming": [
      { name: "All Grooming & Personal Care", cat: "watches" },
      { name: "Hair Dryers", cat: "accessories" },
      { name: "Trimmers & Shavers", cat: "accessories" },
      { name: "Hair Straighteners", cat: "accessories" }
    ],
    "cameras": [
      { name: "All Cameras & Accessories", cat: "cameras" },
      { name: "DSLR Cameras", cat: "cameras" },
      { name: "Mirrorless Cameras", cat: "cameras" },
      { name: "Action Cameras", cat: "cameras" },
      { name: "Camera Lenses", cat: "cameras" }
    ],
    "smart-devices": [
      { name: "All Smart Devices", cat: "watches" },
      { name: "Smart Speakers", cat: "audio" },
      { name: "Smart Plugs & Bulbs", cat: "accessories" },
      { name: "Security Cameras", cat: "cameras" }
    ],
    "gaming": [
      { name: "All Gaming Products", cat: "accessories" },
      { name: "Gaming Consoles", cat: "accessories" },
      { name: "Gaming Accessories", cat: "accessories" },
      { name: "Gaming Controllers", cat: "accessories" }
    ]
  };

  function renderSubmenu(menuKey) {
    const items = SUBMENU_DATA[menuKey];
    if (!items) {
      subPanel.innerHTML = "";
      return;
    }
    const headerTitle = menuKey.charAt(0).toUpperCase() + menuKey.slice(1).replace("-", " ");
    
    let html = `<div class="side-sub-header">${headerTitle}</div>`;
    html += items.map(item => `
      <div class="side-sub-item" data-cat="${item.cat}">
        <span>${item.name}</span>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    `).join("");
    
    subPanel.innerHTML = html;
  }

  function toggleMenu() {
    const isClosed = sideNav.classList.contains("hidden");
    if (isClosed) {
      sideNav.classList.remove("hidden");
      menuBtn.classList.add("open");
      menuText.textContent = "Close";
      menuIcon.className = "fa-solid fa-xmark menu-trigger-icon";
      renderSubmenu("appliances");
      
      document.querySelectorAll("#side-nav-main-list .side-main-item").forEach(el => {
        if (el.getAttribute("data-submenu") === "appliances") el.classList.add("active");
        else el.classList.remove("active");
      });
    } else {
      sideNav.classList.add("hidden");
      menuBtn.classList.remove("open");
      menuText.textContent = "Menu";
      menuIcon.className = "fa-solid fa-bars menu-trigger-icon";
    }
  }

  menuBtn.addEventListener("click", toggleMenu);

  sideNav.addEventListener("click", (e) => {
    if (e.target === sideNav) toggleMenu();
  });

  const mainList = document.getElementById("side-nav-main-list");
  mainList.addEventListener("mouseover", (e) => {
    const item = e.target.closest(".side-main-item");
    if (!item) return;

    if (item.classList.contains("has-sub-chevron")) {
      mainList.querySelectorAll(".side-main-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");
      
      const menuKey = item.getAttribute("data-submenu");
      renderSubmenu(menuKey);
    }
  });

  mainList.addEventListener("click", (e) => {
    const item = e.target.closest(".side-main-item");
    if (!item) return;

    if (item.classList.contains("simple-link")) {
      const text = item.textContent.trim();
      toggleMenu();
      showToast(`Redirecting to: ${text}`, "info");
      navigateTo("home-view");
    }
  });

  subPanel.addEventListener("click", (e) => {
    const subItem = e.target.closest(".side-sub-item");
    if (!subItem) return;

    const cat = subItem.getAttribute("data-cat");
    const name = subItem.querySelector("span").textContent;
    
    toggleMenu();
    showToast(`Filtering: ${name}`);

    document.querySelectorAll(".sub-nav-link").forEach(btn => {
      if (btn.getAttribute("data-cat") === cat) btn.classList.add("active");
      else btn.classList.remove("active");
    });

    document.querySelectorAll(".tab-btn").forEach(btn => {
      if (btn.getAttribute("data-filter") === cat) btn.classList.add("active");
      else btn.classList.remove("active");
    });

    navigateTo("home-view");

    setTimeout(() => {
      const anchor = document.getElementById("catalog-anchor");
      if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
      renderCatalogGrid(cat);
    }, 100);
  });

  const searchInput = document.getElementById("search-input");
  const suggestionsBox = document.getElementById("search-suggestions");
  const searchBtn = document.getElementById("search-btn");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      suggestionsBox.classList.add("hidden");
      return;
    }

    const matched = products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)).slice(0, 5);
    
    if (matched.length === 0) {
      suggestionsBox.innerHTML = `<div class="suggestion-item"><span class="item-text" style="color:#666">No matches found</span></div>`;
    } else {
      suggestionsBox.innerHTML = matched.map(p => `
        <div class="suggestion-item" data-id="${p.id}">
          <span class="item-text">${p.name.replace(new RegExp(query, 'gi'), match => `<strong>${match}</strong>`)}</span>
          <span class="item-price">₹${p.price.toLocaleString("en-IN")}</span>
        </div>
      `).join("");
    }
    
    suggestionsBox.classList.remove("hidden");
  });

  suggestionsBox.addEventListener("click", (e) => {
    const item = e.target.closest(".suggestion-item");
    if (item && item.getAttribute("data-id")) {
      const prodId = parseInt(item.getAttribute("data-id"));
      suggestionsBox.classList.add("hidden");
      searchInput.value = "";
      openProductDetails(prodId);
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-section")) {
      suggestionsBox.classList.add("hidden");
    }
  });

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      showToast(`Searching for "${query}"...`, "info");
      suggestionsBox.classList.add("hidden");
    }
  });

  const loginTrigger = document.getElementById("profile-nav-trigger");
  const userDropdown = document.getElementById("user-dropdown");

  loginTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (activeUser) {
      userDropdown.classList.toggle("hidden");
    } else {
      navigateTo("login-view");
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#profile-nav-trigger")) {
      userDropdown.classList.add("hidden");
    }
  });

  document.getElementById("dropdown-home-btn").addEventListener("click", (e) => {
    e.preventDefault();
    userDropdown.classList.add("hidden");
    navigateTo("home-view");
  });

  document.getElementById("dropdown-admin-btn").addEventListener("click", (e) => {
    e.preventDefault();
    userDropdown.classList.add("hidden");
    navigateTo("admin-view");
  });

  document.getElementById("dropdown-logout-btn").addEventListener("click", (e) => {
    e.preventDefault();
    userDropdown.classList.add("hidden");
    logoutSession();
  });

  document.getElementById("wishlist-trigger").addEventListener("click", () => {
    showToast("Wishlist saved! Item added to your favorites.", "info");
  });
}

// --- SUB-NAVIGATION EVENTS ---
function setupSubNavEvents() {
  document.querySelectorAll(".sub-nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      
      document.querySelectorAll(".sub-nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
      const category = link.getAttribute("data-cat");
      
      document.querySelectorAll(".tab-btn").forEach(btn => {
        if (btn.getAttribute("data-filter") === category) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      navigateTo("home-view");
      
      setTimeout(() => {
        const anchor = document.getElementById("catalog-anchor");
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
        renderCatalogGrid(category);
      }, 100);
    });
  });
}

// --- LOCATION PICKER MODAL ---
function setupModalEvents() {
  const trigger = document.getElementById("location-trigger");
  const modal = document.getElementById("location-modal");
  const close = document.getElementById("close-location-modal");
  const applyBtn = document.getElementById("apply-pincode-btn");
  const pincodeVal = document.getElementById("pincode-input");
  const pincodeErr = document.getElementById("pincode-error");
  const displayVal = document.getElementById("location-text");

  trigger.addEventListener("click", () => {
    modal.classList.remove("hidden");
    pincodeErr.classList.add("hidden");
    pincodeVal.value = "";
  });

  close.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  applyBtn.addEventListener("click", () => {
    const pin = pincodeVal.value.trim();
    if (/^\d{6}$/.test(pin)) {
      displayVal.textContent = pin;
      modal.classList.add("hidden");
      showToast(`Delivery location updated to ${pin}.`, "success");
      
      // Update catalog rendering to display dynamic delivery dates matching the new Pincode!
      const activeTab = document.querySelector(".tab-btn.active");
      const category = activeTab ? activeTab.getAttribute("data-filter") : "all";
      renderCatalogGrid(category);
    } else {
      pincodeErr.classList.remove("hidden");
    }
  });
}

// --- HERO CAROUSEL ROTATION AUTO-PLAY ---
function initHeroCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  const prevBtn = document.getElementById("prev-slide-btn");
  const nextBtn = document.getElementById("next-slide-btn");
  
  if (slides.length === 0) return;
  
  let currentIndex = 0;
  let timer = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
    
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(nextSlide, 5500); // Rotate every 5.5 seconds
  }

  function stopTimer() {
    if (timer) clearInterval(timer);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startTimer();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      startTimer();
    });
  });

  startTimer();
}

// --- DEALS TIMERS ---
function initDealTimer() {
  const timerText = document.getElementById("deal-timer");
  let seconds = 24 * 60 * 60;

  function update() {
    seconds--;
    if (seconds <= 0) seconds = 24 * 60 * 60;
    
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (timerText) timerText.textContent = `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
  }

  setInterval(update, 1000);
}

// --- DYNAMIC CATEGORY LANDING PAGES HUB (LED TVs & Mobile Phones specific) ---
function renderCategoryHub(category) {
  const homeContent = document.getElementById("main-homepage-content");
  const hubContent = document.getElementById("category-hub-content");
  
  if (category === "all") {
    homeContent.classList.remove("hidden");
    hubContent.classList.add("hidden");
    hubContent.innerHTML = "";
    return;
  }

  homeContent.classList.add("hidden");
  hubContent.classList.remove("hidden");

  let html = "";
  
  if (category === "tv") {
    html = `
      <div class="breadcrumb-nav">Televisions & Accessories &gt; LED TVs</div>
      <h1 class="hub-title-main">LED TVs</h1>
      
      <!-- Banner TV -->
      <div class="cat-hero-banner tv-banner-theme">
        <div class="cat-hero-content">
          <h2>Big or Small, Smart or Basic</h2>
          <p>TVs for Every Budget & Home!</p>
          <button class="primary-btn btn-small" onclick="document.getElementById('catalog-anchor').scrollIntoView({behavior: 'smooth'})">Shop now</button>
        </div>
        <div class="cat-hero-img">
          <img src="https://images.unsplash.com/photo-1593789198777-f27bc259780e?w=700&auto=format&fit=crop&q=80" alt="LED TVs">
        </div>
      </div>

      <!-- NeuCoins Promo Bar -->
      <div class="neucoins-promo-bar">
        <div class="neucoins-card crimson">
          <span>Get Flat 10% NeuCoins on NeuCard Infinity</span>
          <i class="fa-solid fa-credit-card"></i>
        </div>
        <div class="neucoins-card blue">
          <span>Get Flat 7% NeuCoins on NeuCard Plus</span>
          <i class="fa-solid fa-credit-card"></i>
        </div>
      </div>

      <!-- Deals of the Week -->
      <div class="hub-rail-section">
        <h3>Deals of the Week</h3>
        <div class="hub-rail-grid-4">
          <div class="hub-deal-card" onclick="openProductDetails(7)">
            <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=200&auto=format&fit=crop&q=80" alt="RMG TV">
            <h4>RMG 55" UHD QLED Google TV</h4>
            <p class="deal-price-text">₹27,990* <span class="old-price">₹45,000</span></p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
          <div class="hub-deal-card" onclick="openProductDetails(7)">
            <img src="https://images.unsplash.com/photo-1601944129054-9807c6f0813f?w=200&auto=format&fit=crop&q=80" alt="Google TVs">
            <h4>55" & Above Google TVs</h4>
            <p class="deal-price-text">Starting at ₹26,091*</p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
          <div class="hub-deal-card" onclick="openProductDetails(7)">
            <img src="https://images.unsplash.com/photo-1552975084-6e027cd345c2?w=200&auto=format&fit=crop&q=80" alt="4K TV">
            <h4>4K UHD Google TVs</h4>
            <p class="deal-price-text">Starting at ₹17,490*</p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
          <div class="hub-deal-card" onclick="openProductDetails(7)">
            <img src="https://images.unsplash.com/photo-1461151304267-386397c1a4c4?w=200&auto=format&fit=crop&q=80" alt="QLED TVs">
            <h4>QLED TVs</h4>
            <p class="deal-price-text">Starting at ₹13,490*</p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
        </div>
      </div>

      <!-- Pick Your Brand -->
      <div class="hub-rail-section">
        <h3>Pick Your TV Brand</h3>
        <div class="brand-circles-rail">
          <div class="brand-item-card" onclick="applyBrandFilter('samsung')">
            <span class="brand-logo-text">SAMSUNG</span>
            <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=120&auto=format&fit=crop&q=80">
          </div>
          <div class="brand-item-card" onclick="applyBrandFilter('rmg')">
            <span class="brand-logo-text">RMG</span>
            <img src="https://images.unsplash.com/photo-1552975084-6e027cd345c2?w=120&auto=format&fit=crop&q=80">
          </div>
          <div class="brand-item-card" onclick="applyBrandFilter('xiaomi')">
            <span class="brand-logo-text">xiaomi</span>
            <img src="https://images.unsplash.com/photo-1601944129054-9807c6f0813f?w=120&auto=format&fit=crop&q=80">
          </div>
          <div class="brand-item-card" onclick="applyBrandFilter('tcl')">
            <span class="brand-logo-text">TCL</span>
            <img src="https://images.unsplash.com/photo-1461151304267-386397c1a4c4?w=120&auto=format&fit=crop&q=80">
          </div>
        </div>
      </div>

      <!-- Budget Filter -->
      <div class="hub-rail-section">
        <h3>Select Your Display Type</h3>
        <div class="hub-rail-grid-4">
          <div class="type-card" onclick="document.getElementById('catalog-anchor').scrollIntoView({behavior:'smooth'})">
            <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=150&auto=format&fit=crop&q=80">
            <strong>LED TVs</strong>
            <small>Affordable flat screens</small>
          </div>
          <div class="type-card" onclick="document.getElementById('catalog-anchor').scrollIntoView({behavior:'smooth'})">
            <img src="https://images.unsplash.com/photo-1552975084-6e027cd345c2?w=150&auto=format&fit=crop&q=80">
            <strong>QLED TVs</strong>
            <small>Vivid quantum LED technology</small>
          </div>
          <div class="type-card" onclick="document.getElementById('catalog-anchor').scrollIntoView({behavior:'smooth'})">
            <img src="https://images.unsplash.com/photo-1601944129054-9807c6f0813f?w=150&auto=format&fit=crop&q=80">
            <strong>OLED TVs</strong>
            <small>True pitch blacks and high contrast</small>
          </div>
        </div>
      </div>
    `;
  } else if (category === "mobiles") {
    html = `
      <div class="breadcrumb-nav">Phones & Wearables &gt; Mobile Phones</div>
      <h1 class="hub-title-main">Mobile Phones</h1>
      
      <!-- Banner Mobile -->
      <div class="cat-hero-banner mobile-banner-theme">
        <div class="cat-hero-content">
          <span class="banner-badge">OPPO AI Phone</span>
          <h2>Reno16 Series 5G</h2>
          <p>Al Remix Collage | 50MP 3.5x Telephoto Camera</p>
          <p class="price-text">Starting at ₹46,999</p>
          <button class="primary-btn btn-small" onclick="document.getElementById('catalog-anchor').scrollIntoView({behavior:'smooth'})">Buy now</button>
        </div>
        <div class="cat-hero-img">
          <img src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=700&auto=format&fit=crop&q=80" alt="OPPO Reno16">
        </div>
      </div>

      <!-- NeuCoins Promo Bar -->
      <div class="neucoins-promo-bar">
        <div class="neucoins-card crimson">
          <span>Get Flat 10% NeuCoins on NeuCard Infinity</span>
          <i class="fa-solid fa-credit-card"></i>
        </div>
        <div class="neucoins-card blue">
          <span>Get Flat 7% NeuCoins on NeuCard Plus</span>
          <i class="fa-solid fa-credit-card"></i>
        </div>
      </div>

      <!-- Top Deals On Mobiles -->
      <div class="hub-rail-section">
        <h3>Top Deals On Mobiles</h3>
        <div class="hub-rail-grid-4">
          <div class="hub-deal-card" onclick="openProductDetails(6)">
            <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&auto=format&fit=crop&q=80" alt="Vivo X300">
            <h4>Vivo X300 FE 5G</h4>
            <p class="deal-price-text">₹71,999* <span class="old-price">₹1,20,000</span></p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
          <div class="hub-deal-card" onclick="openProductDetails(6)">
            <img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&auto=format&fit=crop&q=80" alt="Pixel 10">
            <h4>Google Pixel 10 5G</h4>
            <p class="deal-price-text">₹68,499* <span class="old-price">₹79,999</span></p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
          <div class="hub-deal-card" onclick="openProductDetails(1)">
            <img src="https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=200&auto=format&fit=crop&q=80" alt="Vivo V70">
            <h4>Vivo V70 5G</h4>
            <p class="deal-price-text">₹43,999* <span class="old-price">₹50,000</span></p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
          <div class="hub-deal-card" onclick="openProductDetails(1)">
            <img src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=200&auto=format&fit=crop&q=80" alt="Oppo K14">
            <h4>OPPO K14x 5G</h4>
            <p class="deal-price-text">₹18,144* <span class="old-price">₹19,999</span></p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
        </div>
      </div>

      <!-- Select Your Budget -->
      <div class="hub-rail-section">
        <h3>Select Your Budget</h3>
        <div class="hub-rail-grid-4">
          <div class="budget-card-hub" onclick="applyPriceFilter('under-15k')">
            <strong>Under ₹15,000</strong>
            <span>Pocket Friendly Drivers</span>
          </div>
          <div class="budget-card-hub" onclick="applyPriceFilter('15k-40k')">
            <strong>₹15,000 - ₹40,000</strong>
            <span>Mid-range Powerhouses</span>
          </div>
          <div class="budget-card-hub" onclick="applyPriceFilter('40k-80k')">
            <strong>₹40,000 - ₹80,000</strong>
            <span>Premium Performance</span>
          </div>
          <div class="budget-card-hub" onclick="applyPriceFilter('above-80k')">
            <strong>Above ₹80,000</strong>
            <span>Flagship Superphones</span>
          </div>
        </div>
      </div>

      <!-- Pick Your Smartphone Brand -->
      <div class="hub-rail-section">
        <h3>Select Your Brand</h3>
        <div class="brand-circles-rail">
          <div class="brand-item-card" onclick="applyBrandFilter('apple')">
            <span class="brand-logo-text">APPLE</span>
            <img src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=120&auto=format&fit=crop&q=80">
          </div>
          <div class="brand-item-card" onclick="applyBrandFilter('oneplus')">
            <span class="brand-logo-text">ONEPLUS</span>
            <img src="https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=120&auto=format&fit=crop&q=80">
          </div>
          <div class="brand-item-card" onclick="applyBrandFilter('samsung')">
            <span class="brand-logo-text">SAMSUNG</span>
            <img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=120&auto=format&fit=crop&q=80">
          </div>
          <div class="brand-item-card" onclick="applyBrandFilter('vivo')">
            <span class="brand-logo-text">VIVO</span>
            <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=120&auto=format&fit=crop&q=80">
          </div>
        </div>
      </div>

      <!-- Select your Display Type -->
      <div class="hub-rail-section">
        <h3>Select your Display Type</h3>
        <div class="hub-rail-grid-4">
          <div class="type-card" onclick="document.getElementById('catalog-anchor').scrollIntoView({behavior:'smooth'})">
            <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=150&auto=format&fit=crop&q=80">
            <strong>AMOLED Displays</strong>
            <small>Deep contrast & vibrant colors</small>
          </div>
          <div class="type-card" onclick="document.getElementById('catalog-anchor').scrollIntoView({behavior:'smooth'})">
            <img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=150&auto=format&fit=crop&q=80">
            <strong>LCD Displays</strong>
            <small>Battery efficient panels</small>
          </div>
          <div class="type-card" onclick="document.getElementById('catalog-anchor').scrollIntoView({behavior:'smooth'})">
            <img src="https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=150&auto=format&fit=crop&q=80">
            <strong>OLED Displays</strong>
            <small>Premium high refresh screens</small>
          </div>
          <div class="type-card" onclick="document.getElementById('catalog-anchor').scrollIntoView({behavior:'smooth'})">
            <img src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=150&auto=format&fit=crop&q=80">
            <strong>IPS Panels</strong>
            <small>Wide viewing angles</small>
          </div>
        </div>
      </div>

      <!-- Top Reviews For You -->
      <div class="hub-rail-section">
        <h3>Top Reviews For You</h3>
        <div class="hub-rail-grid-4">
          <div class="hub-deal-card review-card" onclick="showToast('Loading full review post...', 'info')">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=250&auto=format&fit=crop&q=80" style="height:120px; object-fit:cover;">
            <h4 style="margin-top:8px;">iPhone 15 Pro Review: Titanium Era</h4>
            <p style="font-size:0.75rem; color:#888;">Is the new Action button worth it?</p>
          </div>
          <div class="hub-deal-card review-card" onclick="showToast('Loading full review post...', 'info')">
            <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?w=250&auto=format&fit=crop&q=80" style="height:120px; object-fit:cover;">
            <h4 style="margin-top:8px;">Samsung Galaxy S24 Ultra Review</h4>
            <p style="font-size:0.75rem; color:#888;">AI search features tested in real life.</p>
          </div>
          <div class="hub-deal-card review-card" onclick="showToast('Loading full review post...', 'info')">
            <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=250&auto=format&fit=crop&q=80" style="height:120px; object-fit:cover;">
            <h4 style="margin-top:8px;">OnePlus 12: Flagship Killer Reborn</h4>
            <p style="font-size:0.75rem; color:#888;">Charging speeds that defy limits.</p>
          </div>
          <div class="hub-deal-card review-card" onclick="showToast('Loading full review post...', 'info')">
            <img src="https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=250&auto=format&fit=crop&q=80" style="height:120px; object-fit:cover;">
            <h4 style="margin-top:8px;">Vivo V30 Pro Portrait Mode Test</h4>
            <p style="font-size:0.75rem; color:#888;">Zeiss lens tuning makes the difference.</p>
          </div>
        </div>
      </div>

      <!-- OnePlus Pad 4 Teaser Blog Banner -->
      <section class="teaser-blog-section" style="margin-top: 3rem;">
        <div class="teaser-card">
          <div class="teaser-text-side">
            <span class="teaser-brand">UNBOXED <small style="font-size:0.6rem; color:#888;">by croma</small></span>
            <h2>The OnePlus Pad 4 is the go-to tablet for your weekend binge</h2>
            <p>Big screen, booming speakers and marathon-ready battery life</p>
            <button class="primary-btn btn-small" onclick="showToast('Redirecting to tablet reviews...', 'info')">Read More</button>
          </div>
          <div class="teaser-img-side">
            <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=80" alt="OnePlus Pad 4">
          </div>
        </div>
      </section>

      <!-- NeuCoins App Promo -->
      <section class="app-promo-section" style="margin-top: 2rem;">
        <div class="app-promo-banner">
          <div class="promo-text">
            <h3>Earn NeuCoins on Your Purchases</h3>
            <p>Download the Tata Neu app to register your rewards card and enjoy 5% back on every transaction.</p>
          </div>
          <div class="promo-store-buttons">
            <a href="#" class="store-badge" onclick="event.preventDefault(); showToast('Downloading iOS App...', 'info')"><i class="fa-brands fa-apple"></i> App Store</a>
            <a href="#" class="store-badge" onclick="event.preventDefault(); showToast('Downloading Android App...', 'info')"><i class="fa-brands fa-google-play"></i> Google Play</a>
          </div>
        </div>
      </section>

      <!-- Tata Card Dual Banners -->
      <section class="tata-cards-section" style="margin-top: 2rem; margin-bottom: 2rem;">
        <div class="tata-card-banner border-glow-pink">
          <div class="tata-text">
            <h3>Tata Neu Card Infinity</h3>
            <p>Get up to 10% NeuCoins back. First year fee waived.</p>
            <button class="primary-btn btn-small" onclick="showToast('Credit card application form opened.', 'info')">Apply Now</button>
          </div>
          <i class="fa-solid fa-credit-card credit-icon text-pink"></i>
        </div>
        <div class="tata-card-banner border-glow-blue">
          <div class="tata-text">
            <h3>Tata Neu Card Plus</h3>
            <p>Get up to 7% NeuCoins back. Save more daily.</p>
            <button class="primary-btn btn-small" onclick="showToast('Credit card application form opened.', 'info')">Apply Now</button>
          </div>
          <i class="fa-solid fa-credit-card credit-icon text-blue"></i>
        </div>
      </section>
    `;
  } else if (category === "laptops") {
    html = `
      <div class="breadcrumb-nav">Computers & Tablets &gt; Laptops</div>
      <h1 class="hub-title-main">Laptops</h1>
      
      <!-- Banner Laptops -->
      <div class="cat-hero-banner laptop-banner-theme">
        <div class="cat-hero-content">
          <span class="banner-badge">Intel Core Ultra</span>
          <h2>Next-Gen AI Laptops</h2>
          <p>Unleash your productivity. Fast processors & long battery life.</p>
          <p class="price-text">Starting at ₹29,990</p>
          <button class="primary-btn btn-small" onclick="document.getElementById('catalog-anchor').scrollIntoView({behavior:'smooth'})">Explore Range</button>
        </div>
        <div class="cat-hero-img">
          <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=700&auto=format&fit=crop&q=80" alt="Laptops Hub">
        </div>
      </div>

      <!-- NeuCoins Promo Bar -->
      <div class="neucoins-promo-bar">
        <div class="neucoins-card crimson">
          <span>Get Flat 10% NeuCoins on NeuCard Infinity</span>
          <i class="fa-solid fa-credit-card"></i>
        </div>
        <div class="neucoins-card blue">
          <span>Get Flat 7% NeuCoins on NeuCard Plus</span>
          <i class="fa-solid fa-credit-card"></i>
        </div>
      </div>

      <!-- Deals of the Week -->
      <div class="hub-rail-section">
        <h3>Deals of the Week</h3>
        <div class="hub-rail-grid-4">
          <div class="hub-deal-card" onclick="openProductDetails(3)">
            <img src="https://images.unsplash.com/photo-1496181130204-755241544e3f?w=200&auto=format&fit=crop&q=80" alt="HP Pavilion">
            <h4>HP Pavilion Core i5 Laptop</h4>
            <p class="deal-price-text">₹54,990* <span class="old-price">₹65,000</span></p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
          <div class="hub-deal-card" onclick="openProductDetails(8)">
            <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=200&auto=format&fit=crop&q=80" alt="Dell Inspiron">
            <h4>Dell Inspiron Thin & Light</h4>
            <p class="deal-price-text">₹41,990* <span class="old-price">₹48,000</span></p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
          <div class="hub-deal-card" onclick="openProductDetails(3)">
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&auto=format&fit=crop&q=80" alt="Asus Vivobook">
            <h4>Asus Vivobook 15 Ryzen 5</h4>
            <p class="deal-price-text">₹37,490* <span class="old-price">₹44,000</span></p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
          <div class="hub-deal-card" onclick="openProductDetails(8)">
            <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=200&auto=format&fit=crop&q=80" alt="MacBook Air">
            <h4>Apple MacBook Air M2</h4>
            <p class="deal-price-text">₹84,990* <span class="old-price">₹99,900</span></p>
            <span class="flag">*Inclusive of all Offers</span>
          </div>
        </div>
      </div>

      <!-- Select Your Budget -->
      <div class="hub-rail-section">
        <h3>Select Your Budget</h3>
        <div class="hub-rail-grid-4">
          <div class="budget-card-hub" onclick="applyPriceFilter('under-15k')">
            <strong>Under ₹30,000</strong>
            <span>Basic Computing Drivers</span>
          </div>
          <div class="budget-card-hub" onclick="applyPriceFilter('15k-40k')">
            <strong>₹30,000 - ₹50,000</strong>
            <span>Multitasking Students</span>
          </div>
          <div class="budget-card-hub" onclick="applyPriceFilter('40k-80k')">
            <strong>₹50,000 - ₹70,000</strong>
            <span>Professional Workhorses</span>
          </div>
          <div class="budget-card-hub" onclick="applyPriceFilter('above-80k')">
            <strong>Above ₹1,00,000</strong>
            <span>High-End Gaming & Creators</span>
          </div>
        </div>
      </div>

      <!-- Pick Your Laptop Brand -->
      <div class="hub-rail-section">
        <h3>Pick Your Laptop Brand</h3>
        <div class="brand-circles-rail">
          <div class="brand-item-card" onclick="applyBrandFilter('apple')">
            <span class="brand-logo-text">APPLE</span>
            <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=120&auto=format&fit=crop&q=80">
          </div>
          <div class="brand-item-card" onclick="applyBrandFilter('hp')">
            <span class="brand-logo-text">HP</span>
            <img src="https://images.unsplash.com/photo-1496181130204-755241544e3f?w=120&auto=format&fit=crop&q=80">
          </div>
          <div class="brand-item-card" onclick="applyBrandFilter('asus')">
            <span class="brand-logo-text">ASUS</span>
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=120&auto=format&fit=crop&q=80">
          </div>
          <div class="brand-item-card" onclick="applyBrandFilter('lenovo')">
            <span class="brand-logo-text">LENOVO</span>
            <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=120&auto=format&fit=crop&q=80">
          </div>
        </div>
      </div>

      <!-- Top Reviews For You -->
      <div class="hub-rail-section">
        <h3>Top Reviews For You</h3>
        <div class="hub-rail-grid-4">
          <div class="hub-deal-card review-card" onclick="showToast('Loading laptop review...', 'info')">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=250&auto=format&fit=crop&q=80" style="height:120px; object-fit:cover;">
            <h4 style="margin-top:8px;">MacBook Pro M3 Max Review: Peak Power</h4>
            <p style="font-size:0.75rem; color:#888;">Is the liquid retina XDR screen worth it?</p>
          </div>
          <div class="hub-deal-card review-card" onclick="showToast('Loading laptop review...', 'info')">
            <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=250&auto=format&fit=crop&q=80" style="height:120px; object-fit:cover;">
            <h4 style="margin-top:8px;">HP Omen Transcend 14 First Impressions</h4>
            <p style="font-size:0.75rem; color:#888;">Ultra portable chassis meets RTX 4060 graphics.</p>
          </div>
          <div class="hub-deal-card review-card" onclick="showToast('Loading laptop review...', 'info')">
            <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=250&auto=format&fit=crop&q=80" style="height:120px; object-fit:cover;">
            <h4 style="margin-top:8px;">Dell XPS 16 (2026): A True Masterpiece</h4>
            <p style="font-size:0.75rem; color:#888;">Futuristic haptic touchpad and seamless glass.</p>
          </div>
          <div class="hub-deal-card review-card" onclick="showToast('Loading laptop review...', 'info')">
            <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=250&auto=format&fit=crop&q=80" style="height:120px; object-fit:cover;">
            <h4 style="margin-top:8px;">Asus ROG Zephyrus G16 OLED Gaming Test</h4>
            <p style="font-size:0.75rem; color:#888;">Slim gaming laptops reach 240Hz screen milestones.</p>
          </div>
        </div>
      </div>

      <!-- OnePlus Pad 4 Teaser Blog Banner -->
      <section class="teaser-blog-section" style="margin-top: 3rem;">
        <div class="teaser-card">
          <div class="teaser-text-side">
            <span class="teaser-brand">UNBOXED <small style="font-size:0.6rem; color:#888;">by croma</small></span>
            <h2>The OnePlus Pad 4 is the go-to tablet for your weekend binge</h2>
            <p>Big screen, booming speakers and marathon-ready battery life</p>
            <button class="primary-btn btn-small" onclick="showToast('Redirecting to tablet reviews...', 'info')">Read More</button>
          </div>
          <div class="teaser-img-side">
            <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=80" alt="OnePlus Pad 4">
          </div>
        </div>
      </section>

      <!-- NeuCoins App Promo -->
      <section class="app-promo-section" style="margin-top: 2rem;">
        <div class="app-promo-banner">
          <div class="promo-text">
            <h3>Earn NeuCoins on Your Purchases</h3>
            <p>Download the Tata Neu app to register your rewards card and enjoy 5% back on every transaction.</p>
          </div>
          <div class="promo-store-buttons">
            <a href="#" class="store-badge" onclick="event.preventDefault(); showToast('Downloading iOS App...', 'info')"><i class="fa-brands fa-apple"></i> App Store</a>
            <a href="#" class="store-badge" onclick="event.preventDefault(); showToast('Downloading Android App...', 'info')"><i class="fa-brands fa-google-play"></i> Google Play</a>
          </div>
        </div>
      </section>

      <!-- Tata Card Dual Banners -->
      <section class="tata-cards-section" style="margin-top: 2rem; margin-bottom: 2rem;">
        <div class="tata-card-banner border-glow-pink">
          <div class="tata-text">
            <h3>Tata Neu Card Infinity</h3>
            <p>Get up to 10% NeuCoins back. First year fee waived.</p>
            <button class="primary-btn btn-small" onclick="showToast('Credit card application form opened.', 'info')">Apply Now</button>
          </div>
          <i class="fa-solid fa-credit-card credit-icon text-pink"></i>
        </div>
        <div class="tata-card-banner border-glow-blue">
          <div class="tata-text">
            <h3>Tata Neu Card Plus</h3>
            <p>Get up to 7% NeuCoins back. Save more daily.</p>
            <button class="primary-btn btn-small" onclick="showToast('Credit card application form opened.', 'info')">Apply Now</button>
          </div>
          <i class="fa-solid fa-credit-card credit-icon text-blue"></i>
        </div>
      </section>
    `;
  } else {
    // Fallback banner header for other categories
    const headerTitle = category.charAt(0).toUpperCase() + category.slice(1);
    html = `
      <div class="breadcrumb-nav">Store Categories &gt; ${headerTitle}</div>
      <h1 class="hub-title-main">${headerTitle} Hub</h1>
      <div class="cat-hero-banner generic-banner-theme">
        <div class="cat-hero-content">
          <h2>RMG Premium ${headerTitle} Solutions</h2>
          <p>Unmatched quality. Certified warranties. Free shipping.</p>
          <button class="primary-btn btn-small" onclick="document.getElementById('catalog-anchor').scrollIntoView({behavior:'smooth'})">Explore Range</button>
        </div>
      </div>
    `;
  }

  hubContent.innerHTML = html;
}

function applyBrandFilter(brand) {
  const dropdown = document.getElementById("filter-brand");
  if (dropdown) {
    dropdown.value = brand.toLowerCase();
    const activeTab = document.querySelector(".tab-btn.active");
    const category = activeTab ? activeTab.getAttribute("data-filter") : "all";
    renderCatalogGrid(category);
    document.getElementById("catalog-anchor").scrollIntoView({ behavior: 'smooth' });
  }
}

function applyPriceFilter(priceRange) {
  const dropdown = document.getElementById("filter-price");
  if (dropdown) {
    dropdown.value = priceRange;
    const activeTab = document.querySelector(".tab-btn.active");
    const category = activeTab ? activeTab.getAttribute("data-filter") : "all";
    renderCatalogGrid(category);
    document.getElementById("catalog-anchor").scrollIntoView({ behavior: 'smooth' });
  }
}

// --- CATALOG RENDERING (Croma Dark Aesthetics Cards - Screenshot 3 Styling) ---
function createProductCard(p) {
  const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
  
  // Real Photography URL with online checking & SVG Fallback (Bulletproof Design)
  const imageHtml = p.imageUrl ? `
    <img src="${p.imageUrl}" alt="${p.name}" class="product-img-real" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div class="vector-product-svg" style="display: none; width: 100%; height: 100%;">
      ${getProductSVG(p.image)}
    </div>
  ` : `
    <div class="vector-product-svg" style="width: 100%; height: 100%;">
      ${getProductSVG(p.image)}
    </div>
  `;

  // Fetch location Pincode to display dynamic delivery dates
  const pincode = document.getElementById("location-text").textContent.trim();
  const deliveryHtml = pincode === "STORE" || pincode === "" ? 
    `<span class="delivery-standard"><i class="fa-solid fa-truck"></i> Standard Delivery Available</span>` :
    `<span class="delivery-pincode-set"><i class="fa-solid fa-circle-check"></i> Standard Delivery to ${pincode} by Thu, 16th Jul</span>`;

  return `
    <div class="product-card" data-id="${p.id}">
      
      <!-- Top Card Actions (Compare Checkbox & Heart wishlist button) -->
      <div class="card-top-actions">
        <label class="card-compare-label" onclick="event.stopPropagation();">
          <input type="checkbox" class="compare-cb"> Compare
        </label>
        <button class="card-heart-btn" onclick="event.stopPropagation(); showToast('Added to Wishlist!', 'info')">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>

      <div class="card-img-container">
        ${imageHtml}
      </div>
      
      <div class="card-info">
        <h3 class="card-title">${p.name}</h3>
        
        <div class="card-rating">
          <span class="card-rating-badge">
            ${p.rating} <i class="fa-solid fa-star"></i>
          </span>
          <span>(${p.reviewsCount.toLocaleString()})</span>
        </div>
        
        <div class="card-price-row">
          <span class="price-current">₹${p.price.toLocaleString("en-IN")}</span>
          <div class="price-original-row">
            <span class="price-mrp">MRP ₹${p.originalPrice.toLocaleString("en-IN")}</span>
            <span class="price-discount">(${discount}% OFF)</span>
          </div>
        </div>

        <!-- Delivery Promises -->
        <div class="card-delivery-promise">
          ${deliveryHtml}
        </div>

        <!-- Capsule Badges -->
        <div class="card-badge-row">
          <span class="card-badge-capsule">EMI Available</span>
          <span class="card-badge-capsule">Extra Offers</span>
        </div>

        <button class="card-add-btn" data-id="${p.id}">Add To Cart</button>
      </div>
    </div>
  `;
}

function renderHomepageDeals() {
  const dealsRail = document.getElementById("deals-rail");
  const dealItems = products.filter(p => p.isDeal);
  
  if (dealItems.length === 0) {
    dealsRail.innerHTML = `<p class="no-records">No deal listings currently active.</p>`;
  } else {
    dealsRail.innerHTML = dealItems.map(p => createProductCard(p)).join("");
  }
}

function renderExclusivesRail() {
  const rail = document.getElementById("exclusives-rail");
  if (!rail) return;
  
  const exclusives = products.filter(p => p.name.includes("RMG"));
  if (exclusives.length === 0) {
    rail.innerHTML = `<p class="no-records">No exclusives currently active.</p>`;
  } else {
    rail.innerHTML = exclusives.map(p => createProductCard(p)).join("");
  }
}

function renderCatalogGrid(category = "all") {
  const grid = document.getElementById("catalog-grid");
  const title = document.getElementById("catalog-title");
  
  // Render Croma-Style Category Landing Content
  renderCategoryHub(category);

  // Read current filters toolbar values
  const brandVal = document.getElementById("filter-brand").value;
  const priceVal = document.getElementById("filter-price").value;
  const sortVal = document.getElementById("filter-sort").value;

  let filtered = products;
  
  // Filter 1: By Category
  if (category !== "all") {
    filtered = products.filter(p => p.category === category);
    title.textContent = `Shop in ${category.charAt(0).toUpperCase() + category.slice(1)}`;
  } else {
    title.textContent = "Trending in Tech";
  }

  // Filter 2: By Brand search matching
  if (brandVal !== "all") {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(brandVal) || (p.specs && p.specs.Brand && p.specs.Brand.toLowerCase() === brandVal));
  }

  // Filter 3: By Price Ranges
  if (priceVal !== "all") {
    if (priceVal === "under-15k") {
      filtered = filtered.filter(p => p.price < 15000);
    } else if (priceVal === "15k-40k") {
      filtered = filtered.filter(p => p.price >= 15000 && p.price <= 40000);
    } else if (priceVal === "40k-80k") {
      filtered = filtered.filter(p => p.price >= 40000 && p.price <= 80000);
    } else if (priceVal === "above-80k") {
      filtered = filtered.filter(p => p.price > 80000);
    }
  }

  // Filter 4: Sort listings
  if (sortVal === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortVal === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="no-records">No products match your filter criteria.</p>`;
  } else {
    grid.innerHTML = filtered.map(p => createProductCard(p)).join("");
  }

  // Render Croma-style bottom SEO overview text block
  const seoContainer = document.getElementById("catalog-seo-text");
  if (seoContainer) {
    seoContainer.innerHTML = getSeoText(category);
  }
}

function getSeoText(category) {
  if (category === "mobiles") {
    return `
      <h2>The Best Phones & Wearables to Keep You Updated at All Times</h2>
      <p>Welcome to RMG Electronics, your ultimate destination for buying the latest smartphones and basic mobiles online. Mobile phones have become an indispensable part of our daily lives, serving as communication hubs, pocket cameras, personal assistants, and entertainment systems all in one. Discover the latest 5G mobile phones featuring powerful AI features, advanced camera sensors, long battery lives, and seamless performance.</p>
      
      <h3>What Should You Consider While Investing in a New Smartphone?</h3>
      <p>When searching for a new mobile phone, it is crucial to consider features such as display quality (AMOLED vs LCD), camera specifications (resolution, zoom capacity, and night mode), battery size (e.g. 5000mAh for all-day performance), and processor capability (e.g. Snapdragon, MediaTek, Apple A-Series) to handle heavy tasks like gaming, multitasking, or content creation.</p>
      
      <p>RMG Electronics offers a wide range of devices from top manufacturers like Apple, Samsung, OnePlus, and Vivo to suit every budget, ranging from basic daily drivers under ₹10,000 to flagship premium smartphones with titanium builds and pro-grade lenses.</p>

      <h3>Check Out the Best Deals on Phones and Wearables Online</h3>
      <p>Explore our extensive catalogs online or visit your nearest RMG outlet to speak with our store experts. Enjoy interest-free EMI plans with credit card partners, Tata Neu rewards programs, and dynamic zipcare device protection plans to keep your new smartphone safe from accidents and spills.</p>

      <div class="seo-faq-block">
        <h3>FAQs on Mobiles & Wearables</h3>
        
        <div class="seo-faq-item">
          <strong>Q: Which are the best mobile phone brands?</strong>
          <span>A: Top brands like Apple, Samsung, OnePlus, and Vivo offer excellent options depending on your budget, software preferences, and camera requirements.</span>
        </div>
        
        <div class="seo-faq-item">
          <strong>Q: What is the average battery life of a smartphone?</strong>
          <span>A: Most modern smartphones feature 5000mAh batteries that easily last 1 to 1.5 days on a single charge with standard daily usage.</span>
        </div>
        
        <div class="seo-faq-item">
          <strong>Q: Can I buy a smartphone on EMI?</strong>
          <span>A: Yes! RMG Electronics provides interest-free EMI plans with major bank credit cards and finance partners both online and in-store.</span>
        </div>
      </div>
    `;
  } else if (category === "tv") {
    return `
      <h2>Televisions: Buy OLED, QLED & Smart TVs Online at Best Prices</h2>
      <p>Transform your home entertainment experience with RMG's extensive collection of televisions. Whether you are looking for ultra-premium OLED screens, vibrant QLED panels, or budget-friendly Smart LED TVs, we have the perfect fit for your living room. Experience crystal-clear visuals, immersive audio outputs, and seamless streaming capabilities.</p>
      
      <h3>What is the Difference Between LED, QLED, and OLED TVs?</h3>
      <p>Standard LED TVs use a backlight to illuminate the display, making them highly budget-friendly. QLED (Quantum Dot LED) TVs add a layer of nanoparticles to produce brighter and more saturated colors. OLED (Organic LED) TVs feature self-lit pixels that can turn off completely, yielding perfect blacks, infinite contrast, and wide viewing angles.</p>

      <div class="seo-faq-block">
        <h3>FAQs on Televisions</h3>
        
        <div class="seo-faq-item">
          <strong>Q: What smart TV OS is the best?</strong>
          <span>A: Google TV / Android TV offers the widest app library, webOS (LG) is highly intuitive, and Tizen (Samsung) provides premium gaming hubs.</span>
        </div>
        
        <div class="seo-faq-item">
          <strong>Q: What screen size should I buy?</strong>
          <span>A: For a viewing distance of 4-6 feet, a 32-43 inch TV is ideal. For 6-9 feet, choose 50-55 inches. For larger distances, go 65 inches or above.</span>
        </div>
      </div>
    `;
  } else if (category === "laptops") {
    return `
      <h2>Laptops & Computers: Unleash Your Productivity</h2>
      <p>Browse through RMG's comprehensive range of laptops, notebook computers, and PC accessories. From powerful Intel Core Ultra and AMD Ryzen gaming laptops to thin-and-light MacBooks and Chromebooks, we cater to students, professionals, and hardcore gamers alike.</p>
      
      <div class="seo-faq-block">
        <h3>FAQs on Laptops</h3>
        
        <div class="seo-faq-item">
          <strong>Q: How much RAM do I need in a laptop?</strong>
          <span>A: 8GB RAM is standard for daily office tasks and browsing. For gaming, coding, or video editing, 16GB or 32GB RAM is highly recommended.</span>
        </div>
      </div>
    `;
  } else {
    // General overview FAQ for all other tech departments
    return `
      <h2>Buy Latest Technology Products & Home Appliances Online</h2>
      <p>Welcome to RMG Electronics (RMG Group), your premium one-stop shop for modern gadgets, home appliances, audio speakers, and cameras. We bring you the ultimate client presentation e-commerce experience. Explore top-tier brands and enjoy interest-free EMI options, professional zipcare installation, and dynamic delivery tracking on every purchase.</p>
      
      <div class="seo-faq-block">
        <h3>FAQs on Shopping at RMG</h3>
        
        <div class="seo-faq-item">
          <strong>Q: Are products sold on RMG 100% genuine?</strong>
          <span>A: Yes! All products listed on RMG are 100% authentic, sourced directly from authorized brand distributors and covered by official manufacturer warranties.</span>
        </div>
        
        <div class="seo-faq-item">
          <strong>Q: How does the dynamic pincode checker work?</strong>
          <span>A: Enter your 6-digit pincode in the store location modal in the header. Our system will immediately update product availability status and calculate standard delivery timelines for your specific area.</span>
        </div>
      </div>
    `;
  }
}

function setupCatalogEvents() {
  // Tabs filters
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Reset toolbar filters
      document.getElementById("filter-brand").value = "all";
      document.getElementById("filter-price").value = "all";
      document.getElementById("filter-sort").value = "relevancy";
      
      const filter = btn.getAttribute("data-filter");
      renderCatalogGrid(filter);
    });
  });

  // Filters toolbar listeners
  const brandFilter = document.getElementById("filter-brand");
  const priceFilter = document.getElementById("filter-price");
  const sortFilter = document.getElementById("filter-sort");
  
  const handleFilterChange = () => {
    const activeTab = document.querySelector(".tab-btn.active");
    const category = activeTab ? activeTab.getAttribute("data-filter") : "all";
    renderCatalogGrid(category);
  };

  brandFilter.addEventListener("change", handleFilterChange);
  priceFilter.addEventListener("change", handleFilterChange);
  sortFilter.addEventListener("change", handleFilterChange);

  // Clicking cards to open details OR clicking Add to Cart
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const prodId = parseInt(card.getAttribute("data-id"));
    const isAddBtn = e.target.classList.contains("card-add-btn");
    
    if (isAddBtn) {
      e.stopPropagation();
      const btnId = parseInt(e.target.getAttribute("data-id"));
      addToCart(btnId);
    } else {
      openProductDetails(prodId);
    }
  });

  // Quick categories rail icons
  document.querySelectorAll(".category-circle-item").forEach(item => {
    item.addEventListener("click", () => {
      const category = item.getAttribute("data-cat");
      
      document.querySelectorAll(".sub-nav-link").forEach(l => {
        if (l.getAttribute("data-cat") === category) l.classList.add("active");
        else l.classList.remove("active");
      });
      
      document.querySelectorAll(".tab-btn").forEach(tab => {
        if (tab.getAttribute("data-filter") === category) tab.click();
      });
      
      document.getElementById("catalog-anchor").scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Ad card grids links
  document.querySelectorAll(".btn-go-cat").forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-cat");
      
      document.querySelectorAll(".sub-nav-link").forEach(l => {
        if (l.getAttribute("data-cat") === category) l.classList.add("active");
        else l.classList.remove("active");
      });

      document.querySelectorAll(".tab-btn").forEach(tab => {
        if (tab.getAttribute("data-filter") === category) {
          tab.click();
        }
      });
      document.getElementById("catalog-anchor").scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function setupRailButtons() {
  document.querySelectorAll(".rail-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetRail = document.getElementById(btn.getAttribute("data-target"));
      const direction = btn.classList.contains("rail-next") ? 1 : -1;
      
      if (targetRail) {
        targetRail.scrollBy({ left: direction * 280, behavior: "smooth" });
      }
    });
  });
}

// --- DETAILED PRODUCT SCREEN ---
function openProductDetails(id) {
  const p = products.find(prod => prod.id === id);
  if (!p) return;

  const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
  const container = document.getElementById("product-detail-container");
  
  // Format specs table
  const specsRows = Object.entries(p.specs || {}).map(([key, val]) => `
    <tr>
      <td class="specs-key">${key}</td>
      <td class="specs-val">${val}</td>
    </tr>
  `).join("");

  const detailImageHtml = p.imageUrl ? `
    <img src="${p.imageUrl}" alt="${p.name}" class="product-img-detail-real" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div class="vector-product-svg" style="display: none; width: 70%; height: 70%;">
      ${getProductSVG(p.image)}
    </div>
  ` : `
    <div class="vector-product-svg" style="width: 70%; height: 70%;">
      ${getProductSVG(p.image)}
    </div>
  `;

  container.innerHTML = `
    <!-- Gallery -->
    <div class="detail-gallery">
      <span class="badge red-bg card-flag" style="top: 20px; left: 20px;">
        ${p.isDeal ? "LIMITED SAVINGS" : "POPULAR TECH"}
      </span>
      ${detailImageHtml}
    </div>
    
    <!-- Info Column -->
    <div class="detail-info">
      <span class="detail-category">${p.category}</span>
      <h1 class="detail-name">${p.name}</h1>
      
      <div class="detail-rating">
        <span class="rating-stars">
          ${Array.from({ length: 5 }, (_, i) => {
            const starVal = i + 1;
            if (p.rating >= starVal) return '<i class="fa-solid fa-star"></i>';
            if (p.rating >= starVal - 0.5) return '<i class="fa-solid fa-star-half-stroke"></i>';
            return '<i class="fa-regular fa-star"></i>';
          }).join("")}
        </span>
        <span>${p.rating} / 5.0 Rating (${p.reviewsCount.toLocaleString()} Client Reviews)</span>
      </div>

      <div class="detail-pricing-box">
        <div class="detail-price-row">
          <span class="detail-price">₹${p.price.toLocaleString("en-IN")}</span>
          <div class="detail-mrp-block">
            <span class="detail-mrp">MRP: ₹${p.originalPrice.toLocaleString("en-IN")}</span>
            <span class="text-teal" style="font-weight: 600;">Saving ${discount}% Instant discount</span>
          </div>
        </div>
      </div>

      <div class="detail-actions-row">
        <button class="primary-btn detail-add-btn" data-id="${p.id}">
          <i class="fa-solid fa-cart-plus"></i> Add To Cart
        </button>
        <button class="secondary-btn detail-buy-btn" data-id="${p.id}">
          <i class="fa-solid fa-bolt"></i> Buy Now
        </button>
      </div>

      <div class="detail-specs-box">
        <h3>Product Specifications</h3>
        <table class="specs-table">
          <tbody>
            ${specsRows || `<tr><td colspan="2" class="no-records">No specifications available.</td></tr>`}
          </tbody>
        </table>
      </div>
      
      <div class="detail-specs-box" style="margin-top: 1.5rem;">
        <h3>Overview</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${p.description}</p>
      </div>
    </div>
  `;

  container.querySelector(".detail-add-btn").addEventListener("click", () => {
    addToCart(p.id);
  });
  
  container.querySelector(".detail-buy-btn").addEventListener("click", () => {
    addToCart(p.id);
    openCartDrawer();
  });

  navigateTo("product-view");
}

document.getElementById("back-to-home-btn").addEventListener("click", () => navigateTo("home-view"));

// --- CART MODULE (DRAWER STATE ACTIONS) ---
function setupCartEvents() {
  const trigger = document.getElementById("cart-trigger");
  const overlay = document.getElementById("cart-drawer-overlay");
  const close = document.getElementById("close-cart-btn");
  const exploreBtn = document.querySelector(".btn-close-cart-explore");

  trigger.addEventListener("click", openCartDrawer);
  close.addEventListener("click", closeCartDrawer);
  exploreBtn.addEventListener("click", closeCartDrawer);
  
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeCartDrawer();
  });

  document.getElementById("cart-items").addEventListener("click", (e) => {
    const itemEl = e.target.closest(".cart-item");
    if (!itemEl) return;
    
    const prodId = parseInt(itemEl.getAttribute("data-id"));

    if (e.target.closest(".btn-qty-minus")) {
      updateCartQty(prodId, -1);
    } else if (e.target.closest(".btn-qty-plus")) {
      updateCartQty(prodId, 1);
    } else if (e.target.closest(".cart-item-delete")) {
      removeFromCart(prodId);
    }
  });

  document.getElementById("checkout-btn").addEventListener("click", () => {
    triggerCheckout();
  });
}

function openCartDrawer() {
  document.getElementById("cart-drawer-overlay").classList.remove("hidden");
}

function closeCartDrawer() {
  document.getElementById("cart-drawer-overlay").classList.add("hidden");
}

function addToCart(id) {
  const p = products.find(prod => prod.id === id);
  if (!p) return;

  const existing = cart.find(item => item.product.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product: p, quantity: 1 });
  }

  localStorage.setItem("rmg_cart", JSON.stringify(cart));
  updateCartUI();
  showToast(`"${p.name.substring(0, 20)}..." added to cart!`);
}

function updateCartQty(id, delta) {
  const item = cart.find(item => item.product.id === id);
  if (!item) return;

  item.quantity += delta;
  
  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  localStorage.setItem("rmg_cart", JSON.stringify(cart));
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.product.id !== id);
  localStorage.setItem("rmg_cart", JSON.stringify(cart));
  updateCartUI();
  showToast("Product removed from your cart.", "info");
}

function updateCartUI() {
  const badge = document.getElementById("cart-count");
  const drawerCount = document.getElementById("cart-drawer-count");
  const itemsContainer = document.getElementById("cart-items");
  const footerSummary = document.getElementById("cart-footer-summary");
  
  const totalCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  
  if (totalCount > 0) {
    badge.textContent = totalCount;
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }

  drawerCount.textContent = totalCount;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-view">
        <i class="fa-solid fa-cart-arrow-down empty-cart-icon"></i>
        <h4>Your Cart is Empty</h4>
        <p>Explore our trending deals and add gadgets now!</p>
        <button class="primary-btn btn-close-cart-explore" onclick="closeCartDrawer()">Continue Shopping</button>
      </div>
    `;
    footerSummary.classList.add("hidden");
    return;
  }

  itemsContainer.innerHTML = cart.map(item => {
    const p = item.product;
    
    const cartImgHtml = p.imageUrl ? 
      `<img src="${p.imageUrl}" alt="${p.name}" class="product-img-real" style="object-fit:cover; width:100%; height:100%" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
       <div class="vector-product-svg" style="display:none">${getProductSVG(p.image, "35px", "35px")}</div>` :
      `<div class="vector-product-svg">${getProductSVG(p.image, "35px", "35px")}</div>`;

    return `
      <div class="cart-item" data-id="${p.id}">
        <div class="cart-item-img">${cartImgHtml}</div>
        <div class="cart-item-info">
          <h4 class="cart-item-title">${p.name}</h4>
          <span class="cart-item-price">₹${p.price.toLocaleString("en-IN")}</span>
          <div class="cart-qty-row">
            <div class="qty-control">
              <button class="qty-btn btn-qty-minus"><i class="fa-solid fa-minus"></i></button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn btn-qty-plus"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
        <button class="cart-item-delete" aria-label="Delete Item"><i class="fa-regular fa-trash-can"></i></button>
      </div>
    `;
  }).join("");

  const subtotal = cart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);
  document.getElementById("cart-subtotal").textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  document.getElementById("cart-grand-total").textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  
  footerSummary.classList.remove("hidden");
}

function triggerCheckout() {
  if (cart.length === 0) return;

  const orderId = "RMG" + Math.floor(100000 + Math.random() * 900000);
  const locationStr = document.getElementById("location-text").textContent;
  const userEmail = activeUser ? activeUser.email : "guest@customer.com";
  
  const orderDetails = {
    id: orderId,
    email: userEmail,
    items: cart.map(item => `${item.product.name} (x${item.quantity})`).join(", "),
    total: cart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0),
    pincode: locationStr,
    date: new Date().toLocaleDateString("en-IN", { hour: '2-digit', minute:'2-digit' }),
    status: "Processed"
  };

  sessionOrders.push(orderDetails);
  localStorage.setItem("rmg_orders", JSON.stringify(sessionOrders));

  cart = [];
  localStorage.removeItem("rmg_cart");
  updateCartUI();
  closeCartDrawer();
  
  showToast(`Order ${orderId} placed successfully! Thank you.`, "success");
  updateAdminStatsUI();
  navigateTo("home-view");
}

// --- DUMMY LOGIN MODULE ---
function setupLoginEvents() {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("login-email");
  const passInput = document.getElementById("login-password");
  
  const tabUser = document.getElementById("tab-user-login");
  const tabAdmin = document.getElementById("tab-admin-login");
  const title = document.getElementById("login-title");
  const subtitle = document.getElementById("login-subtitle");
  const tipText = document.getElementById("tip-text");

  let isLoggingAdmin = false;

  tabUser.addEventListener("click", () => {
    isLoggingAdmin = false;
    tabUser.classList.add("active");
    tabAdmin.classList.remove("active");
    title.textContent = "Log In or Sign Up";
    subtitle.textContent = "Enter credentials to experience RMG Electronics";
    emailInput.value = "user@rmg.com";
    passInput.value = "user123";
    tipText.innerHTML = `User: <code class="selectable">user@rmg.com</code> / <code class="selectable">user123</code>`;
  });

  tabAdmin.addEventListener("click", () => {
    isLoggingAdmin = true;
    tabAdmin.classList.add("active");
    tabUser.classList.remove("active");
    title.textContent = "Admin System Access";
    subtitle.textContent = "For store managers & content publishers";
    emailInput.value = "admin@rmg.com";
    passInput.value = "admin123";
    tipText.innerHTML = `Admin: <code class="selectable">admin@rmg.com</code> / <code class="selectable">admin123</code>`;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim().toLowerCase();
    const pass = passInput.value;

    const authType = isLoggingAdmin ? "admin" : "user";
    const creds = DEMO_ACCOUNTS[authType];

    if (creds && creds.email === email && creds.pass === pass) {
      activeUser = creds;
      localStorage.setItem("rmg_user", JSON.stringify(activeUser));
      updateAuthUI();
      showToast("Signed in successfully!", "success");
      
      if (isLoggingAdmin) {
        navigateTo("admin-view");
      } else {
        navigateTo("home-view");
      }
    } else {
      showToast("Invalid credentials, check tip box.", "error");
    }
  });
}

function updateAuthUI() {
  const statusText = document.getElementById("user-status-text");
  const dropdownName = document.getElementById("dropdown-user-name");
  const dropdownRole = document.getElementById("dropdown-user-role");
  const dropdownAdminBtn = document.getElementById("dropdown-admin-btn");

  if (activeUser) {
    statusText.textContent = activeUser.name.toUpperCase();
    dropdownName.textContent = activeUser.name;
    dropdownRole.textContent = activeUser.role;

    if (activeUser.role.includes("Manager")) {
      dropdownAdminBtn.classList.remove("hidden");
    } else {
      dropdownAdminBtn.classList.add("hidden");
    }
  } else {
    statusText.textContent = "PROFILE";
    dropdownName.textContent = "Welcome Guest";
    dropdownRole.textContent = "Shop latest tech offers";
    dropdownAdminBtn.classList.add("hidden");
  }

  updateAdminStatsUI();
  renderAdminProductsTable();
}

function logoutSession() {
  activeUser = null;
  localStorage.removeItem("rmg_user");
  updateAuthUI();
  showToast("Logged out successfully.", "info");
  navigateTo("home-view");
}

// --- ADMIN DASHBOARD PANEL LOGIC ---
function setupAdminEvents() {
  document.querySelectorAll(".admin-nav-item").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".admin-nav-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      
      const targetSec = item.getAttribute("data-section");
      
      document.querySelectorAll(".admin-subview").forEach(sec => sec.classList.add("hidden"));
      document.getElementById(`admin-section-${targetSec}`).classList.remove("hidden");
    });
  });

  document.getElementById("btn-add-spec-row").addEventListener("click", () => {
    const list = document.getElementById("specs-list");
    const row = document.createElement("div");
    row.className = "spec-input-row";
    row.innerHTML = `
      <input type="text" placeholder="Spec Name (e.g. Lens)" class="spec-key">
      <input type="text" placeholder="Spec Value (e.g. 50mm)" class="spec-value">
    `;
    list.appendChild(row);
  });

  document.getElementById("admin-product-form").addEventListener("submit", (e) => {
    e.preventDefault();
    addNewProductListing();
  });

  document.getElementById("admin-inventory-table-body").addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-delete");
    if (btn) {
      const prodId = parseInt(btn.getAttribute("data-id"));
      deleteProductListing(prodId);
    }
  });

  document.getElementById("btn-goto-add-product").addEventListener("click", () => {
    document.querySelector('.admin-nav-item[data-section="add-product-sec"]').click();
  });
}

function updateAdminStatsUI() {
  const revText = document.getElementById("admin-revenue");
  const countText = document.getElementById("admin-orders-count");
  const prodText = document.getElementById("admin-total-products");
  
  const totalRev = sessionOrders.reduce((sum, order) => sum + order.total, 0);
  if (revText) revText.textContent = `₹${totalRev.toLocaleString("en-IN")}`;
  if (countText) countText.textContent = sessionOrders.length;
  if (prodText) prodText.textContent = products.length;

  const recentOrdersTbody = document.getElementById("admin-recent-orders-list");
  const detailedOrdersTbody = document.getElementById("admin-detailed-orders-list");

  if (!recentOrdersTbody) return;

  if (sessionOrders.length === 0) {
    recentOrdersTbody.innerHTML = `<tr><td colspan="6" class="no-records">No orders placed in this session.</td></tr>`;
    detailedOrdersTbody.innerHTML = `<tr><td colspan="6" class="no-records">No orders recorded in this session.</td></tr>`;
    return;
  }

  recentOrdersTbody.innerHTML = sessionOrders.slice().reverse().map(order => `
    <tr>
      <td><strong>${order.id}</strong></td>
      <td>${order.email}</td>
      <td title="${order.items}">${order.items.substring(0, 30)}${order.items.length > 30 ? '...' : ''}</td>
      <td class="text-teal">₹${order.total.toLocaleString("en-IN")}</td>
      <td><span class="badge" style="background:#00828a; color:#fff;">${order.status}</span></td>
      <td>${order.date}</td>
    </tr>
  `).join("");

  detailedOrdersTbody.innerHTML = sessionOrders.slice().reverse().map(order => `
    <tr>
      <td><strong>${order.id}</strong></td>
      <td>
        <p>${order.email}</p>
        <small style="color:#666">${order.date}</small>
      </td>
      <td><small style="color:#aeaeae">${order.items}</small></td>
      <td class="text-teal" style="font-weight:700">₹${order.total.toLocaleString("en-IN")}</td>
      <td>${order.pincode}</td>
      <td><span class="badge" style="background:#00828a; color:#fff;">${order.status}</span></td>
    </tr>
  `).join("");
}

function renderAdminProductsTable() {
  const tbody = document.getElementById("admin-inventory-table-body");
  if (!tbody) return;
  
  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="no-records">No active listings in inventory.</td></tr>`;
    return;
  }

  tbody.innerHTML = products.map(p => {
    const tableImgHtml = p.imageUrl ? 
      `<img src="${p.imageUrl}" alt="" style="width:100%; height:100%; object-fit:cover; border-radius:3px" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
       <div class="vector-product-svg" style="display:none">${getProductSVG(p.image, "100%", "100%")}</div>` :
      `<div class="vector-product-svg">${getProductSVG(p.image, "100%", "100%")}</div>`;
      
    return `
      <tr>
        <td>${p.id}</td>
        <td style="text-transform: uppercase; font-size: 0.75rem; font-weight:700" class="text-teal">${p.category}</td>
        <td>
          <div style="display:flex; align-items:center; gap: 10px">
            <div style="width:30px; height:30px; display:flex">${tableImgHtml}</div>
            <span style="font-weight:500; font-size:0.85rem">${p.name}</span>
          </div>
        </td>
        <td style="font-weight: 600">₹${p.price.toLocaleString("en-IN")}</td>
        <td style="color:#666">₹${p.originalPrice.toLocaleString("en-IN")}</td>
        <td>
          <div class="table-actions">
            <button class="table-action-btn btn-delete" data-id="${p.id}" title="Delete Listing"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function addNewProductListing() {
  const name = document.getElementById("prod-name").value.trim();
  const category = document.getElementById("prod-category").value;
  const price = parseInt(document.getElementById("prod-price").value);
  const mrp = parseInt(document.getElementById("prod-mrp").value);
  const image = document.getElementById("prod-image").value;
  const isDeal = document.getElementById("prod-deal").checked;
  const description = document.getElementById("prod-desc").value.trim();

  if (price > mrp) {
    showToast("Selling price cannot be greater than original MRP.", "error");
    return;
  }

  const specs = {
    "Brand": "RMG Electronics",
    "Model": "Unspecified"
  };

  document.querySelectorAll("#specs-list .spec-input-row").forEach(row => {
    const key = row.querySelector(".spec-key").value.trim();
    const val = row.querySelector(".spec-value").value.trim();
    if (key && val) {
      specs[key] = val;
    }
  });

  let imageUrl = "";
  switch(category) {
    case "mobiles": imageUrl = "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&auto=format&fit=crop&q=80"; break;
    case "laptops": imageUrl = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=80"; break;
    case "audio": imageUrl = "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&auto=format&fit=crop&q=80"; break;
    case "watches": imageUrl = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80"; break;
    case "tv": imageUrl = "https://images.unsplash.com/photo-1593789198777-f27bc259780e?w=400&auto=format&fit=crop&q=80"; break;
    case "appliances": imageUrl = "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&auto=format&fit=crop&q=80"; break;
    case "cameras": imageUrl = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&auto=format&fit=crop&q=80"; break;
    case "accessories": imageUrl = "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&auto=format&fit=crop&q=80"; break;
    default: imageUrl = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80";
  }

  const nextId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

  const newProd = {
    id: nextId,
    name,
    category,
    price,
    originalPrice: mrp,
    rating: 4.5,
    reviewsCount: 1,
    image,
    imageUrl,
    description,
    isDeal,
    specs
  };

  products.push(newProd);
  localStorage.setItem("rmg_products", JSON.stringify(products));

  document.getElementById("admin-product-form").reset();
  
  const list = document.getElementById("specs-list");
  list.innerHTML = `
    <div class="spec-input-row">
      <input type="text" placeholder="Spec Name (e.g. RAM)" class="spec-key">
      <input type="text" placeholder="Spec Value (e.g. 8 GB)" class="spec-value">
    </div>
    <div class="spec-input-row">
      <input type="text" placeholder="Spec Name (e.g. Warranty)" class="spec-key">
      <input type="text" placeholder="Spec Value (e.g. 1 Year)" class="spec-value">
    </div>
  `;

  renderHomepageDeals();
  renderCatalogGrid("all");
  updateAdminStatsUI();
  renderAdminProductsTable();

  showToast(`Successfully listed "${name.substring(0, 15)}..."!`);
  document.querySelector('.admin-nav-item[data-section="products-sec"]').click();
}

function deleteProductListing(id) {
  if (confirm("Are you sure you want to delete this product listing? This updates the catalog immediately.")) {
    const item = products.find(p => p.id === id);
    products = products.filter(p => p.id !== id);
    localStorage.setItem("rmg_products", JSON.stringify(products));
    
    renderHomepageDeals();
    renderCatalogGrid("all");
    updateAdminStatsUI();
    renderAdminProductsTable();
    
    if (item) showToast(`Deleted listing: "${item.name.substring(0,15)}..."`, "info");
  }
}

// Load application on page load
window.addEventListener("DOMContentLoaded", initApp);
