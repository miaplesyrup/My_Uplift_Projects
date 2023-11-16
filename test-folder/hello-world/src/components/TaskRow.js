import React from "react";

const style = {
    yes: {
        color: "green",
    },
    no: {
        color: "red",
    },
};

const TaskRow = (props) => {
    console.log(props.tasks)
    return (
        <>
            <h3>{props.label}</h3>
            {props.tasks.map((task, index) => {
                return <p key = {index} style = {task.done ? style.yes : style.no}>{task.name}</p>
            })}
        </>
    );
};

export default TaskRow;