function CourseCard({ course }) {

  return (

    <div>

      <h2>{course.title}</h2>

      <p>₹ {course.price}</p>

    </div>
  );
}

export default CourseCard;