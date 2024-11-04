const menu = [
    {name: "Margherita", price: 10},
    {name: "Pepperoni", price: 12},
    {name: "Hawaiian", price: 8},
    {name: "Cheese", price: 9},
];

const cashInRegister = 100;
const nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObject) {
    menu.push(pizzaObject);
};

function placeNewOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (selectedPizza) {
        cashInRegister += selectedPizza.price;
        const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
        orderQueue.push(newOrder);
        return newOrder;
    } else {
        return false;
    }
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    order.status = "completed";
    return order;
}

addNewPizza({name: "Chicken Ranch", cost: 12});

placeNewOrder("Chicken Ranch");

completeOrder("1");

console.log(menu);
console.log(cashInRegister);
console.log(orderQueue);