import React from "react";
import { useLocation  } from "react-router-dom"

const Steps = () => {

    const { pathname } = useLocation()
    let currentStepNum = parseInt(pathname.slice(1).replace(/[^\d]/g, ''))

    let steps = ['Step 1', 'Step 2', 'Step 3', 'Finish'];

    return (
        < div className = "steps mt-4 mb-4" >
            {steps.map((step, index) => {
                return (
                    <div className = {`step ${currentStepNum === index + 1 ? 'is-active' : ''} 
                                    ${currentStepNum > index + 1 ? 'is-completed' : ''}`}>
                        <div className = "step__marker"> {index + 1} </div>
                        <div className = "step__title mt-1"> {step} </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Steps