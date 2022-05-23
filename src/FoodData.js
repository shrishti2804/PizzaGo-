export const foodItems = [
    {
        id: 1,
        name: "Cheese Pizza",
        section: "Pizza",
        price: 169,
        img: "https://res.cloudinary.com/dfrcck8j7/image/upload/v1619487071/pizza-react-firebase/menu/pizza-cheese_lvjy82.jpg"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        section: "Pizza",
        price: 319,
        img: "https://res.cloudinary.com/dfrcck8j7/image/upload/v1619486883/pizza-react-firebase/menu/pizza-pepperoni_nz9j6i.jpg"
    },
    {
        id: 3,
        name: "Margherita Pizza",
        section: "Pizza",
        price: 99,
        img: "https://res.cloudinary.com/dfrcck8j7/image/upload/v1619488567/pizza-react-firebase/menu/healthy-pizza_bvenhn_mi6jin.jpg"
    },
    {
        id: 4,
        name: "Veg Burger",
        section: "Burger",
        price: 65,
        img: "https://res.cloudinary.com/dfrcck8j7/image/upload/v1619487744/pizza-react-firebase/menu/burger_qrfwyq_m0two3.jpg"
    },
    {
        id: 5,
        name: "Fries",
        section: "Sides",
        price: 70,
        img: "https://res.cloudinary.com/dfrcck8j7/image/upload/v1619488583/pizza-react-firebase/menu/french-fries_ogjwea_jxb8s8.jpg"
    },
    {
        id: 6,
        name: "Sandwich",
        section: "Sandwich",
        price: 50,
        img: "https://res.cloudinary.com/dfrcck8j7/image/upload/v1619487772/pizza-react-firebase/menu/sandwich_lsm0cu_tnowct.jpg"
    },
    {
        id: 7,
        name: "Chicken fingers",
        section: "Sides",
        price: 200,
        img: "https://res.cloudinary.com/dfrcck8j7/image/upload/v1619487866/pizza-react-firebase/menu/chicken-wings_p06aow_fg1uxo.jpg"
    },
    {
        id: 8,
        name: "Double Cheese Sandwich",
        section: "Sandwich",
        price: 120,
        img: "https://res.cloudinary.com/dfrcck8j7/image/upload/v1619494086/pizza-react-firebase/menu/turkey_sandwich_fxpikt.jpg"
    },
    {
        id: 9,
        name: "Cheese Burger",
        section: "Burger",
        price: 100,
        img: "https://res.cloudinary.com/dfrcck8j7/image/upload/v1619494086/pizza-react-firebase/menu/cheese_burger_fwxnpe.jpg"
    },
    {
        id: 10,
        name: "Double Cheese Burger",
        section: "Burger",
        price: 150,
        img: "https://res.cloudinary.com/dfrcck8j7/image/upload/v1619494086/pizza-react-firebase/menu/bacon_burger_srstpk.jpg"
    },
    {
        id: 11,
        name: "Onion Rings",
        section: "Sides",
        price: 80,
        img: "https://res.cloudinary.com/dfrcck8j7/image/upload/v1619494086/pizza-react-firebase/menu/onion_rings_nymuke.jpg"
    },
    {
        id: 12,
        name: "Soda",
        section: "Drinks",
        price: 50,
        img: "https://i.ibb.co/JrZzsfc/cdd.png",
        choices: ["Coke", "Sprite"]
    }
    
];

const pricePerTopping = 0.50;

export const foods = foodItems.reduce( (res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {} );

export const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
        style: "currency",
        currency: "INR"
    })
}

export const getPrice = (order) => {
    const toppingPrice = order.toppings.filter(t => t.checked).length * pricePerTopping;
    return order.quantity * (order.price + toppingPrice )
}