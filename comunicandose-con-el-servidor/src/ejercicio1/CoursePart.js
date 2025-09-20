import CourseContent from "./CourseContent";

const CoursePart = ({ courseParts }) => {
  return (
    <div>
      {courseParts.map((coursePart) => (
        <CourseContent key={coursePart.id} coursePart={coursePart} />
      ))}
    </div>
  );
};

export default CoursePart;
