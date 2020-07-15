import React from 'react';
// import data from '../data/data.json';
// import profileIcon from '../img/img.jpg';
import {Link} from 'react-router-dom';


export default function Career(props) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>console.log(data))

        // let info1=data.profile;
        // console.log(info1.career)
    return (
        <div className="navigation">
            
             
                <ul className="header-list">
                    <li><Link to={{pathname:'/trainers'}} className="inner">Trainers Names</Link></li>
                    <li><Link to={{pathname:'/courseoverview'}} className="inner">Course Overview</Link></li>
                    <li><Link to={{pathname:'/content'}} className="inner">Content</Link></li>
                    <li><Link to={{pathname:'/trainerdetails'}} className="inner">Trainer Details</Link></li>
                </ul>
            <div className="row justify-content-center">
            
            <div className="col-lg-8 m-2">
                <div className="card shadow">
                    <div className="card-body">
                        <h2>Course Overview:</h2>
                        <hr />
                        <p>The main objective of this React Certification course is to help you become familiar with the process and gain the skills you'll need to become a professional React developer. You will learn the fundamentals of React through self-paced and instructor-led training to understand and build React components and structure applications with Redux.</p>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}