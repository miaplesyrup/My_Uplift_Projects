const express = require("express");
const taskController = require("../controllers/tasks");
const router = express.Router();


router.get("/", taskController.getAllTask);
router.get("/:id", taskController.getSingleTask
);

// POST /v1/tasks
// router.post("/", async (req, res) => {
//   try {
//     const task = new Task(req.body);
//     task.status = "pending";
//     await task.save();
//     res.json(task);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error creating task.");
//   }
// });

// POST /v1/tasks
// router.post("/", async (req, res) => {
//   try {
//     //check if user exist
//     const user = await User.findById(req.body.userID);
//     if (!user) {
//       return res.send({ message: "User does not exist." });
//     }

//     const task = new Task({
//       name: req.body.name,
//       status: "pending",
//     });
//     await task.save();

//     // will add id on the tasks[]
//     user.tasks.push(task._id);
//     user.save();
//     res.send({ message: "Task created successfully." });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error creating task.");
//   }
// });

// // PUT/PATCH /v1/tasks/:id
// router.patch("/:id", async (req, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(
//       req.params.id,
//       {
//         name: req.body.name,
//       },
//       { new: true }
//     );
//     res.json(task);
//     // res.send({ message: "updated succesfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error updating task.");
//   }
// });

// // DELETE /v1/tasks/:id
// router.delete("/:id", async (req, res) => {
//   try {
//     await Task.findByIdAndDelete({ _id: req.params.id });
//     res.send({ message: "Task delete successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error deleting task.");
//   }
// });

module.exports = router;
