import {useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import ButtonsGroup from "./ButtonsGroup";
import { handleForm } from "../config";


const Step1 = ({path, to='/', textLink='Back', textBtn='Next'}) => {

    let history = useHistory();
    const handleClick = (path) => history.push(path);
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    
    useEffect(() => {
            setName(localStorage.getItem('First name'))
            setSurname(localStorage.getItem('Last name'))
    }, []);
    
    const allNamesInp = ['First name', 'Last name']; 

    return (
        <div className='wrap-page-step1'>
            <h2 className='text-center p-2'>Personal information</h2>
            
            <form onSubmit={(event)=>handleForm(event, allNamesInp, handleClick, path)} className='needs-validation'>
                <div className='field'>
                    <label className="form-label">First name</label>
                    <input className="form-control"
                        required autoComplete='off'
                        name='First name'
                        value={name || ''}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label className="form-label">Last name</label>
                    <input className="form-control"
                        required autoComplete='off'
                        name='Last name'
                        value={surname || ''}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <ButtonsGroup to={to} textLink={textLink} textBtn={textBtn}/>
            </form>
        </div>
    )
}

export default Step1