import { useEffect, useState }
from "react";

import { getCourses }
from "../../services/courseService";

function UserDashboard() {

  const [courses, setCourses] =
    useState([]);

  useEffect(() => {

    const data = getCourses();

    setCourses(data);

  }, []);

  return (

    <div>

      <h1>User Dashboard</h1>

      {
        courses.map((course) => (

          <div key={course.id}>

            <h3>{course.title}</h3>

            <p>{course.price}</p>

          </div>
        ))
      }

    </div>
  );
}

export default UserDashboard;