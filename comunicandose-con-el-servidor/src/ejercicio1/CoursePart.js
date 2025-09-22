import CourseContent from "./CourseContent";

const CoursePart = ({ courseParts }) => {
  return (
    <>
      {courseParts.map((coursePart) => (
        <CourseContent key={coursePart.id} coursePart={coursePart} />
      ))}
    </>
  );
};

export default CoursePart;
