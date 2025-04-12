import Header from "./Header.js";
import Content from "./Content.js";
import Total from "./Total.js";

const Ejercicio1 = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  const totalExercises = part1.exercises + part2.exercises + part3.exercises;

  return (
    <>
      {/* <Header course={course} /> */}
      <Content parts={[part1, part2, part3]} />
      {/* <Total totalExercises={totalExercises} /> */}
    </>
  );
};

export default Ejercicio1;
