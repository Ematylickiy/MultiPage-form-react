import React from 'react'
import { Link } from "react-router-dom"


function ButtonsGroup ({to, textLink='Back', textBtn='Next' }) {
    return (
        <div className='wrap-actions-steps'>
            <Link to={to} className="btn btn-secondary">{textLink}</Link>
            <button className="btn btn-primary" type="submit">{textBtn}</button>
        </div>
    )
}

export default ButtonsGroup
