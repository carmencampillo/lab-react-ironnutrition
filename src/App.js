import foods from './foods.json';
import {Card, col, Button, Divider, Row} from 'antd';
import {useState} from "react";
import FoodBox from './components/FoodBox';

function App() {

  const [foodList, setFoodList] = useState(foods)

  

return (

<div className="App">

<Divider>Food List</Divider>

<Row style={{ width: '100%', justifyContent: 'center' }}>

{foodList.map((food) => {
  return (
<FoodBox food={ {
        name: food.name,
        calories: food.calories,
        image: food.image,
        servings: food.servings
      }} />
  
    )
  })}

</Row>
  </div>

  )
}


export default App;
