
const express = require('express');
const router = express.Router();
const helmet = require('helmet');

const app = express();
const port = 4269;

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


app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
// const helmet = require('helmet');

// const app = express();
// const port = 4269;

// const books = [
//     {
//         id: 1,
//         title: "Biag ni Lam-ang",
//         publishedDate: new Date(),
//         pages: [
//             "page1",
//             "page2",
//             "page3",
//             "page4",
//             "page5"
//         ],
//         authorId: 2
//     },
//     {
//         id: 2,
//         title: "Noli me tangere",
//         publishedDate: new Date(),
//         pages: [
//             "page1",
//             "page2",
//             "page3",
//             "page4",
//             "page5"
//         ],
//         authorId: 1
//     },
//     {
//         id: 3,
//         title: "Ibong Adarna",
//         publishedDate: new Date(),
//         pages: [
//             "page1",
//             "page2",
//             "page3",
//             "page4",
//             "page5"
//         ],
//         authorId: 3
//     },
//     {
//         id: 4,
//         title: "El Fili",
//         publishedDate: new Date(),
//         pages: [
//             "page1",
//             "page2",
//             "page3",
//             "page4",
//             "page5"
//         ],
//         authorId: 1
//     },
// ]

// const authors = [
//     {
//         id: 1,
//         firstName: "Jose",
//         lastName: "Rizal",
//     }
// ]

// const critics = [
//     {
//         id: 1,
//         message: "this sucks",
//         bookId: 2
//     },
//     {
//         id: 2,
//         message: "this is awesome",
//         bookId: 2
//     },
//     {
//         id: 3,
//         message: "nice a GMA show",
//         bookId: 4
//     },
// ]

// app.use(helmet());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/v1/books', (req, res) =>{
//     res.json(books);
// });

// app.get('/v1/books/:id', (req, res) =>{
//     const book = books.find(book => book.id === +req.params.id);
//     res.json(book);
// });

// app.get('/v1/critics/:id', (req, res) =>{
//     const critic = critics.find(critic => critic.id === +req.params.id);
//     res.json(critic);
// });

// app.get('/v1/books/:id/pages', (req, res) =>{
//     const id = +req.params.id;
//     const { from, to } = req.query;
//     if(isNaN(id)){
//         res.status(400).send("Make sure ID is a number");
//     }

//     if(to < from){
//         res.status(400).send("Pagination is incorrect");
//     }

//     const book = books.find(book => book.id === +req.params.id);
//     if(!book){
//         res.sendStatus(404);
//     }
    
//     if(to > book.pages.length){
//         res.status(400).send("Last page cannot be greater than actual pages");
//     }

//     const pages = book.pages.slice((from-1), to);
//     res.send(pages);
// });

// app.get('/v1/authors/:id/bestsellers', (req, res) => {
//     const { id } = req.params;
//     const author = authors.find(author => author.id === +id);

//     const bestsellers = books.filter(book => book.authorId === author.id);

//     let bestsellersWithCritic = bestsellers.map(book => {
//         const criticsForBook = critics.filter(critic => critic.bookId === book.id);
//         const pathsForCritic = criticsForBook.map(critic => `/v1/critic/${critic.id}`);
//         book.critics = pathsForCritic;
//         return book;
//     });

//     author.books = bestsellersWithCritic;
//     res.json(author);
// });

// app.listen(port, () =>{
//     console.log(`Listening on ${port}`);
// });