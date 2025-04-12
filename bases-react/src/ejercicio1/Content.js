import ContentPart from "./ContentPart";

const Content = ({ parts }) => {
  return (
    <>
      <ContentPart partName={parts[0].name} exercise={parts[0].exercises} />
      <ContentPart partName={parts[1].name} exercise={parts[1].exercises} />
      <ContentPart partName={parts[2].name} exercise={parts[2].exercises} />
    </>
  );
};

export default Content;
