import CourseHeader from "./CourseHeader";
import CoursePart from "./CoursePart";
import EjerciciosTotales from "./EjerciciosTotales";

const Course = ({ courses }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <CourseHeader courseHeader={course.name} />
          <CoursePart courseParts={course.parts} />
          <EjerciciosTotales courseExercices={course.parts} />
        </li>
      ))}
    </ul>
  );
};

export default Course;
