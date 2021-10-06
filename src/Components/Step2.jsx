import { useHistory} from "react-router-dom"
import { useEffect, useState } from "react";
import ButtonsGroup from "./ButtonsGroup";



const Step2 = ({path, to='/step1', textLink='Back', textBtn='Next'}) => {
    
    let history = useHistory();
    const handleClick = (path) => history.push(path)
    
    const [placeOfBirth, setPlaceOfBirth] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')

    useEffect(() => {
            setPlaceOfBirth(localStorage.getItem('placeOfBirth'))
            setDateOfBirth(localStorage.getItem('dateOfBirth'))
    }, []);

    const handleStep_2 = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        localStorage.setItem("gender", formData.get('gender'))
        localStorage.setItem("dateOfBirth", formData.get('dateOfBirth'))
        localStorage.setItem("placeOfBirth", formData.get('placeOfBirth'))
        handleClick(path)
    }

    return (
        <div className='wrap-page-step1'>
            <h2 className='text-center p-2'>Personal information</h2>
            
            <form onSubmit={handleStep_2}>
                <div className='field mx-auto' style={{ width:'170px' }}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="man" value="Male" defaultChecked/>
                        <label className="form-check-label" htmlFor="man">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="woman" value="Female"/>
                        <label className="form-check-label" htmlFor="woman">Female</label>
                    </div>
                </div>
                <div className='field'>
                    <label className="form-label">Date of birth</label>
                    <input max = '2005-01-01' required className="form-control" name='dateOfBirth' type="date" value={dateOfBirth || ''} onChange={(e)=> setDateOfBirth(e.target.value)}/>
                </div>
                <div className='field'>
                    <label className='form-label'>Place of Birth</label>
                    <input required className="form-control" name='placeOfBirth' autoComplete='off' value={placeOfBirth || ''} onChange={(e)=> setPlaceOfBirth(e.target.value)}/>
                </div>

                <ButtonsGroup to={to} textLink={textLink} textBtn={textBtn}/>

            </form>
        </div>
    )
}

export default Step2