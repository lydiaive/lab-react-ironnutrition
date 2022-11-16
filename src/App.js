import './App.css';
import foodsData from './foods.json';
import React, { useState } from "react";


function App() {

  const [foods, setFood] = useState(foodsData)

  return (
    <div className="App">
    <h1>Food List</h1>
      {foods.map(foodItem => {
        return (
          <div>
            <p>{foodItem.name}</p>
            <img src={foodItem.image} alt="Food" width={100} />
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
