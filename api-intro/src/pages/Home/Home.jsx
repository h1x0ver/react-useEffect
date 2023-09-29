import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import "../../assets/Css/home.css";
import Course from "../Course/Course";
import axios from "axios";
import Card from "../../components/Card/Card";

const Home = () => {

  const [teacher, setTeacher] = useState([])
  useEffect(() => {
    axios.get(`https://api.icd-academy.com/api/Teacher`).then(resp => setTeacher(resp.data))
  }, [])
  console.log(teacher);

  return (
    <div className="home">
      <div className="slider w-100 h-100">
        <Slider />
      </div>
      <p className="d-flex mt-4 justify-content-center courses-text">Courses</p>
      <div className="courses">
        <Course />
      </div>
      <p className="d-flex mt-4 justify-content-center courses-text">Teachers</p>
      <div className="container">
      <div className="row">
      {
          teacher && teacher.map((e) => {
            return(
              <div key={e.id} className="col-lg-4 col-sm-12 col-md-6">
              <Card
                imgSrc={`https://api.icd-academy.com/img/${e.imageName}`}
                title={e.firstname}
              />
            </div>
            )
          })
        }
      </div>
      </div>
       


    </div>
  );
};

export default Home;
