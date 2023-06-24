'use client'

import { useState } from "react"
import FancyButton from "./Buttons/FancyButton"
    
export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col items-center space-y-4">
            <p>You clicked me {count} times</p>
            <FancyButton onClick={() => setCount(count+1)}>Click Me</FancyButton>
        </div>
    )
}