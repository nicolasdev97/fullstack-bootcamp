import ContentPart from "./ContentPart";

const Content = ({ parts }) => {
  return (
    <>
      <ContentPart part={parts[0].name} exercise={parts[0].exercises} />
      <ContentPart part={parts[1].name} exercise={parts[1].exercises} />
      <ContentPart part={parts[2].name} exercise={parts[2].exercises} />
    </>
  );
};

export default Content;
