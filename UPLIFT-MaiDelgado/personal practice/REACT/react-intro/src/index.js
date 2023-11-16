import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App";
import ParentComponent from "./ParentComponent";

// const user = {
//   name: "Karl",
//   age: "18",
// };

// function greet(user) {
//   return <p>Greetings from {user}!</p>;
// }

// const list = (
//   <ul>
//     <li>First Item</li>
//     <li>Second Item</li>
//     <li>Third Item</li>
//   </ul>
// );

// function NavBar() {
//   return <div>Navbar</div>;
// }

// const element = <h1 className="App color">Hello World! {greet(user.name)}</h1>;

const root = document.querySelector("#root");
createRoot(root).render(<ParentComponent />);

// console.log(element);
