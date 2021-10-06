import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import ButtonsGroup from "./ButtonsGroup";



function Step4({path, to='/step3', textLink='Back', textBtn='Next'}) {
    
    let history = useHistory();
    const handleClick = (path) => history.push(path)

    const [otherInpPurpose, setOtherInpPurpose] = useState('')
    const [duration, setDuration] = useState('')
    const [classValidaion, setClassValidaion] = useState('valid-feedback');
    const [required, setRequared] = useState(false)
    
    const handleStep_4 = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
            if (formData.get('countryTrip') === 'Сhoose a country') {
                return setClassValidaion('invalid-feedback')
            }
        localStorage.setItem("countryTrip", formData.get('countryTrip'));
        localStorage.setItem("tripPurpose", formData.get('tripPurpose'));
            if (formData.get('tripPurpose') === 'other') {
                localStorage.setItem('tripPurpose', otherInpPurpose)
            }
        localStorage.setItem("duration", formData.get('duration'))
        handleClick(path)
    }

    useEffect(() => {
        setDuration(localStorage.getItem('duration'))
    }, []);

    const handleSelectedList = (event) => {
        if (event.target.value !== 'Сhoose a country') {
            setClassValidaion('valid-feedback')
        }
    }

    return (
        <div className='wrap-page-step1'>
            <h2 className='text-center p-2'>Trip information</h2>
            <form onSubmit={handleStep_4}>
                <label className='form-label'>Country of trip</label>
                <select name='countryTrip' className="form-select" aria-label="Default select example" onChange={handleSelectedList}>
                    <option>Сhoose a country</option>
                    <option value="Poland">Poland</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Latvia">Latvia</option>
                    <option value="USA">USA</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Spain">Spain</option>
                </select>
                <div className={classValidaion}>Please choose correct country.</div> 

                <div className='field'>
                    <div className='field mx-auto'>
                        <p className='form-label'>Trip purpose:</p>
                        <div className='border-field' onChange={(e)=>e.target.value === 'other' ? setRequared(true) : setRequared(false)}>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="tripPurpose" id="work" value="Work" defaultChecked/>
                                <label className="form-check-label" htmlFor="work">Work</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="tripPurpose" id="rest" value="Rest"/>
                                <label className="form-check-label" htmlFor="rest">Rest</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="tripPurpose" id="treatment" value="Treatment"/>
                                <label className="form-check-label" htmlFor="treatment">Treatment</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="tripPurpose" id="education" value="Education"/>
                                <label className="form-check-label" htmlFor="education">Education</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="tripPurpose" id="transit" value="Transit"/>
                                <label className="form-check-label" htmlFor="transit">Transit</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="tripPurpose" id="other" value="other"/>
                                <label className="form-check-label" htmlFor="other">Other:</label>
                                <input required={required} type="text" className="form-control" value={otherInpPurpose} onChange={(e)=>setOtherInpPurpose(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className='field'>
                        <label className='form-label'>Duration of stay (no more 180 days)</label>
                        <div>
                            <input required
                                className="form-control width-inp"
                                autoComplete='off'
                                value={duration || ''}
                                name='duration'
                                onChange={(e) => setDuration(e.target.value)}
                                type="number"
                                max='180'/>
                            <span> days</span>
                        </div>
                    </div>
                    <ButtonsGroup to={to} textLink={textLink} textBtn={textBtn}/>
            </form>
        </div>
    )
}

export default Step4
