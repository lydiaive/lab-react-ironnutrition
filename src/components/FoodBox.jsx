import { Card, Col, Button } from 'antd';

function FoodBox(props) {
    
    const {name, image, calories, servings} =props.food
    const {deleteHandler} = props

    const totalCal = calories * servings

    return (
      <Col>
        <Card
          title={name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={image} height={60} alt="food" />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {totalCal} </b> kcal
          </p>
          <Button onClick={() => deleteHandler(name)} type="primary"> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;