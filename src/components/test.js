import { useEffect, useState } from "react"

export const Test=()=>{
    const [count,setCount]=useState(0)
    const [flag,setFlag]=useState(true)
    useEffect(()=>{console.log('I am useeffect')},[])
    const handleClick=()=>{
        setCount(prev=>{
            const newCount=prev+1
            console.log(newCount)
            return newCount
        })
    }

    // const handleClick = () => {
    //     setCount(prevCount => {
    //         const newCount = prevCount + 1;
    //         // Use the updated state value immediately here
    //         console.log('Updated Count:', newCount);
    //         // Perform any logic needed with the updated value
    //         return newCount;
    //     });
    // };

    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleClick}>+</button>
        </>
    )
}