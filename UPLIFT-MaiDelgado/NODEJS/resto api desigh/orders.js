
const express = require('express');
const router = express.Router();

// Dummy data for testing purposes

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

// Get all orders
router.get('/orders', (req, res) => {
  res.status(200).json(orders);
});

module.exports = router;
