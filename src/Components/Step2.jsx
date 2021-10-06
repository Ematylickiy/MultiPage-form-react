import { useHistory} from "react-router-dom"
import { useEffect, useState } from "react";
import ButtonsGroup from "./ButtonsGroup";
import { handleForm } from "../config";



const Step2 = ({path, to='/step1', textLink='Back', textBtn='Next'}) => {
    
    let history = useHistory();
    const handleClick = (path) => history.push(path);
    
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    useEffect(() => {
            setPlaceOfBirth(localStorage.getItem('placeOfBirth'))
            setDateOfBirth(localStorage.getItem('dateOfBirth'))
    }, []);

    const allNamesInp = ['gender', 'dateOfBirth', 'placeOfBirth'];
    const genders = ['Male', 'Female'];

    return (
        <div className='wrap-page-step1'>
            <h2 className='text-center p-2'>Personal information</h2>
            
            <form onSubmit={(event) => handleForm(event, allNamesInp, handleClick, path)}>
                <div className='field mx-auto' style={{ width:'170px' }}>
                    {genders.map(gender => (
                            <div key={gender} className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id={gender} value={gender} required/>
                                <label className="form-check-label" htmlFor={gender}>{gender}</label>
                            </div>
                        ))}
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