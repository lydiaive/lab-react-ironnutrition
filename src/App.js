import './App.css';
import foodsData from './foods.json';
import React, { useState } from "react";
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {

  const [foods, setFood] = useState(foodsData)

  const addFoodHandler = (newFoodItem) => {
      setFood((prevState) => {
      return [...prevState, newFoodItem]
    })
  }

   const filterSearchHandler = (searchTerm) => {
      console.log(searchTerm)
      const newArr = [...foodsData].filter(foodItem =>  {
        return foodItem.name.toLowerCase().includes(searchTerm)
      })
      setFood(newArr)
  } 

    const deleteFootItem = (foodItemName) => {
      console.log(foodItemName)
      const newArr = foods.filter(foodItem => {
        return foodItem.name !== foodItemName
      })
      setFood(newArr)
  } 
  

/*   Attemt to search for new creates Foods as well:

    const filterSearchHandler = (searchTerm) => {
    if (searchTerm === '') {
      setFood(foodsData)
    } else {
      const newArr = [...foods].filter(foodItem =>  {
        return foodItem.name.toLowerCase().includes(searchTerm)
      })
      setFood(newArr)
    }
    
} */

  return (
    <div className="App">
        <AddFoodForm onNewFoodItem={addFoodHandler}/>
        <Button> Hide Form / Add New Food </Button>
        <Search searchHandler={filterSearchHandler}/>
        <Divider>Food List</Divider>
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {foods.map((foodItem, index) => {
            return (
              <FoodBox
                food = {foodItem}
                key = {index}
                deleteHandler={deleteFootItem}
              />
              )
            })
          }
        </Row>
      
    </div>
  );
}

export default App;
