import { useState } from "react"
import { useHistory  } from "react-router-dom"


const Step1 = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    let history = useHistory();
    const handleClick = (path) => history.push(path)

    return (
        <>
            <h1>Stap 1</h1>
            <form>
                <input onChange={(e)=>setName(e.target.value)} value={name} placeholder='name'/>
                <input onChange={(e)=>setSurname(e.target.value)} value={surname} placeholder='surname'/>
            </form>
            <button onClick={()=>handleClick('/step2')}>Next</button>
            <button onClick={()=>handleClick('/')}>Back</button>
        </>
    )
}

export default Step1