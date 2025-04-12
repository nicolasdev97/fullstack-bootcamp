import ContentPart1 from "./ContentPart1";
import ContentPart2 from "./ContentPart2";
import ContentPart3 from "./ContentPart3";

const Content = ({ parts, exercises }) => {
  return (
    <>
      <ContentPart1 part1={parts[0]} exercise1={exercises[0]} />
      <ContentPart2 part2={parts[1]} exercise2={exercises[1]} />
      <ContentPart3 part3={parts[2]} exercise3={exercises[2]} />
    </>
  );
};

export default Content;
