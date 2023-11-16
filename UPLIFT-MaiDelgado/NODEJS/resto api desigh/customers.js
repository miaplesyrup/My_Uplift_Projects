
const express = require('express');
const router = express.Router();

// Dummy data for testing purposes
const customers = [
  { 
    id: 1, name: "Mai", 
    email: "maie@example.com" 
    },
  { 
    id: 2, name: "Inday", 
    email: "inday@example.com" 
    },
  { 
    id: 3, name: "Dong", 
    email: "dong@example.com" 
    },
];

const orders = [
  { 
    id: 1, 
    customer_id: 1, 
    item: "Gelato", 
    quantity: 2 
    },
  { 
    id: 2, 
    customer_id: 2, 
    item: "Tinola", 
    quantity: 1 
    },
  { id: 3, 
    customer_id: 1, 
    item: "Adobo", 
    quantity: 1 
    },
  { id: 4, 
    customer_id: 3, 
    item: "Sinigang", 
    quantity: 3 
    },
];

// Get all customers
router.get('/customers', (req, res) => {
  res.status(200).json(customers);
});

// Get all orders
router.get('/orders', (req, res) => {
  res.status(200).json(orders);
});

module.exports = router;



























// const express = require('express');
// const router = express.Router();

// // Get all restaurants
// router.get('/restaurants', (req, res) => {
//   // TODO: Implement code to get all restaurants from database
// });

// // Get a restaurant by ID
// router.get('/restaurants/:id', (req, res) => {
//   // TODO: Implement code to get a restaurant by ID from database
// });

// // Add a new restaurant
// router.post('/restaurants', (req, res) => {
//   // TODO: Implement code to add a new restaurant to the database
// });

// // Update an existing restaurant
// router.put('/restaurants/:id', (req, res) => {
//   // TODO: Implement code to update an existing restaurant in the database
// });

// // Delete a restaurant
// router.delete('/restaurants/:id', (req, res) => {
//   // TODO: Implement code to delete a restaurant from the database
// });

// module.exports = router;
