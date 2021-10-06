import {useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import ButtonsGroup from "./ButtonsGroup";


const Step1 = ({path, to='/', textLink='Back', textBtn='Next'}) => {

    let history = useHistory();
    const handleClick = (path) => history.push(path);
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    
    useEffect(() => {
            setName(localStorage.getItem('name'))
            setSurname(localStorage.getItem('surname'))
        }, []);

    function handleStep_1(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        localStorage.setItem('name', formData.get('name'))
        localStorage.setItem('surname', formData.get('surname'))
        handleClick(path)
    }

    return (
        <div className='wrap-page-step1'>
            <h2 className='text-center p-2'>Personal information</h2>
            
            <form onSubmit={handleStep_1} className='needs-validation'>
                <div className='field'>
                    <label className="form-label">First name</label>
                    <input className="form-control"
                        required autoComplete='off'
                        name='name'
                        value={name || ''}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label className="form-label">Last name</label>
                    <input className="form-control"
                        required autoComplete='off'
                        name='surname'
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