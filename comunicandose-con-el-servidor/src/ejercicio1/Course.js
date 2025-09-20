import CourseHeader from "./CourseHeader";
import CoursePart from "./CoursePart";
import EjerciciosTotales from "./EjerciciosTotales";

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <CourseHeader courseHeader={course} />
          <CoursePart courseParts={course.parts} />
          <EjerciciosTotales courseExercices={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
