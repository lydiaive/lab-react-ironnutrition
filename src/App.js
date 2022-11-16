import './App.css';
import foodsData from './foods.json';
import React, { useState } from "react";
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';


function App() {

  const [foods, setFood] = useState(foodsData)

  return (
    <div className="App">
        {/* Display Add Food component here */}

        <Button> Hide Form / Add New Food </Button>

        {/* Display Search component here */}

        <Divider>Food List</Divider>

        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {foods.map((foodItem, index) => {
            return (
              <FoodBox
                food = {foodItem}
                key = {index}
              />
              )
            })
          }
        </Row>
      
    </div>
  );
}

export default App;
