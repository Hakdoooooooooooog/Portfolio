import Fruit from "./Fruit";

const Fruits = () => {
  //const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
  const fruits = [
    {
      name: "Apple",
      price: 3,
      emoji: "🍎",
      soldout: false,
    },
    {
      name: "Banana",
      price: 6,
      emoji: "🍌",
      soldout: false,
    },
    {
      name: "Mango",
      price: 3,
      emoji: "🥭",
      soldout: true,
    },
    {
      name: "Orange",
      price: 8,
      emoji: "🍊",
      soldout: false,
    },
    {
      name: "Pineapple",
      price: 4,
      emoji: "🍍",
      soldout: true,
    },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
