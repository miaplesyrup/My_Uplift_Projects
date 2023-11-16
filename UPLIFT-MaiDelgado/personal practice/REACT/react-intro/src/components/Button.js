const styles = {
  buttonStyle: {
    // css properties
    padding: "1rem",
    fontSize: "1.25rem",
    borderRadius: "0.25rem",
    backgroundColor: "blueviolet",
    color: "white",
  },
};

const Button = (props) => {
  const { buttonText } = props;
  return <button style={styles.buttonStyle}>{buttonText}</button>;
};

export default Button;
