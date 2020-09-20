import React, {useState, useEffect} from 'react';

const useMousePosition = () => {
    const [position, setPosition] = useState(
        {
            x: 0,
            y: 0
        }
    )

    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            console.log("move")
            setPosition({
                x: event.clientX,
                y: event.clientY
            })
        })
    }, [])
    
    return position
}

export default useMousePosition;