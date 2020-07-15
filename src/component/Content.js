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
                        <h2>Content:</h2>
                        <hr />
                        <ul>
                            <li>Introduction to web design and development</li>
                            <li>Introduction to HTML5 and CSS3</li>
                            <li>Introduction to bootstrap and JSON</li>
                            <li>Javascript and DOM manipulations</li>
                            <li>Parsing JSON data using Javascript(Ajax and fetch API)</li>
                            <li>ES6 Fundamentals</li>
                            <li>Introduction to Node and React Js</li>
                            <li>Component lifecycle methods</li>
                            <li>Finally assigning tasks day by day according to the topics discussed in daily class.</li>
                        </ul>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}