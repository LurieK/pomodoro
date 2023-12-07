
import React, {useState} from 'react'


const Goal=()=>{
        const [goal, setGoal] = useState('')
        const [goalText, setGoalText] = useState('')
        console.log(`here is my goalText ${goalText}`)
        console.log(`here is the goal${goal}`)

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!goalText.trim()) {
            return;
          }

        setGoal(goalText)
    }


    return(
        <div>
            <h4>Goal for this session</h4>
            <form
            className='goalText'
            onSubmit={(e) => handleSubmit(e)}
            >
          <input
            type="text"
            onChange={(e) => setGoalText(e.target.value)}
            placeholder='type it here'
            value={goalText}
          />
          <button type="submit">Enter</button>
        </form>
        </div>
    )
}
export default Goal

