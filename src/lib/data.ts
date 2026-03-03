export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  category: string;
  collection: string;
  sizes: string[];
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  ingredients: string[];
  isBestseller?: boolean;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
}

export interface Collection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  accentColor: string;
  productIds: string[];
}

const UNSPLASH = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export const products: Product[] = [
  {
    id: "midnight-jasmine",
    name: "Midnight Jasmine",
    subtitle: "Pure Jasmine Absolute",
    price: 3200,
    image: UNSPLASH("photo-1541643600914-78b084683601", 600, 800),
    hoverImage: UNSPLASH("photo-1588405748880-12d1d2a59f75", 600, 800),
    category: "intense-perfume",
    collection: "sabae",
    sizes: ["10ml", "50ml"],
    description:
      "A captivating blend of night-blooming jasmine harvested under moonlight, distilled with ancient techniques to preserve its intoxicating essence. Each drop carries the soul of a thousand petals.",
    notes: {
      top: ["Bergamot", "Green Leaves"],
      heart: ["Jasmine Absolute", "Ylang Ylang", "Tuberose"],
      base: ["White Musk", "Sandalwood", "Amber"],
    },
    ingredients: [
      "Organic Jasmine Absolute",
      "Wild Sandalwood Oil",
      "Pure Grain Alcohol",
      "Bergamot Essential Oil",
    ],
    isBestseller: true,
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: "sacred-sandalwood",
    name: "Sacred Sandalwood",
    subtitle: "Mysore Sandalwood Essence",
    price: 4500,
    image: UNSPLASH("photo-1594035910387-fea081ac30d0", 600, 800),
    hoverImage: UNSPLASH("photo-1595425959667-1436f2a0425c", 600, 800),
    category: "intense-perfume",
    collection: "sabae",
    sizes: ["10ml", "50ml"],
    description:
      "Sourced from sustainably harvested Mysore sandalwood, this fragrance embodies spiritual tranquility. Warm, creamy, and deeply meditative — a scent for the soul.",
    notes: {
      top: ["Cardamom", "Pink Pepper"],
      heart: ["Mysore Sandalwood", "Rose Absolute"],
      base: ["Vetiver", "Cedarwood", "Vanilla"],
    },
    ingredients: [
      "Mysore Sandalwood Oil",
      "Organic Rose Absolute",
      "Cardamom Extract",
      "Pure Vanilla",
    ],
    isBestseller: true,
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: "wild-vetiver",
    name: "Wild Vetiver",
    subtitle: "Earthy & Grounding",
    price: 2800,
    image: UNSPLASH("photo-1587017539504-67cfbddac569", 600, 800),
    hoverImage: UNSPLASH("photo-1592945403244-b3fbafd7f539", 600, 800),
    category: "body-mist",
    collection: "sabae",
    sizes: ["50ml", "130ml"],
    description:
      "Wild vetiver roots from the Himalayan foothills, steam-distilled to capture nature's raw, earthy beauty. A grounding scent that connects you to the earth.",
    notes: {
      top: ["Lemon", "Grapefruit"],
      heart: ["Vetiver", "Geranium"],
      base: ["Patchouli", "Oakmoss", "Musk"],
    },
    ingredients: [
      "Wild Vetiver Root Oil",
      "Organic Patchouli",
      "Lemon Essential Oil",
      "Aloe Vera Extract",
    ],
    rating: 4.6,
    reviewCount: 67,
  },
  {
    id: "rose-saffron",
    name: "Rose & Saffron",
    subtitle: "Royal Floral Elixir",
    price: 5200,
    image: UNSPLASH("photo-1557170334-a9632e77c6e4", 600, 800),
    hoverImage: UNSPLASH("photo-1616604426203-3e424ecab44a", 600, 800),
    category: "intense-perfume",
    collection: "sabae",
    sizes: ["10ml", "50ml"],
    description:
      "A regal fusion of Kannauj rose attar and Kashmiri saffron — crafted with the precision of Mughal perfumers. This is luxury distilled into liquid gold.",
    notes: {
      top: ["Saffron", "Bergamot"],
      heart: ["Damask Rose", "Oud", "Iris"],
      base: ["Amber", "Musk", "Sandalwood"],
    },
    ingredients: [
      "Kannauj Rose Attar",
      "Kashmiri Saffron",
      "Organic Oud Oil",
      "Amber Resin",
    ],
    isNew: true,
    rating: 4.9,
    reviewCount: 42,
  },
  {
    id: "citrus-bloom",
    name: "Citrus Bloom",
    subtitle: "Refreshing & Vibrant",
    price: 1800,
    image: UNSPLASH("photo-1615634260167-c8cdede054de", 600, 800),
    hoverImage: UNSPLASH("photo-1595425959667-1436f2a0425c", 600, 800),
    category: "body-mist",
    collection: "sabae",
    sizes: ["50ml", "130ml"],
    description:
      "Sun-kissed citrus groves meet delicate white florals in this uplifting body mist. Cold-pressed organic citrus oils dance with neroli for a scent that brightens any moment.",
    notes: {
      top: ["Blood Orange", "Lemon Verbena"],
      heart: ["Neroli", "Orange Blossom"],
      base: ["White Tea", "Light Musk"],
    },
    ingredients: [
      "Organic Blood Orange Oil",
      "Neroli Essential Oil",
      "Lemon Verbena Extract",
      "White Tea Extract",
    ],
    isBestseller: true,
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "mogra-moonlight",
    name: "Mogra Moonlight",
    subtitle: "Indian Mogra Absolute",
    price: 3800,
    image: UNSPLASH("photo-1595425959667-1436f2a0425c", 600, 800),
    hoverImage: UNSPLASH("photo-1541643600914-78b084683601", 600, 800),
    category: "intense-perfume",
    collection: "sabae",
    sizes: ["10ml", "50ml"],
    description:
      "The intoxicating fragrance of Indian mogra (Arabian jasmine), handpicked at dawn when its aroma is most potent. A scent that evokes warm summer evenings and moonlit gardens.",
    notes: {
      top: ["Green Leaves", "Pear"],
      heart: ["Mogra Absolute", "Jasmine Sambac"],
      base: ["Creamy Musk", "Benzoin", "Cedarwood"],
    },
    ingredients: [
      "Pure Mogra Absolute",
      "Jasmine Sambac Oil",
      "Benzoin Resin",
      "Cedarwood Oil",
    ],
    rating: 4.8,
    reviewCount: 73,
  },
  {
    id: "forest-oudh",
    name: "Forest Oudh",
    subtitle: "Deep & Mysterious",
    price: 6500,
    image: UNSPLASH("photo-1588405748880-12d1d2a59f75", 600, 800),
    hoverImage: UNSPLASH("photo-1594035910387-fea081ac30d0", 600, 800),
    category: "intense-perfume",
    collection: "sabae",
    sizes: ["10ml", "50ml"],
    description:
      "Rare, sustainably sourced Assam oud aged for over 20 years, blended with ancient forest moss. A profound fragrance for those who seek depth and mystery.",
    notes: {
      top: ["Black Pepper", "Saffron"],
      heart: ["Aged Oud", "Rose", "Incense"],
      base: ["Amber", "Sandalwood", "Forest Moss"],
    },
    ingredients: [
      "Aged Assam Oud Oil",
      "Organic Saffron",
      "Wild Forest Moss",
      "Natural Amber",
    ],
    isNew: true,
    rating: 5.0,
    reviewCount: 28,
  },
  {
    id: "anti",
    name: "Anti",
    subtitle: "Alcohol-Free Skin Scent",
    price: 3900,
    image: "/images/bottle-anti.png",
    category: "skin-scent",
    collection: "sabae",
    sizes: ["50ml"],
    description:
      "The namesake of a philosophy — Anti is our rebellion against synthetic perfumery. A warm, resinous skin scent that fuses amber, sandalwood, and a whisper of saffron into a fragrance that becomes uniquely yours on the skin.",
    notes: {
      top: ["Saffron", "Pink Pepper"],
      heart: ["Amber", "Labdanum", "Orris"],
      base: ["Sandalwood", "Musk", "Benzoin"],
    },
    ingredients: [
      "Organic Amber Resin",
      "Mysore Sandalwood Oil",
      "Kashmiri Saffron",
      "Benzoin Absolute",
    ],
    isBestseller: true,
    rating: 4.9,
    reviewCount: 97,
  },
  {
    id: "neroli-sunrise",
    name: "Neroli Sunrise",
    subtitle: "Bright & Uplifting",
    price: 3500,
    image: UNSPLASH("photo-1615634260167-c8cdede054de", 600, 800),
    hoverImage: UNSPLASH("photo-1592945403244-b3fbafd7f539", 600, 800),
    category: "intense-perfume",
    collection: "sabae",
    sizes: ["10ml", "50ml"],
    description:
      "Pure neroli distilled from bitter orange blossoms at sunrise. A luminous, radiant fragrance that captures the golden hour in a bottle.",
    notes: {
      top: ["Neroli", "Petitgrain", "Mandarin"],
      heart: ["Orange Blossom", "Jasmine", "Rose"],
      base: ["White Amber", "Cedar", "Musk"],
    },
    isNew: true,
    rating: 4.8,
    reviewCount: 35,
    ingredients: [
      "Organic Neroli Oil",
      "Orange Blossom Water",
      "Mandarin Oil",
      "White Amber",
    ],
  },
];

export const collection: Collection = {
  id: "sabae",
  name: "Sabae",
  tagline: "A Little Bit of Everything",
  description:
    "Sabae — meaning 'everything' in Nepali. Our debut collection brings together eight exquisite organic fragrances that span the full spectrum of nature's artistry. Florals, woods, citruses, resins — a little bit of everything, distilled into pure, alcohol-free perfumery.",
  image: UNSPLASH("photo-1490750967868-88aa4f44baee", 1200, 600),
  accentColor: "#B8860B",
  productIds: products.map((p) => p.id),
};

export const collections: Collection[] = [collection];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCollection(id: string): Collection | undefined {
  return collections.find((c) => c.id === id);
}

export function getCollectionProducts(collectionId: string): Product[] {
  const col = getCollection(collectionId);
  if (!col) return [];
  return col.productIds
    .map((pid) => getProduct(pid))
    .filter(Boolean) as Product[];
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.isBestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}
