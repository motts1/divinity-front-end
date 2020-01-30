// import React, {useState, useEffect} from 'react'

// const Cart = (props) => {
//     const [cart, setCart] = useState([])
     
//     useEffect(() => {
//         onLoad()
//     }, [])

//     let cartData = [
//         {
//             color: 'blue',
//             price: 10.99,
//             size: 'L',
//             quantity: 1
//         },
//         {
//             color: 'black',
//             price: 15.00,
//             size: 'S',
//             quantity: 5
//         },
//         {
//             color: 'pink',
//             price: 25.50,
//             size: 'M',
//             quantity: 3
//         }
//     ]

//     async function onLoad() {
//         setCart(cartData)

//     }
    
// let deleteItem = (index) => {
//     let newCart = [];
//     console.log('delete item', index);
//     cart.map((item, i) => {
//         if(i != index) {
//             newCart.push(item);
//         }
//     }
//     )
//     setCart(newCart);
// }

// let addItem = (index) => {
//     let newCart = [];
//     console.log('add item', index);
//     cart.map((item, i) => {
//         if(i === index) {
//             newCart.push(item);
//         }
//     }
//     )
//     setCart(newCart);
// }
// let incrementQuantity = (index) => {
//     console.log('increment quantity index:', index);
//     let updatedIncreaseQty = cart.slice();
//     console.log(updatedIncreaseQty);
//     updatedIncreaseQty[index].quantity = updatedIncreaseQty[index].quantity + 1
//     setCart(updatedIncreaseQty)
//     console.log('New Cart? :' , cart)
//     // cart[index].quantity = cart[index].quantity +1;
//     // console.log(cart[index].quantity);
// }

// let decrementQuantity = (index) => {
//     let updateDecreaseQty = cart.slice();
//     console.log(updateDecreaseQty);
//     updateDecreaseQty[index].quantity = updateDecreaseQty[index].quantity -1;
//     setCart(updateDecreaseQty);
// }

// let totalPrice = (index) => {
//     console.log('your total is:', index);
//     let cartTotal = index.price * index.quantity;
//     console.log(cartTotal);
//     setCart(cartTotal);
//   }

//     return(
//         <div style={{color: 'white'}}>
//             {console.log(cart)}
//             {cart.map((item, index) => {
//                 return (
//                     <div style={{display: 'flex', flexDirection: 'column'}}> 
//                         <h6>{item.price}</h6>
//                         <h6>{item.quantity}</h6>
//                         <h6>{item.color}</h6>
//                         <button onClick = {() => incrementQuantity(index)}> add </button>
//                         <button onClick = {() => decrementQuantity(index)}> subtract </button>
//                         <button onClick = {() => deleteItem(index)} > delete item </button>
//                         <button onClick = {() => addItem(index)} > add item </button>
//                         <button onClick = {() => totalPrice(index)} > total </button>
//                         </div>
//                 )
//             })}
//          </div>
//     )
// }

// export default Cart