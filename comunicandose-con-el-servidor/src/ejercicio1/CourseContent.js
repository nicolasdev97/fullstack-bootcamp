const CourseContent = ({ coursePart }) => {
  return (
    <div>
      <p>
        {coursePart.name} {coursePart.exercises}
      </p>
    </div>
  );
};

export default CourseContent;
