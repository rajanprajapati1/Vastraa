// Mock data for Vastraa Fashion E-commerce

export const categories = [
  {
    id: 'women',
    name: 'Women',
    slug: 'women',
    image: 'https://www.sedonia.com.au/cdn/shop/files/shadow_tee-whisper-9.webp?v=1741997742&width=533',
    subcategories: ['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Shoes', 'Accessories']
  },
  {
    id: 'men',
    name: 'Men',
    slug: 'men',
    image: 'https://cdn.shopify.com/s/files/1/0587/7294/7136/files/AIMER_CREER_2048x2048.jpg?v=1730999008',
    subcategories: ['Shirts', 'Pants', 'Outerwear', 'Shoes', 'Accessories']
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://images.squarespace-cdn.com/content/v1/5d75f045a039976159f348de/c087ef38-1c95-4349-94d5-bbc8e23de01d/wardrobe+essentials+-+the+little+black+dress+%2B+Marcia+Crivorot+personal+stylist+and+color+analysis+CT+NJ+NY.png',
    subcategories: ['Bags', 'Jewelry', 'Watches', 'Sunglasses']
  }
];

export const products = [
  // Women's Collection
  {
    id: '1',
    name: 'Silk Midi Dress',
    price: 299,
    originalPrice: 399,
    category: 'women',
    subcategory: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=1000&fit=crop'
    ],
    colors: ['Black', 'Navy', 'Cream'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Elegantly crafted silk midi dress perfect for both day and evening occasions.',
    isNew: true,
    isTrending: true
  },
  {
    id: '2',
    name: 'Cashmere Blend Sweater',
    price: 189,
    category: 'women',
    subcategory: 'Tops',
    images: [
      'https://m.media-amazon.com/images/I/81cnjkNOoNL._UY1100_.jpg',
      'https://www.travelinoutdoor.com/cdn/shop/files/bb23f027-de28-46c0-adc6-d76b6b48b4d2.jpg?v=1751291268&width=1946'
    ],
    colors: ['Beige', 'Charcoal', 'Ivory'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Luxurious cashmere blend sweater with ribbed details.',
    isTrending: true
  },
  {
    id: '3',
    name: 'High-Waist Tailored Trousers',
    price: 159,
    category: 'women',
    subcategory: 'Bottoms',
    images: [
      `https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/10373889/2019/8/13/8cfc8353-26be-488d-8c9d-39f2f4d905c01565686202903-HM-Men-Beige-Solid-Cotton-Chinos-Slim-Fit-4741565686202256-1.jpg`,
      'https://www.crossjeans.com/cdn/shop/files/E_120_015_cross_jeans_null_1_1445x.jpg?v=1747905156'
    ],
    colors: ['Black', 'Navy', 'Camel'],
    sizes: ['24', '26', '28', '30', '32'],
    description: 'Classic high-waist trousers with a tailored fit.',
    isNew: true
  },
  {
    id: '4',
    name: 'Wool Blend Coat',
    price: 449,
    originalPrice: 599,
    category: 'women',
    subcategory: 'Outerwear',
    images: [
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop'
    ],
    colors: ['Black', 'Camel', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Timeless wool blend coat with minimalist silhouette.'
  },
  {
    id: '5',
    name: 'Leather Ankle Boots',
    price: 279,
    category: 'women',
    subcategory: 'Shoes',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop'
    ],
    colors: ['Black', 'Tan', 'Dark Brown'],
    sizes: ['35', '36', '37', '38', '39', '40', '41'],
    description: 'Premium leather ankle boots with block heel.'
  },

  // Men's Collection
  {
    id: '6',
    name: 'Oxford Cotton Shirt',
    price: 89,
    category: 'men',
    subcategory: 'Shirts',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&h=1000&fit=crop'
    ],
    colors: ['White', 'Light Blue', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Classic oxford cotton shirt with modern fit.',
    isNew: true
  },
  {
    id: '7',
    name: 'Slim Fit Chinos',
    price: 129,
    category: 'men',
    subcategory: 'Pants',
    images: [
      'https://image.hm.com/assets/hm/f0/6e/f06e936f71ec45614e2977cc9508d6e5552e1b8b.jpg?imwidth=2160',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop',
    ],
    colors: ['Khaki', 'Navy', 'Olive', 'Black'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    description: 'Contemporary slim-fit chinos in premium cotton.',
    isTrending: true
  },
  {
    id: '8',
    name: 'Merino Wool Blazer',
    price: 399,
    category: 'men',
    subcategory: 'Outerwear',
    images: [
      'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop'
    ],
    colors: ['Navy', 'Charcoal', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Sophisticated merino wool blazer with contemporary cut.'
  },
  {
    id: '9',
    name: 'Leather Derby Shoes',
    price: 329,
    category: 'men',
    subcategory: 'Shoes',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=1000&fit=crop'
    ],
    colors: ['Black', 'Brown', 'Tan'],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    description: 'Handcrafted leather derby shoes with classic design.'
  },

  // Accessories
  {
    id: '10',
    name: 'Structured Leather Tote',
    price: 349,
    category: 'accessories',
    subcategory: 'Bags',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop'
    ],
    colors: ['Black', 'Tan', 'Cream'],
    sizes: ['One Size'],
    description: 'Minimalist leather tote with clean lines.',
    isNew: true
  },
  {
    id: '11',
    name: 'Gold Chain Necklace',
    price: 159,
    category: 'accessories',
    subcategory: 'Jewelry',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop'
    ],
    colors: ['Gold', 'Silver'],
    sizes: ['One Size'],
    description: 'Delicate gold chain necklace with modern appeal.'
  },
  {
    id: '12',
    name: 'Classic Aviator Sunglasses',
    price: 199,
    category: 'accessories',
    subcategory: 'Sunglasses',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=1000&fit=crop'
    ],
    colors: ['Black', 'Gold', 'Silver'],
    sizes: ['One Size'],
    description: 'Timeless aviator sunglasses with premium lenses.'
  }
];

export const collections = [
  {
    id: 'spring-essentials',
    title: 'Spring Essentials',
    subtitle: 'Fresh pieces for the new season',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
    productIds: ['1', '2', '6', '7']
  },
  {
    id: 'minimal-wardrobe',
    title: 'Minimal Wardrobe',
    subtitle: 'Curated essentials for effortless style',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop',
    productIds: ['2', '3', '4', '8']
  }
];

export const lookbooks = [
  {
    id: 'modern-minimalism',
    title: 'Modern Minimalism',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
        products: ['1', '5', '10']
      },
      {
        url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop',
        products: ['6', '7', '9']
      },
      {
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop',
        products: ['2', '3']
      }
    ]
  }
];

export const heroSlides = [
  {
    id: 1,
    image: 'https://8pm.it/media/wysiwyg/About-Us-_-1_3.jpg',
    title: 'New Season Arrivals',
    subtitle: 'Discover the latest in contemporary fashion',
    cta: 'Shop Now',
    link: '/products?new=true'
  },
  {
    id: 2,
    image: 'https://sprudge.com/wp-content/uploads/2016/06/Sprudge-CoffeeAndClothesAmsterdam-KarinaHof-CoffeeClothesScandinavianEmbassySEwardrobe_fall2016_Marthe-Hennink.jpg',
    title: 'Minimal Essentials',
    subtitle: 'Curated pieces for your wardrobe',
    cta: 'Explore',
    link: '/category/women'
  }
];