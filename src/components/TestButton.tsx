function TestButton(): JSX.Element {
  const handleClick = () => {
    alert("AHHHHH");
  };
  return (
    <button onClick={handleClick}>
      Make me do something when I'm clicked...
    </button>
  );
}

export default TestButton;
