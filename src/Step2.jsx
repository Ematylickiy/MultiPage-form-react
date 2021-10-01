import { useHistory, useLocation  } from "react-router-dom"


const Step2 = () => {

    let history = useHistory();
    const handleClick = (path) => history.push(path)

    return (
        <>
            <h1>Stap 2</h1>
            <form>
                <input />
                <input />
                <input />
            </form>
            <button onClick={()=>handleClick('/step3')}>Next</button>
            <button onClick={()=>handleClick('/step1')}>Back</button>
        </>
    )
}

export default Step2