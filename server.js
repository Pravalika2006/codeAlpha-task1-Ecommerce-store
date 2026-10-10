const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const products = [
  { id: 1, name: "T-Shirt", price: 499, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300" },
  { id: 2, name: "Shoes", price: 1999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300" },
  { id: 3, name: "Watch", price: 2999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
  { id: 4, name: "Jeans", price: 1299, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300" },
  { id: 5, name: "Bag", price: 799, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300" },
  { id: 6, name: "Sunglasses", price: 599, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300" },
  { id: 7, name: "Cap", price: 299, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300" },
  { id: 8, name: "Jacket", price: 2499, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300" },
  { id: 9, name: "Headphones", price: 1499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
  { id: 10, name: "Sneakers", price: 3499, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300" },
  { id: 11, name: "Hoodie", price: 1899, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300" },
  { id: 12, name: "Belt", price: 399, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300" }
];

app.get('/api/products', (req, res) => res.json(products));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(3000, () => console.log('Shop running on http://localhost:3000'));
