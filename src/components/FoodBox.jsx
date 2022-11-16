import react from "react"
import {card, Col, Button} from "antd";

function FoodBox({ food}) {
    const { name, calories, image, servings} = food;
    return (
        <Col>
        <card 
        title ={name}
        style={{width: 250, height: 300, margin:10}}
        >
            <img src= {image} height= {60} alt="food"/>
            <p> Calories: {calories}</p>
            <p>Servings: {servings} </p>
            <p>
                <b> Total Calories:{calories * servings} </b>

            </p>
            <Button type= "primary"> Delete</Button>
            </card> 
        </Col>
    )
}
export default FoodBox