import { Divider, Input } from 'antd';
import React, { useState } from "react"


function AddFoodForm(props) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const imageChangeHandler = (event) => {
        setImage(event.target.value)
    }
    const caloriesChangeHandler = (event) => {
        setCalories(event.target.value)
    }
    const servingsChangeHandler = (event) => {
        setServings(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const newFoodItem = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
          }

        props.onNewFoodItem(newFoodItem)

        setName("")
        setImage("")
        setCalories("")
        setServings("")
        
        
        
    }

    return (
        <form onSubmit={submitHandler}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={name} type="text" onChange={nameChangeHandler} />

        <label>Image</label>
        <Input value={image} type="text" onChange={imageChangeHandler} />

        <label>Calories</label>
        <Input value={calories} type="number" onChange={caloriesChangeHandler} />

        <label>Servings</label>
        <Input value={servings} type="number" onChange={servingsChangeHandler} />

        <button type="submit">Create</button>
        </form>
    );
}

export default AddFoodForm;