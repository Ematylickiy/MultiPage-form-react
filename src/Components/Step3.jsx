import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import ButtonsGroup from "./ButtonsGroup";



const Step3 = ({path, to='/step2', textLink='Back', textBtn='Next'}) => {
    
    let history = useHistory();
    const handleClick = (path) => history.push(path)

    const [passportNum, setPassportNum] = useState('')
    const [dateOfIssue, setDateOfIssue] = useState('')
    const [dateValid, setDateValid] = useState('')
    const [ussuedBy, setUssuedBy] = useState('')
    const [otherInpDocument, setOtherInpDocument] = useState('')
    const [required, setRequared] = useState(false)


    const handleStep_3 = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        localStorage.setItem('typeDocument', formData.get('typeDocument'))
        localStorage.setItem("passportNum", formData.get('passportNum'))
        localStorage.setItem("dateOfIssue", formData.get('dateOfIssue'))
        localStorage.setItem("dateValid", formData.get('dateValid'))
        localStorage.setItem("ussuedBy", formData.get('ussuedBy'))
        if (formData.get('typeDocument') === 'other') {
            localStorage.setItem('typeDocument', otherInpDocument)
        }
        handleClick(path)
    }

    useEffect(() => {
        setPassportNum(localStorage.getItem('passportNum'))
        setDateOfIssue(localStorage.getItem('dateOfIssue'))
        setDateValid(localStorage.getItem('dateValid'))
        setUssuedBy(localStorage.getItem('ussuedBy'))
    }, []);

    return (
        <div className='wrap-page-step1'>
            <h2 className='text-center p-2'>Document information</h2>
            <form onSubmit={handleStep_3}>
            <div className='field '>
                    <div className='field mx-auto'>
                        <p className='form-label'>Type of document:</p>
                        <div className='border-field' onChange={(e)=>e.target.value === 'other' ? setRequared(true) : setRequared(false)}>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="typeDocument" id="ordinary" value="Ordinary passport" defaultChecked/>
                                <label className="form-check-label" htmlFor="ordinary">Ordinary passport</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="typeDocument" id="diplomatic" value="Diplomatic passport"/>
                                <label className="form-check-label" htmlFor="diplomatic">Diplomatic passport</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="typeDocument" id="idCard" value="ID Card"/>
                                <label className="form-check-label" htmlFor="idCard">ID card</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="typeDocument" id="otherDoc" value="other"/>
                                <label className="form-check-label" htmlFor="other">Other:</label>
                                <input required={required} type="text" className="form-control" value={otherInpDocument || ''} onChange={(e)=>setOtherInpDocument(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='field'>
                    <label className='form-label'>Number of document</label>
                    <input required className="form-control" name='passportNum' autoComplete='off' value={passportNum || ''} onChange={e=>{setPassportNum(e.target.value)}}/>
                </div>

                <div className='dateValid'>
                    <div className='field'>
                        <label className='form-label'>Date of issue</label>
                        <input required max='2021-01-01' className="form-control" name='dateOfIssue' type="date" value={dateOfIssue || ''} onChange={e=>{setDateOfIssue(e.target.value)}}/>
                    </div>
                    <div className='field'>
                        <label className='form-label'>Valid until</label>
                        <input required className="form-control" name='dateValid' type="date" value={dateValid || ''} onChange={e=>{setDateValid(e.target.value)}}/>
                    </div>
                </div>
                <div className={dateOfIssue > dateValid ? "invalid-feedback" : 'valid-feedback' }>Please enter correct date.</div> 

                <div className='field'>
                    <label className='form-label'>Ussued by</label>
                    <input required className="form-control" name='ussuedBy' autoComplete='off' value={ussuedBy || ''} onChange={e=>{setUssuedBy(e.target.value)}}/>
                </div>
                
                <ButtonsGroup to={to} textLink={textLink} textBtn={textBtn}/>
            </form>
        </div>
    )
}

export default Step3