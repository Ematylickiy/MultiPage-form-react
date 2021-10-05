import React from 'react'
import { useHistory  } from "react-router-dom"

function StartPage() {
    let history = useHistory();

    const handleClick = (path) => history.push(path)
    
    
    return (
        <div>
            <h1 className='text-center p-3'>Application for Schengen Visa</h1>
            <button className="btn btn-primary btn-lg" onClick={()=>handleClick('/step1')}>Let's start!</button>
        </div>
    )
}

export default StartPage
