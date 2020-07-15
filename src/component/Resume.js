import React from 'react';
import data from "../data/data.json";
import {Link} from 'react-router-dom';
import Img from "../ReactJS.jpg"; 




export default function Resume(props) {
	fetch("https://jsonplaceholder.typicode.com/posts")
	.then(res=>res.json())
	.then(data=>console.log(data))

	let info=data.profiles[props.location.profilesData.i]
	console.log(info.basic);

	return (

		<div className="navigation">


				<ul className="header-list">
                    <li><Link to={{pathname:'/trainers'}} className="inner">Trainers Names</Link></li>
                    <li><Link to={{pathname:'/courseoverview'}} className="inner">Course Overview</Link></li>
                    <li><Link to={{pathname:'/content'}} className="inner">Content</Link></li>
                    <li><Link to={{pathname:'/trainerdetails'}} className="inner">Trainer Details</Link></li>
                </ul>

		<div className="row justify-content-center">
			
			<div className="col-lg-3 m-2">
				<div className="card new-card">
                            <div className="card-body">
                                <h1>{info.basic.name}</h1>
                                <img src={Img} alt="Profile Icon" style={{width:"10em"}}></img>
                                <p>{info.basic.role}</p>
                                <p>{info.basic.phone}</p>
                                <p>{info.basic.email}</p>
                       
                            </div>

                        </div>
			</div>
			
			<div className="col-lg-6 m-2">
				<div className="card new-card">
                            <div className="card-body">
                                
                                <h1>Overview : </h1>
                                <h6>{info.basic.des}</h6>
                            </div>

                        </div>
			</div>
		</div>
		</div>
	)
}