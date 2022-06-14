import React, { useState } from 'react'

function Counter() {
    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    const incrementOne = () => {
        return setcounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        return setcounterTwo(counterTwo + 1)
    }

    const isEven=()=>{
        return counterOne%2===0
    }


    return (
        <div>
            <div>
                <button onClick={incrementOne}>countOne-{counterOne}</button>
                <span>{isEven()? 'Even':'odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>countTwo-{counterTwo}</button>
            </div>
        </div>
    )

}
export default Counter