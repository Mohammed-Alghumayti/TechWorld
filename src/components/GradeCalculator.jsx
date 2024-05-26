import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GradeCalculator = () => {
    const [grades, setGrades] = useState([]);
    const [grade, setGrade] = useState('');

    const handleAddGrade = () => {
        setGrades([...grades, parseFloat(grade)]);
        setGrade('');
    };

    const handleReset = () => {
        setGrades([]);
        setGrade('');
    };

    const calculateAverage = () => {
        if (grades.length === 0) return 0;
        const total = grades.reduce((acc, grade) => acc + grade, 0);
        return (total / grades.length).toFixed(2);
    };

    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">
                <h1 className='text-center fw-bold'>WELCOME TO</h1>
                <h2 className='text-center'><span className='badge bg-light text-info'>"TECH WORLD !"</span></h2>
                <p className='text-light fw-bold text-center mt-3'>Welcome to the Tech World! Dive into the dynamic realm of technology, where computer science and IT fields converge to shape our digital future. Explore our curated collection of tech books, perfect for students and enthusiasts alike. Join us on this journey of discovery and innovation!</p>
                <Link to="/books" className='mb-3 col-2 btn btn-secondary text-light fw-bold'>
                    Go To Books
                </Link>

                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img height={130} src={`${process.env.PUBLIC_URL}/images/16.png`} className="d-block w-100" alt="Logo" />
                        </div>
                        <div className="carousel-item">
                            <img height={130} src={`${process.env.PUBLIC_URL}/images/17.png`} className="d-block w-100" alt="Logo"  />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
            <hr className='text-light'/>

            <div className="container d-flex justify-content-center mt-3">
                <div className="col-4">
                    <h2 className='fs-4 d-flex justify-content-center mt-3 badge bg-warning'>Grade Calculator</h2>
                    <input
                        className='form-control'
                        type="number"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        placeholder="Enter grade"
                    />
                    <div className="row d-flex justify-content-center mt-4">
                        <button className='col-6 btn btn-warning text-light fw-bold' onClick={handleAddGrade}>Add Grade</button>
                        <button className='col-4 ms-3 btn btn-danger text-light fw-bold' onClick={handleReset}>Reset</button>
                    </div>
                    <h3 className='text-center mt-3 mb-4'>Average Grade: {calculateAverage()}</h3>
                </div>
            </div>
        </div>
    );
};

export default GradeCalculator;
