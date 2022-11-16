import './App.css';
import foodsData from './foods.json';
import React, { useState } from "react";
import FoodBox from './components/FoodBox';


function App() {

  const [foods, setFood] = useState(foodsData)

  return (
    <div className="App">
    <h1>Food List</h1>
      {foods.map((foodItem, index) => {
        return (
          <FoodBox
            food = {foodItem}
            key = {index}
          />
          )
        })
      }
    </div>
  );
}

export default App;
