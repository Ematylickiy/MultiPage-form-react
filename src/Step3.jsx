import { useHistory  } from "react-router-dom"


const Step3 = () => {
    let history = useHistory();
    const handleClick = (path) => history.push(path)

    return (
        <>
            <h1>Stap 3</h1>
            <form>
                <input />
                <input />
                <input />
            </form>
            <button onClick={()=>handleClick('/step2')}>Back</button>
            <button onClick={()=>handleClick('/step4')}>Finish</button>
        </>
    )
}

export default Step3