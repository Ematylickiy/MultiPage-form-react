import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function ResultPage() {
    let history = useHistory();
    const handleClick = (path) => history.push(path)
    
    const submitForm = () => {
        localStorage.clear()
        handleClick('/succeed')

        setTimeout(() => handleClick('/'), 1000) 
    }


    return (
        <div>
            <h1 className='text-center p-3'>Check all information</h1>
            <hr />

            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title ">Personal information:</h4>
                            <br />
                            <div className="p-3 mb-2 bg-light text-dark">
                                <p className="card-text">First name: <span className='bold'>{localStorage.getItem('name')}</span></p>
                                <p className="card-text">Last name: <span className='bold'>{localStorage.getItem('surname')}</span></p>
                                <Link to='/step1/edit' className="btn btn-outline-primary">Edit</Link>
                            </div>
                            <div className='p-3 mb-2 bg-light text-dark'>
                                <p className="card-text">Gender: <span className='bold'>{localStorage.getItem('gender')}</span></p>
                                <p className="card-text">Date of birth: <span className='bold'>{localStorage.getItem('dateOfBirth')}</span></p>
                                <p className="card-text">Place of birth: <span className='bold'>{localStorage.getItem('placeOfBirth')}</span></p>
                                <Link to='/step2/edit' className="btn btn-outline-primary">Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title ">Document information:</h4>
                            <br />
                            <div className="p-3 mb-2 bg-light text-dark">
                                <p className="card-text">Type of document: <span className='bold'>{localStorage.getItem('typeDocument')}</span></p>
                                <p className="card-text">Number of document: <span className='bold'>{localStorage.getItem('passportNum')}</span></p>
                                <p className="card-text">Date of issue: <span className='bold'>{localStorage.getItem('dateOfIssue')}</span></p>
                                <p className="card-text">Valid until: <span className='bold'>{localStorage.getItem('dateValid')}</span></p>
                                <p className="card-text">Ussued by: <span className='bold'>{localStorage.getItem('ussuedBy')}</span></p>
                                <Link to='/step3/edit' className="btn btn-outline-primary">Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title ">Trip information:</h4>
                            <br />
                            <div className="p-3 mb-2 bg-light text-dark">
                                <p className="card-text">Country of trip: <span className='bold'>{localStorage.getItem('countryTrip')}</span></p>
                                <p className="card-text">Trip purpose: <span className='bold'>{localStorage.getItem('tripPurpose')}</span></p>
                                <p className="card-text">Duration of stay: <span className='bold'>{localStorage.getItem('duration')} days</span></p>
                                <Link to='/step4/edit' className="btn btn-outline-primary">Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={submitForm} className="btn btn-primary btn-lg">Submit</button>
        </div>
    )
}

export default ResultPage
