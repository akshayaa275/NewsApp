import React, { useEffect, useState } from 'react'

function TimerApp() {
    // State to store the seconds value
    const [seconds,setSeconds] = useState(0);

    // state to check whether the timer is running or not
    const [running,setRunning] = useState(false);

    // useEffect runs when running is true
    useEffect(() => {
        l
    })
  return (
    <div>
        <h1>Timer application</h1>
        <p>{seconds} seconds </p>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
    </div>
  )
}

export default TimerApp