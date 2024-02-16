import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import "./App.css";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodID={setFoodID} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
