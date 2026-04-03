const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1580894894513-79c9e1e3c9f0?w=400&auto=format&fit=crop&q=60",
    description:
      "Comfortable over‑ear wireless headphones with noise cancellation and 20 hours battery life.",
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&auto=format&fit=crop&q=60",
    description:
      "Track your fitness, heart rate, and notifications with this sleek smartwatch.",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    price: 1299.0,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60",
    description:
      "High‑performance laptop with RTX graphics, 16GB RAM, and fast SSD storage.",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155223f3f9?w=400&auto=format&fit=crop&q=60",
    description:
      "Portable speaker with deep bass, waterproof design, and 12 hours of playtime.",
  },
  {
    id: 5,
    name: "DSLR Camera",
    price: 799.0,
    image:
      "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=400&auto=format&fit=crop&q=60",
    description:
      "Capture stunning photos with this DSLR camera featuring a 24MP sensor and 4K video.",
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1528701800484-1c7ed1f1f1d5",
    description:
      "Lightweight and breathable running shoes designed for comfort and performance.",
  },
  {
    id: 7,
    name: "Coffee Maker",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&auto=format&fit=crop&q=60",
    description:
      "Automatic coffee maker with programmable settings and built‑in grinder.",
  },
  {
    id: 8,
    name: "Smartphone",
    price: 999.0,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=60",
    description:
      "Latest smartphone with OLED display, triple camera system, and 5G connectivity.",
  },
  {
    id: 9,
    name: "Office Chair",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1588776814546-ec7d1b5f5f9d?w=400&auto=format&fit=crop&q=60",
    description:
      "Ergonomic office chair with lumbar support and adjustable height.",
  },
  {
    id: 10,
    name: "Electric Guitar",
    price: 499.0,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&auto=format&fit=crop&q=60",
    description:
      "Classic electric guitar with maple neck and versatile sound for all genres.",
  },
  {
    id: 11,
    name: "Tablet",
    price: 399.0,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60",
    description:
      "Slim tablet with high‑resolution display, perfect for reading, streaming, and productivity.",
  },
  {
    id: 12,
    name: "Fitness Tracker",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&auto=format&fit=crop&q=60",
    description:
      "Compact fitness tracker with step counting, sleep monitoring, and calorie tracking.",
  },
  {
    id: 13,
    name: "Drone",
    price: 599.0,
    image:
      "https://images.unsplash.com/photo-1508610048659-a06b669e9f7f?w=400&auto=format&fit=crop&q=60",
    description:
      "Quadcopter drone with 4K camera and GPS stabilization for aerial photography.",
  },
  {
    id: 14,
    name: "Mechanical Keyboard",
    price: 129.0,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60",
    description:
      "RGB mechanical keyboard with tactile switches and customizable lighting.",
  },
  {
    id: 15,
    name: "Smart TV",
    price: 699.0,
    image:
      "https://images.unsplash.com/photo-1580894894513-79c9e1e3c9f0?w=400&auto=format&fit=crop&q=60",
    description: "Ultra HD smart TV with streaming apps and voice control.",
  },
  {
    id: 16,
    name: "Backpack",
    price: 59.0,
    image:
      "https://images.unsplash.com/photo-1528701800484-1c7ed1f1f1d5?w=400&auto=format&fit=crop&q=60",
    description:
      "Durable backpack with multiple compartments and water‑resistant fabric.",
  },
  {
    id: 17,
    name: "Sunglasses",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=400&auto=format&fit=crop&q=60",
    description: "Stylish polarized sunglasses with UV protection.",
  },
  {
    id: 18,
    name: "Smart Light Bulb",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155223f3f9?w=400&auto=format&fit=crop&q=60",
    description:
      "Wi‑Fi enabled smart bulb with adjustable brightness and color.",
  },
  {
    id: 19,
    name: "Microwave Oven",
    price: 199.0,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&auto=format&fit=crop&q=60",
    description: "Compact microwave oven with multiple cooking presets.",
  },
  {
    id: 20,
    name: "Vacuum Cleaner",
    price: 249.0,
    image:
      "https://images.unsplash.com/photo-1588776814546-ec7d1b5f5f9d?w=400&auto=format&fit=crop&q=60",
    description:
      "Cordless vacuum cleaner with powerful suction and HEPA filter.",
  },
  {
    id: 21,
    name: "Smart Thermostat",
    price: 199.0,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=60",
    description: "Energy‑saving smart thermostat with app control.",
  },
  {
    id: 22,
    name: "Blender",
    price: 89.0,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&auto=format&fit=crop&q=60",
    description: "High‑speed blender for smoothies, soups, and sauces.",
  },
  {
    id: 23,
    name: "Cookware Set",
    price: 299.0,
    image:
      "https://images.unsplash.com/photo-1580894894513-79c9e1e3c9f0?w=400&auto=format&fit=crop&q=60",
    description: "10‑piece non‑stick cookware set for everyday cooking.",
  },
  {
    id: 24,
    name: "Hair Dryer",
    price: 59.0,
    image:
      "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=400&auto=format&fit=crop&q=60",
    description: "Fast‑drying hair dryer with ionic technology.",
  },
  {
    id: 25,
    name: "Electric Kettle",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&auto=format&fit=crop&q=60",
    description: "Stainless steel electric kettle with auto shut‑off.",
  },
  {
    id: 26,
    name: "Smart Plug",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155223f3f9?w=400&auto=format&fit=crop&q=60",
    description: "Control appliances remotely with this Wi‑Fi smart plug.",
  },
  {
    id: 27,
    name: "Portable Charger",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&auto=format&fit=crop&q=60",
    description: "High‑capacity power bank for charging devices on the go.",
  },
];

export function getProducts() {
  return products;
}
