import React from "react";
import "./App.css";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Section from "./components/Section";
// import ScoreWidget from "./components/ScoreWidget";
import TaskRow from "./components/TaskRow";
import {useState} from "react";


// function App() {
//   return (
//     <>
//       <NavBar />
//       <Hero />
//       <Footer />
//       <Section />
//     </>
//   );
// }

// function App() {

//   const initialTasks = [
//   {name: "eat", done: true},
//   {name: "code", done: true},
//   {name: "sleep", done: false},
//   ];

//   const [tasks, setTasks] = useState(initialTasks);
//   const [newTask, setNewTask] = useState("");

//   const addNewTask = () => {
//     //setup task to add
//     const task = {
//       name: newTask,
//       done: false,
//     };
//     if (task.length === 0) {
//       return <p>Invalid input</p>
//     }
//     // setTasks(tasks.concat(task));
//     return setTasks([...tasks, task]);
//           setNewTask("");
//   };

//   const doneTasks = tasks.filter((task) => task.done);
//   const pendingTasks = tasks.filter((task) => !task.done)

//   return (
//     <div className="App">
//       <input 
//         type = "text" 
//         value={newTask} 
//         onChange = {(e) => setNewTask(e.target.value)}
//       />
//       <button onClick={addNewTask}>Add Task</button>
//       <TaskRow tasks = {doneTasks} label = "Done Tasks" />
//       <TaskRow tasks = {pendingTasks} label = "Pending Tasks" />

//     </div>
//     // <>
//     //   {/* <ScoreWidget />
//     //   <NavBar />
//     //   <Hero />
//     //   <Footer />
//     //   <Section /> */}
//     // </>
//   );
// }



// export default App;

function App() {
  
 
}



export default App;