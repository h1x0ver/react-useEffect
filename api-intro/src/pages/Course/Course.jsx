import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";


const Course = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
      axios
        .get(`https://api.icd-academy.com/api/Course`)
        .then((resp) => setCourse(resp.data));
    }, []);
  
    return (
      <div className="container">
        <div className="row justify-content-center">
          {course &&
            course.map((e) => {
              return (
                <div key={e.id} className="col-lg-4 col-sm-12 col-md-6">
                  <Card
                    imgSrc={`https://api.icd-academy.com/img/${e.imageName}`}
                    title={e.courseName}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
}

export default Course