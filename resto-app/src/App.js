import "./App.css";
import { useState } from "react";
import ItemBox from "./components/ItemBox";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Burger",
      price: 50,
      category: "Food",
      image: "https://cdn-icons-png.flaticon.com/512/198/198416.png",
    },
    {
      id: 2,
      name: "Iced Tea",
      price: 45,
      category: "Drink",
      image: "https://cdn-icons-png.flaticon.com/512/1187/1187466.png",
    },
    {
      id: 3,
      name: "Pizza",
      price: 100,
      category: "Food",
      image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    },
    {
      id: 4,
      name: "Fries",
      price: 25,
      category: "Food",
      image: "https://cdn-icons-png.flaticon.com/512/123/123300.png",
    },
    {
      id: 5,
      name: "Coffee",
      price: 45,
      category: "Drink",
      image: "https://cdn-icons-png.flaticon.com/512/3127/3127450.png",
    },
  ]);
  console.log(items);
  return (
    <div className="App">
      <h1>Resto App</h1>
      <div className="ItemList">
        {items.map((item) => (
          <ItemBox
            name={item.name}
            price={item.price}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
