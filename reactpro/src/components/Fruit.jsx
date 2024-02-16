const Fruit = (props) => {
  const { name, price, emoji, soldout } = props;
  return (
    <>
      <li>
        {emoji} {name} {price} {soldout ? "Sold out" : "In stock"}
      </li>
    </>
  );
};

export default Fruit;
