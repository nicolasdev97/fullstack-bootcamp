import ContentPart from "./ContentPart";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        <ContentPart
          key={index}
          partName={part.name}
          exercise={part.exercises}
        />
      ))}
    </>
  );
};

export default Content;
