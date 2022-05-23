import {useEffect} from "react";

export const useTitle = ({openFood, orders}) => {
    useEffect( () => {
        if(openFood){
            document.title = openFood.name;
        }else{
            document.title = orders.length === 0 ? "PizzaGo | Order Pizzas Online" : `[${orders.length}] items in your order` ;
        }
    } )
}