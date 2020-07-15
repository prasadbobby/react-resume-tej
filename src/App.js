import React from 'react';
import Logo from './logo.svg';
import './App.css';

// import Hello from "./Hello";
//import Wish from "./Wish";
// import Greeting from "./component/Greeting";
// import Welcome from "./component/Welcome";
import States from "./component/States";
import ClassState from "./component/classState";
import Hooks from "./component/Hooks";
import data from "./data/data.json";
import Img from "./apssdc_final.png"; 
import {BrowserRouter, Route, Link } from 'react-router-dom';
import Resume from "./component/Resume";
import Trainers from "./component/Trainers";
import CourseOverview from "./component/CourseOverview";
import Content from "./component/Content";
import TrainerDetails from "./component/TrainerDetails";




function App() {
  return (
    <div className="App">
    {/*
    <h1 className="text-primary">Hello</h1>
    
    <h1> APSSDC </h1>
    <h2>Rajesh</h2>
    <Home name="APSSDC"/>
    <Hello/>
    <Wish/> 
*/}
   { /*<Greeting name="Rajesh" mail="rajesh@gmail.com">
    </Greeting>
    <img src={Logo} alt="images" style={{width:"200px"}}/>
    <h1> We are Creating class component & pass the pops </h1>
    
    <Welcome name="Teja" college="NEC">
        <p>How are you</p>
    </Welcome>
    <Welcome name="Sai" college="RVR">
        <p>Hello students</p>
    </Welcome>     
    

    <States/>
    <ClassState/>
    <h1>Using Hooks</h1>
    <Hooks/>
    <Home/>
    */}

    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/trainers" component={Trainers}/>
        <Route path="/courseoverview" component={CourseOverview}/>
        <Route path="/content" component={Content}/>
        <Route path="/trainerdetails" component={TrainerDetails}/>
        
        
    </BrowserRouter>

    </div>

    




    
    
  );
}

let Home=()=>{
    let profile=data.profiles;
    console.log("profile");

    return(
        <div className="row justify-content-center">
            {
                profile.map((value,index)=>(
                    <div className="col-sm-10 col-md-4 col-lg-4 mt-1" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <img src={Img} alt="Profile Icon" style={{width:"10em"}}></img>
                                <h1>{value.basic.name}</h1>
                                <p>{value.basic.role}</p>
                                <p>{value.basic.phone}</p>
                                <p>{value.basic.email}</p>
    <Link to={{pathname:"./resume", profilesData:{i:index}}} className="btn btn-primary">Profile</Link>
                            </div>

                        </div>

                    </div>
                ))
            }
        </div>
    );
}
export default App;
