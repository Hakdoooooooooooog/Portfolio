const Message = () => {
  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click here to get message</button>
    </div>
  );
};

export default Message;
