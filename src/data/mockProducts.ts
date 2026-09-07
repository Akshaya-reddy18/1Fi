import { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-iphone-16-pro',
    name: 'Apple iPhone 16 Pro (128 GB)',
    brand: 'Apple',
    category: 'smartphones',
    basePrice: 119900,
    originalPrice: 129900,
    discountPercentage: 8,
    thumbnail: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&auto=format&fit=crop&q=80'
    ],
    shortDescription: 'Grade 5 Titanium design with Camera Control, 48MP Fusion camera, and A18 Pro chip.',
    description: 'iPhone 16 Pro features a strong and light titanium design with larger 6.3-inch Super Retina XDR display. Powered by the A18 Pro chip for pro-level performance and incredible battery life. Enjoy 4K 120 fps Dolby Vision recording and next-gen photographic styles.',
    highlights: [
      'A18 Pro Chip with 6-core GPU',
      '48MP Fusion camera with 5x Telephoto',
      'Grade 5 Titanium frame with textured matte glass',
      'Action button & dedicated Camera Control',
      'Up to 27 hours video playback'
    ],
    specifications: [
      {
        category: 'General',
        items: {
          'Model Name': 'iPhone 16 Pro',
          'Color': 'Desert Titanium / Natural Titanium / Black',
          'SIM Type': 'Dual SIM (nano-SIM and eSIM)',
          'In The Box': 'iPhone, USB-C Charge Cable (1m), Documentation'
        }
      },
      {
        category: 'Display & Performance',
        items: {
          'Display Size': '6.3 inch Super Retina XDR OLED',
          'Resolution': '2622 x 1206 Pixels with ProMotion 120Hz',
          'Processor': 'A18 Pro Bionic Chip with 16-core Neural Engine',
          'Operating System': 'iOS 18'
        }
      },
      {
        category: 'Camera & Battery',
        items: {
          'Rear Camera': '48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto',
          'Front Camera': '12MP TrueDepth with autofocus',
          'Charging': 'MagSafe wireless charging up to 25W with 30W adapter'
        }
      }
    ],
    variants: {
      storage: [
        { id: 'v-ip16p-128', name: '128 GB', type: 'storage', value: '128 GB', priceDelta: 0, inStock: true },
        { id: 'v-ip16p-256', name: '256 GB', type: 'storage', value: '256 GB', priceDelta: 10000, inStock: true },
        { id: 'v-ip16p-512', name: '512 GB', type: 'storage', value: '512 GB', priceDelta: 30000, inStock: true },
        { id: 'v-ip16p-1tb', name: '1 TB', type: 'storage', value: '1 TB', priceDelta: 50000, inStock: true }
      ],
      colors: [
        { id: 'v-c-desert', name: 'Desert Titanium', type: 'color', value: '#CDBCA8', priceDelta: 0, inStock: true },
        { id: 'v-c-natural', name: 'Natural Titanium', type: 'color', value: '#9E9A95', priceDelta: 0, inStock: true },
        { id: 'v-c-white', name: 'White Titanium', type: 'color', value: '#E8E8E6', priceDelta: 0, inStock: true },
        { id: 'v-c-black', name: 'Black Titanium', type: 'color', value: '#36373A', priceDelta: 0, inStock: true }
      ]
    },
    inStock: true,
    badge: 'Trending',
    partnerStore: 'Apple Premium Reseller',
    deliveryDays: 'Free Express Delivery in 24 Hrs'
  },
  {
    id: 'prod-macbook-air-m3',
    name: 'Apple MacBook Air 13.6" M3 Chip (16GB, 512GB)',
    brand: 'Apple',
    category: 'laptops',
    basePrice: 124900,
    originalPrice: 134900,
    discountPercentage: 7,
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&auto=format&fit=crop&q=80'
    ],
    shortDescription: 'Strikingly thin and fast with M3 chip, Liquid Retina display, and up to 18 hours of battery.',
    description: 'The M3 chip brings even greater capabilities to the superportable 13-inch MacBook Air. With up to 18 hours of battery life and a stunning Liquid Retina display, you can take it anywhere and blaze through work and play.',
    highlights: [
      'Apple M3 chip with 8-core CPU and 10-core GPU',
      '13.6-inch Liquid Retina display with 500 nits brightness',
      '1080p FaceTime HD camera with three-mic array',
      'MagSafe 3 charging port, two Thunderbolt ports',
      'Unified 16GB memory with 512GB ultra-fast SSD'
    ],
    specifications: [
      {
        category: 'Performance',
        items: {
          'Processor': 'Apple M3 Chip (8-Core CPU / 10-Core GPU)',
          'RAM': '16GB Unified Memory',
          'Storage': '512GB SSD Storage',
          'Operating System': 'macOS Sequoia'
        }
      },
      {
        category: 'Display & Audio',
        items: {
          'Display Size': '13.6 inch LED-backlit Liquid Retina',
          'Resolution': '2560 x 1664 Pixels with True Tone',
          'Audio': 'Four-speaker sound system with Spatial Audio'
        }
      }
    ],
    variants: {
      storage: [
        { id: 'v-mba-256', name: '8GB / 256GB', type: 'storage', value: '8GB / 256GB', priceDelta: -20000, inStock: true },
        { id: 'v-mba-512', name: '16GB / 512GB', type: 'storage', value: '16GB / 512GB', priceDelta: 0, inStock: true },
        { id: 'v-mba-1tb', name: '24GB / 1TB', type: 'storage', value: '24GB / 1TB', priceDelta: 40000, inStock: true }
      ],
      colors: [
        { id: 'v-c-midnight', name: 'Midnight', type: 'color', value: '#1E2530', priceDelta: 0, inStock: true },
        { id: 'v-c-starlight', name: 'Starlight', type: 'color', value: '#E9E2D8', priceDelta: 0, inStock: true },
        { id: 'v-c-spacegray', name: 'Space Gray', type: 'color', value: '#7D7E80', priceDelta: 0, inStock: true },
        { id: 'v-c-silver', name: 'Silver', type: 'color', value: '#E3E4E5', priceDelta: 0, inStock: true }
      ]
    },
    inStock: true,
    badge: 'Bestseller',
    partnerStore: 'Croma Official',
    deliveryDays: 'Free Express Delivery'
  },
  {
    id: 'prod-samsung-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra 5G (256 GB)',
    brand: 'Samsung',
    category: 'smartphones',
    basePrice: 129999,
    originalPrice: 139999,
    discountPercentage: 7,
    thumbnail: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&auto=format&fit=crop&q=80'
    ],
    shortDescription: 'Galaxy AI is here. 200MP Quad Telephoto with Snapdragon 8 Elite and Titanium Shield.',
    description: 'Galaxy S25 Ultra sets a new standard with Galaxy AI. Features a 6.8-inch Dynamic AMOLED 2X flat display with Corning Gorilla Armor, built-in S Pen, and a 200MP camera system with AI zoom engine.',
    highlights: [
      'Snapdragon 8 Elite for Galaxy processor',
      '200MP + 50MP + 50MP + 12MP Quad Rear Camera',
      'Integrated S Pen for writing & gesture control',
      '5000 mAh battery with 45W fast charging',
      'Titanium frame with IP68 water resistance'
    ],
    specifications: [
      {
        category: 'Key Specs',
        items: {
          'Display': '6.8 inch QHD+ Dynamic AMOLED 2X (1-120Hz)',
          'RAM & Storage': '12GB RAM | 256GB Internal Storage',
          'Battery': '5000 mAh with Wireless PowerShare',
          'OS': 'Android 15 with One UI 7 (7 years of updates)'
        }
      }
    ],
    variants: {
      storage: [
        { id: 'v-s25-256', name: '256 GB', type: 'storage', value: '256 GB', priceDelta: 0, inStock: true },
        { id: 'v-s25-512', name: '512 GB', type: 'storage', value: '512 GB', priceDelta: 15000, inStock: true }
      ],
      colors: [
        { id: 'v-s25-gray', name: 'Titanium Gray', type: 'color', value: '#5A5B5E', priceDelta: 0, inStock: true },
        { id: 'v-s25-black', name: 'Titanium Black', type: 'color', value: '#242526', priceDelta: 0, inStock: true },
        { id: 'v-s25-silver', name: 'Titanium Silver', type: 'color', value: '#D2D3D6', priceDelta: 0, inStock: true }
      ]
    },
    inStock: true,
    badge: 'New Launch',
    partnerStore: 'Samsung Experience Store',
    deliveryDays: 'Delivery in 2 Days'
  },
  {
    id: 'prod-sony-wh1000xm5',
    name: 'Sony WH-1000XM5 Wireless Active Noise Cancelling Headphones',
    brand: 'Sony',
    category: 'audio',
    basePrice: 29990,
    originalPrice: 34990,
    discountPercentage: 14,
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=80'
    ],
    shortDescription: 'Industry-leading noise cancellation with 2 processors and 8 microphones. 30hr battery.',
    description: 'The WH-1000XM5 headphones rewrite the rules for distraction-free listening. Two processors control 8 microphones for unprecedented noise cancellation and magnificent call quality. Up to 30 hours battery life with quick charging.',
    highlights: [
      'Industry-leading Noise Cancelling with Auto NC Optimizer',
      'Magnificent sound with 30mm precision driver',
      'Crystal clear hands-free calling with 4 beamforming mics',
      'Multipoint connection for seamless device switching',
      '3 minutes charge gives 3 hours playback'
    ],
    specifications: [
      {
        category: 'Audio Specifications',
        items: {
          'Driver Unit': '30mm, dome type (CCAW Voice coil)',
          'Frequency Response': '4 Hz - 40,000 Hz',
          'Battery Life': 'Max. 30 hrs (NC ON), Max. 40 hrs (NC OFF)',
          'Bluetooth Version': '5.2 with LDAC, AAC, SBC'
        }
      }
    ],
    variants: {
      colors: [
        { id: 'v-xm5-black', name: 'Black', type: 'color', value: '#1A1A1A', priceDelta: 0, inStock: true },
        { id: 'v-xm5-silver', name: 'Silver Platinum', type: 'color', value: '#D8D5CD', priceDelta: 0, inStock: true },
        { id: 'v-xm5-blue', name: 'Midnight Blue', type: 'color', value: '#1C2938', priceDelta: 0, inStock: true }
      ]
    },
    inStock: true,
    partnerStore: 'Reliance Digital',
    deliveryDays: 'Delivery Tomorrow'
  },
  {
    id: 'prod-apple-watch-10',
    name: 'Apple Watch Series 10 (GPS + Cellular, 46mm)',
    brand: 'Apple',
    category: 'wearables',
    basePrice: 54900,
    originalPrice: 59900,
    discountPercentage: 8,
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=900&auto=format&fit=crop&q=80'
    ],
    shortDescription: 'Thinnest Apple Watch ever with largest display, sleep apnea notifications, and fast charging.',
    description: 'Series 10 is a major milestone. It features our largest and most advanced display yet, wide-angle OLED that is brighter when viewed at an angle, advanced health insights with ECG, sleep apnea notifications, and faster charging.',
    highlights: [
      'Almost 10% thinner than Series 9',
      'Wide-angle OLED Always-On Retina display',
      'Depth gauge and water temperature sensor for aquatic workouts',
      'Electrical heart sensor (ECG) and Blood Oxygen sensor',
      'Charge to 80% in about 30 minutes'
    ],
    specifications: [
      {
        category: 'Features',
        items: {
          'Case Size': '46mm Jet Black Aluminium',
          'Connectivity': 'GPS + Cellular (LTE and UMTS)',
          'Water Resistance': '50m water resistant and swimproof',
          'Battery Life': 'Up to 18 hours (up to 36 hours in Low Power Mode)'
        }
      }
    ],
    variants: {
      storage: [
        { id: 'v-w10-42', name: '42mm GPS', type: 'size', value: '42mm GPS', priceDelta: -8000, inStock: true },
        { id: 'v-w10-46', name: '46mm GPS+Cellular', type: 'size', value: '46mm GPS+Cellular', priceDelta: 0, inStock: true }
      ],
      colors: [
        { id: 'v-w10-jetblack', name: 'Jet Black Aluminium', type: 'color', value: '#111111', priceDelta: 0, inStock: true },
        { id: 'v-w10-rosegold', name: 'Rose Gold Aluminium', type: 'color', value: '#E7C1B5', priceDelta: 0, inStock: true },
        { id: 'v-w10-silver', name: 'Silver Aluminium', type: 'color', value: '#D8D9DB', priceDelta: 0, inStock: true }
      ]
    },
    inStock: true,
    partnerStore: 'Apple Authorised Reseller',
    deliveryDays: 'Delivery in 1 Day'
  },
  {
    id: 'prod-dyson-v15',
    name: 'Dyson V15 Detect Cordless Vacuum Cleaner',
    brand: 'Dyson',
    category: 'appliances',
    basePrice: 59900,
    originalPrice: 65900,
    discountPercentage: 9,
    thumbnail: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&auto=format&fit=crop&q=80'
    ],
    shortDescription: 'Laser reveals microscopic dust. Intelligently calculates particles and adapts suction power.',
    description: 'Dyson’s most powerful, intelligent cordless vacuum. Features Fluffy Optic cleaner head that reveals twice the invisible dust on hard floors, a Piezo sensor that counts and measures the size of particles, and an LCD screen showing scientific proof of deep clean.',
    highlights: [
      '240AW of powerful suction with Dyson Hyperdymium motor',
      'Illuminating Fluffy Optic head reveals hidden dust',
      'Hair screw tool de-tangles pet hair automatically',
      'Up to 60 minutes of fade-free run time',
      'Whole-machine filtration captures 99.99% of microscopic particles'
    ],
    specifications: [
      {
        category: 'Specifications',
        items: {
          'Suction Power': '240 AW Boost Mode',
          'Bin Volume': '0.77 L',
          'Run Time': '60 Minutes (Eco mode)',
          'Weight': '3.08 kg'
        }
      }
    ],
    variants: {
      colors: [
        { id: 'v-dyson-yellow', name: 'Yellow / Nickel', type: 'color', value: '#E2B024', priceDelta: 0, inStock: true },
        { id: 'v-dyson-gold', name: 'Gold / Iron', type: 'color', value: '#B89758', priceDelta: 3000, inStock: true }
      ]
    },
    inStock: true,
    partnerStore: 'Dyson Direct India',
    deliveryDays: 'Delivery in 2 Days'
  },
  {
    id: 'prod-dell-xps-15',
    name: 'Dell XPS 15 (Intel Core Ultra 7, 32GB RAM, 1TB SSD, RTX 4060)',
    brand: 'Dell',
    category: 'laptops',
    basePrice: 189990,
    originalPrice: 209990,
    discountPercentage: 10,
    thumbnail: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=900&auto=format&fit=crop&q=80'
    ],
    shortDescription: 'InfinityEdge 3.5K OLED touchscreen with CNC machined aluminum and carbon fiber palm rest.',
    description: 'Experience stunning visuals and unmatched computing power. The Dell XPS 15 pairs Intel Core Ultra 7 processor with NVIDIA GeForce RTX 4060 graphics and a breathtaking 3.5K OLED touch display.',
    highlights: [
      'Intel Core Ultra 7 155H Processor with Intel AI Boost',
      'NVIDIA GeForce RTX 4060 Laptop GPU 8GB GDDR6',
      '15.6-inch 3.5K (3456x2160) OLED InfinityEdge Touch',
      '32GB DDR5 Dual Channel RAM with 1TB PCIe NVMe SSD',
      'Studio quality quad-speaker design with Waves Nx 3D audio'
    ],
    specifications: [
      {
        category: 'Hardware',
        items: {
          'Processor': 'Intel Core Ultra 7 (16 Cores, up to 4.8 GHz)',
          'Graphics': 'NVIDIA GeForce RTX 4060 8GB',
          'Memory': '32GB DDR5 5600MHz',
          'Storage': '1TB M.2 PCIe Gen 4 NVMe SSD'
        }
      }
    ],
    inStock: true,
    badge: 'Pro Choice',
    partnerStore: 'Dell Exclusive Store',
    deliveryDays: 'Delivery in 3 Days'
  },
  {
    id: 'prod-oneplus-13',
    name: 'OnePlus 13 5G (16 GB RAM, 512 GB Storage)',
    brand: 'OnePlus',
    category: 'smartphones',
    basePrice: 69999,
    originalPrice: 74999,
    discountPercentage: 7,
    thumbnail: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=900&auto=format&fit=crop&q=80'
    ],
    shortDescription: 'Snapdragon 8 Elite, 50MP Sony LYT-808 Hasselblad Camera, and 6000mAh Glacier Battery.',
    description: 'OnePlus 13 delivers flagship performance with 2K 120Hz ProXDR display, Snapdragon 8 Elite platform, 100W SUPERVOOC charging, and 4th Gen Hasselblad Camera System.',
    highlights: [
      'Snapdragon 8 Elite Mobile Platform',
      'Hasselblad 50MP Triple Camera System',
      '6000 mAh Glacier Battery with 100W Wired & 50W Wireless',
      'IP68 + IP69 Dust and Water Resistance',
      '16GB LPDDR5X RAM + 512GB UFS 4.0 Storage'
    ],
    specifications: [
      {
        category: 'Key Specs',
        items: {
          'Display': '6.82 inch 2K 120Hz Oriental Screen',
          'Camera': '50MP LYT-808 + 50MP Ultra-wide + 50MP 3x Periscope',
          'Charging': '100W SUPERVOOC (1-100% in 36 mins)'
        }
      }
    ],
    variants: {
      storage: [
        { id: 'v-op13-256', name: '12GB / 256GB', type: 'storage', value: '12GB / 256GB', priceDelta: -5000, inStock: true },
        { id: 'v-op13-512', name: '16GB / 512GB', type: 'storage', value: '16GB / 512GB', priceDelta: 0, inStock: true }
      ],
      colors: [
        { id: 'v-op13-black', name: 'Midnight Ocean', type: 'color', value: '#101B2B', priceDelta: 0, inStock: true },
        { id: 'v-op13-blue', name: 'Arctic Dawn', type: 'color', value: '#B2CBE0', priceDelta: 0, inStock: true }
      ]
    },
    inStock: true,
    partnerStore: 'OnePlus Flagship Store',
    deliveryDays: 'Delivery Tomorrow'
  }
];
