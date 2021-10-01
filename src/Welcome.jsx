import React from 'react'
import { useHistory  } from "react-router-dom"

function Welcome() {
    let history = useHistory();

    const handleClick = (path) => history.push(path)
    
    
    return (
        <div>
            <h1>Let's start!</h1>
            <button onClick={()=>handleClick('/step1')}>GO!</button>
        </div>
    )
}

export default Welcome
