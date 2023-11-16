import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const handleClick = () => {
    console.log("Click!");
  };
  return <ChildComponent clickMe={handleClick} />;
};

export default ParentComponent;
