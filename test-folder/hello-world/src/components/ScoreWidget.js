import {useState} from 'react'

const ScoreWidget = () => {
        // const score = 100;
        const [points, setPoints] = useState(0);


        // const addScore = () => {
        //     setPoints(points + 1);
        // }
    return (
        <div>
            <p>Score: {points}</p>
            <button onClick = {() => setPoints(points + 1)}>Add Score</button>
        
        </div>
    )
}

export default ScoreWidget;