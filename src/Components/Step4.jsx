import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { handleForm } from '../config';
import ButtonsGroup from "./ButtonsGroup";


function Step4({path, to='/step3', textLink='Back', textBtn='Next'}) {
    
    let history = useHistory();
    const handleClick = (path) => history.push(path);

    const [otherInpPurpose, setOtherInpPurpose] = useState('');
    const [duration, setDuration] = useState('');
    const [classValidaion, setClassValidaion] = useState('valid-feedback');
    const [required, setRequared] = useState(false);

    const allNamesInp = ['countryTrip', 'tripPurpose', 'duration'];
    const tripPurposes = ['Work', 'Rest', 'Treatment', 'Education', 'Transit'];
    const countrys = ['Poland', 'Lithuania', 'Latvia', 'USA', 'Estonia', 'Spain'];
    
    const validationFormAndSubmit = (event) => {
        const formData = new FormData(event.target);
        event.preventDefault()
        if (formData.get('countryTrip') === 'Сhoose a country') {
            return setClassValidaion('invalid-feedback')
        }
        
        handleForm(event, allNamesInp, handleClick, path)
        
        if (formData.get('tripPurpose') === 'other') {
            localStorage.setItem('tripPurpose', otherInpPurpose)
        }
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
            <form onSubmit={validationFormAndSubmit}>
                
                <label className='form-label'>Country of trip</label>
                <select name='countryTrip' className="form-select" aria-label="Default select example" onChange={handleSelectedList}>
                    <option>Сhoose a country</option>
                    {countrys.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
                <div className={classValidaion}>Please choose correct country.</div> 
                
                <div className='field'>
                    <div className='field mx-auto'>
                        <p className='form-label'>Trip purpose:</p>
                        <div className='border-field' onChange={(e)=>e.target.value === 'other' ? setRequared(true) : setRequared(false)}>
                            
                            {tripPurposes.map(purpose => (
                                <div key={purpose}className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="tripPurpose" id={purpose} value={purpose} required/>
                                    <label className="form-check-label" htmlFor={purpose}>{purpose}</label>
                                </div>
                            ))}
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
