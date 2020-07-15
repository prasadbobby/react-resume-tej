import React from 'react';
// import data from '../data/data.json';
// import profileIcon from '../img/img.jpg';
import {Link} from 'react-router-dom';


export default function Education(props) {
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
                        <h2>Trainer Details:</h2>
                        <hr />
                        <table class="table" border="1">
                         <thead>
                          <tr>
                            <th>Names</th>
                            <th>Email</th>
                            <th>Contact</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Rajesh Nallaboina</td>
                            <td>rajesh.n@apssdc.in</td>
                            <td>9966458712</td>
                          </tr>
                          <tr>
                            <td>N.Surya Narayana</td>
                            <td>venkatasuryanarayana.n@apssdc.in</td>
                            <td>8121754565</td>
                          </tr>
                          <tr>
                            <td>K.Apparao Swami</td>
                            <td>apparaoswami.k@apssdc.in</td>
                            <td>9494997234</td>
                          </tr>
                          <tr>
                            <td>V.Gayatri Devi</td>
                            <td>gayatridevi.v@apssdc.in</td>
                            <td>9885195664</td>
                          </tr>
                          <tr>
                            <td>D.Sai Ram</td>
                            <td>sairam.d@apssdc.in</td>
                            <td>8328028900</td>
                          </tr>
                        </tbody>
                      </table>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}