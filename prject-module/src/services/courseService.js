export const getCourses = () => {

  const data =
    sessionStorage.getItem("courses");

  return data ? JSON.parse(data) : [];
};

export const addCourse = (course) => {

  const courses = getCourses();

  courses.push(course);

  sessionStorage.setItem(
    "courses",
    JSON.stringify(courses)
  );
};