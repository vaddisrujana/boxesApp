const Box = (props) => {
  const { text, class1 } = props;
  return (
    <div>
      <p className={class1}>{text}</p>
    </div>
  );
};

const element = (
  <div>
    <h1 className="head">boxes</h1>
    <div className="background">
      <Box text="Small" class1="box1" />
      <Box text="Medium" class1="box2" />
      <Box text="Large" class1="box3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
