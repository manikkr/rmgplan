// Initial mockup product database for RMG Electronics
const initialProducts = [
  {
    id: 1,
    name: "RMG Note 14 Pro 5G (8GB RAM, 256GB Storage, Emerald Teal)",
    category: "mobiles",
    price: 21999,
    originalPrice: 28999,
    rating: 4.6,
    reviewsCount: 1240,
    image: "mobile-teal",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=80",
    description: "Experience ultimate speed and visual brilliance with the RMG Note 14 Pro. Equipped with a stunning 120Hz Curved AMOLED display, a 108MP OIS main camera, and massive 5000mAh battery with 80W lightning-fast charging.",
    isDeal: true,
    specs: {
      "Brand": "RMG Electronics",
      "Model": "Note 14 Pro 5G",
      "RAM": "8 GB",
      "Storage": "256 GB",
      "Processor": "MediaTek Dimensity 7200",
      "Camera": "108MP + 8MP + 2MP Rear | 32MP Front",
      "Battery": "5000 mAh (80W Charger Included)",
      "Display": "6.67-inch FHD+ 120Hz AMOLED"
    }
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro (128GB, Natural Titanium)",
    category: "mobiles",
    price: 122990,
    originalPrice: 134900,
    rating: 4.8,
    reviewsCount: 384,
    image: "mobile-titanium",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&auto=format&fit=crop&q=80",
    description: "Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and a powerful iPhone camera system with 3x optical zoom.",
    isDeal: true,
    specs: {
      "Brand": "Apple",
      "Model": "iPhone 15 Pro",
      "RAM": "8 GB",
      "Storage": "128 GB",
      "Processor": "A17 Pro Chip",
      "Camera": "48MP + 12MP + 12MP Rear | 12MP Front",
      "Battery": "3274 mAh (Supports 20W Charging)",
      "Display": "6.1-inch Super Retina XDR OLED"
    }
  },
  {
    id: 3,
    name: "RMG Book Pro Intel Core Ultra 5 (16GB RAM, 512GB SSD, Silver)",
    category: "laptops",
    price: 54999,
    originalPrice: 72999,
    rating: 4.5,
    reviewsCount: 215,
    image: "laptop-silver",
    imageUrl: "https://images.unsplash.com/photo-1496181130204-7552cc14ac1a?w=400&auto=format&fit=crop&q=80",
    description: "Power your productivity with the RMG Book Pro. Powered by the Intel Core Ultra 5 processor, a gorgeous 14-inch 2K IPS screen, all-day battery life, and a sleek, all-aluminum chassis.",
    isDeal: true,
    specs: {
      "Brand": "RMG Electronics",
      "Model": "Book Pro 14",
      "Processor": "Intel Core Ultra 5 125H",
      "RAM": "16 GB LPDDR5X",
      "Storage": "512 GB NVMe PCIe Gen4 SSD",
      "Display": "14.0-inch 2K (2240x1400) 90Hz",
      "OS": "Windows 11 Home",
      "Weight": "1.38 kg"
    }
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 ANC Wireless Headphones (Black)",
    category: "audio",
    price: 26990,
    originalPrice: 34990,
    rating: 4.7,
    reviewsCount: 1890,
    image: "audio-headphones",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80",
    description: "The Sony WH-1000XM5 wireless headphones rewrite the rules of distraction-free listening with industry-leading Active Noise Cancellation and exceptional Hi-Res audio quality.",
    isDeal: true,
    specs: {
      "Brand": "Sony",
      "Model": "WH-1000XM5",
      "Type": "Over-Ear Wireless",
      "Noise Cancellation": "Yes (Industry-Leading Auto NC Optimizer)",
      "Battery Life": "Up to 30 Hours (Quick Charge: 3 mins for 3 hours)",
      "Connectivity": "Bluetooth 5.2, Multipoint Connection",
      "Warranty": "1 Year Brand Warranty"
    }
  },
  {
    id: 5,
    name: "RMG Fit Active Smartwatch (1.96-inch AMOLED, Bluetooth Calling, Black)",
    category: "watches",
    price: 2499,
    originalPrice: 5999,
    rating: 4.2,
    reviewsCount: 812,
    image: "watch-black",
    imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&auto=format&fit=crop&q=80",
    description: "Keep track of your health and stay connected on the go. Featuring a massive 1.96-inch AMOLED display, Bluetooth phone calls, 100+ sports modes, and up to 7 days of battery life.",
    isDeal: false,
    specs: {
      "Brand": "RMG Electronics",
      "Model": "Fit Active",
      "Display": "1.96-inch AMOLED (Always-on Display)",
      "Calling": "Bluetooth Calling (Mic & Speaker Integrated)",
      "Sensors": "Heart Rate, SpO2, Sleep Tracker, Step Counter",
      "Battery": "300 mAh (Up to 7 days battery life)",
      "Waterproof": "IP68 Dust & Water Resistant"
    }
  },
  {
    id: 6,
    name: "Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB Storage, Titanium Gray)",
    category: "mobiles",
    price: 129999,
    originalPrice: 139999,
    rating: 4.9,
    reviewsCount: 560,
    image: "mobile-s24",
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop&q=80",
    description: "Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity, and possibility, starting with the most important device in your life.",
    isDeal: false,
    specs: {
      "Brand": "Samsung",
      "Model": "Galaxy S24 Ultra",
      "RAM": "12 GB",
      "Storage": "256 GB",
      "Processor": "Snapdragon 8 Gen 3 for Galaxy",
      "Camera": "200MP + 50MP + 12MP + 10MP | 12MP Front",
      "Battery": "5000 mAh (45W Fast Charging support)",
      "Display": "6.8-inch Dynamic AMOLED 2X, QHD+"
    }
  },
  {
    id: 7,
    name: "RMG Sonic Buds Pro TWS Earbuds (ANC 45dB, 40H Playtime, Teal Accent)",
    category: "audio",
    price: 1999,
    originalPrice: 3999,
    rating: 4.3,
    reviewsCount: 420,
    image: "audio-buds",
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80",
    description: "Immerse yourself in deep bass and clear treble. The RMG Sonic Buds Pro feature 45dB Active Noise Cancellation, Ultra Low Latency mode for gaming, and up to 40 hours of combined battery life.",
    isDeal: true,
    specs: {
      "Brand": "RMG Electronics",
      "Model": "Sonic Buds Pro",
      "Type": "In-Ear True Wireless Earbuds",
      "ANC": "Yes, up to 45dB hybrid ANC",
      "Drivers": "12.4mm Dynamic Bass Boost Drivers",
      "Battery Life": "Up to 40 Hours with Case (10 mins charge = 7 hours playback)",
      "IP Rating": "IPX5 Water Resistant"
    }
  },
  {
    id: 8,
    name: "LG OLED C3 Series 55-inch 4K Smart TV",
    category: "tv",
    price: 119990,
    originalPrice: 169990,
    rating: 4.8,
    reviewsCount: 154,
    image: "tv-oled",
    imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&auto=format&fit=crop&q=80",
    description: "Upgrade to OLED and see the difference. The LG C3 Series features self-lit pixels that deliver perfect black, infinite contrast, and over a billion rich colors.",
    isDeal: false,
    specs: {
      "Brand": "LG",
      "Model": "OLED55C3PSA",
      "Screen Size": "55 inches",
      "Display Type": "OLED 4K",
      "Refresh Rate": "120 Hz",
      "Smart TV OS": "webOS 23",
      "Audio Output": "40W (2.2 Channel Dolby Atmos)",
      "HDMI Ports": "4 x HDMI 2.1"
    }
  },
  {
    id: 9,
    name: "RMG Smart Air Purifier 4 (HEPA H13 Filter, CADR 400m³/h)",
    category: "appliances",
    price: 8999,
    originalPrice: 14999,
    rating: 4.4,
    reviewsCount: 310,
    image: "appliance-purifier",
    imageUrl: "https://images.unsplash.com/photo-1621259182978-f09e5e24d584?w=400&auto=format&fit=crop&q=80",
    description: "Breathe clean and pure air. The RMG Smart Air Purifier 4 features a high-efficiency HEPA H13 filter that captures 99.97% of PM2.5 particles, pollens, and pet dander.",
    isDeal: false,
    specs: {
      "Brand": "RMG Electronics",
      "Model": "Smart Air Purifier 4",
      "Coverage Area": "Up to 500 sq ft",
      "CADR": "400 m³/h",
      "Filter Type": "HEPA H13 (Three-stage filtration)",
      "Control": "Wi-Fi Smart App, Voice Control (Alexa/Google Assistant)",
      "Notice Level": "32.1 dB (Sleep mode)"
    }
  },
  {
    id: 10,
    name: "Dyson V12 Detect Slim Wireless Vacuum Cleaner",
    category: "appliances",
    price: 49900,
    originalPrice: 55900,
    rating: 4.7,
    reviewsCount: 275,
    image: "appliance-dyson",
    imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&auto=format&fit=crop&q=80",
    description: "Dyson's lightest intelligent cordless vacuum cleaner. Reveals invisible dust on hard floors, measures and counts dust particles, and automatically adapts suction power.",
    isDeal: true,
    specs: {
      "Brand": "Dyson",
      "Model": "V12 Detect Slim",
      "Suction Power": "150 AW",
      "Run Time": "Up to 60 Minutes",
      "Weight": "2.2 kg",
      "Filtration": "Fully-sealed, five-stage filtration system",
      "Bin Volume": "0.38 Litres"
    }
  },
  {
    id: 11,
    name: "RMG Alpha 7M4 Mirrorless Camera (28-70mm Lens Kit)",
    category: "cameras",
    price: 189990,
    originalPrice: 219900,
    rating: 4.8,
    reviewsCount: 94,
    image: "camera-outline",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&auto=format&fit=crop&q=80",
    description: "The RMG Alpha 7M4 is a ground-breaking hybrid camera. Packing a 33MP Exmor R CMOS sensor, advanced real-time autofocus, and 4K 60p video recording, it is built for creative professionals.",
    isDeal: false,
    specs: {
      "Brand": "RMG Electronics",
      "Model": "Alpha 7M4",
      "Sensor Resolution": "33 Megapixels",
      "Sensor Type": "Full-Frame CMOS",
      "Lens Mount": "E-mount",
      "Video Recording": "4K at 60p (10-bit 4:2:2)",
      "Autofocus": "Real-time Eye AF (Human/Animal/Bird)",
      "Warranty": "2 Years Brand Warranty"
    }
  },
  {
    id: 12,
    name: "RMG KeyClick Pro Mechanical Gaming Keyboard (RGB, Blue Switches)",
    category: "accessories",
    price: 3499,
    originalPrice: 6999,
    rating: 4.4,
    reviewsCount: 312,
    image: "accessory-keyboard",
    imageUrl: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&auto=format&fit=crop&q=80",
    description: "Elevate your typing and gaming experience with the RMG KeyClick Pro. Boasting clicky blue mechanical switches, vibrant per-key RGB backlighting, durable double-shot keycaps, and a robust aluminum top case.",
    isDeal: false,
    specs: {
      "Brand": "RMG Electronics",
      "Model": "KeyClick Pro",
      "Switch Type": "Blue Mechanical Switches (Clicky)",
      "Backlight": "Dynamic RGB (18 effects)",
      "Layout": "Full-size (104 Keys)",
      "Interface": "USB Type-C (Detachable Cable)",
      "Anti-Ghosting": "100% N-Key Rollover",
      "Warranty": "1 Year Brand Warranty"
    }
  }
];

// Helper to make products persistent in localStorage for edits by Admin
if (!localStorage.getItem("rmg_products")) {
  localStorage.setItem("rmg_products", JSON.stringify(initialProducts));
} else {
  // If already exists, make sure we append the new products in localStorage to avoid gaps
  const currentLocal = JSON.parse(localStorage.getItem("rmg_products"));
  if (currentLocal.length < 12 || !currentLocal[0].imageUrl) {
    localStorage.setItem("rmg_products", JSON.stringify(initialProducts));
  }
}
