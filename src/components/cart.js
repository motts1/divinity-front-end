import React, { useContext } from 'react'
import client from '../sanity'
//import LineItem from '../lineitem'
import Prod from '../components/item'

function Cart(props){
    return(
        <div>
            
            deleteItem = {props.deleteItem}
        </div>
    )
}


// //     const {
// //         store: {checkout},
// //     }= useContext(client)
// // }
// // const handleCheckout = () => {
// //     window.open(checkoutwebUrl)
// // }
// // const line_items = checkout.lineItems.map(line_item => {
// //     return <LineItem key={line_item.id.toString()} line_item={line_item} />
// // })
// // return (
// //     <div>
// //         {line_items}
// //         <h2> Subtotal </h2>
// //         <p> $ {checkout.subtotalPrice}</p>
// //     </div>
// // )

// // const cartTotal = () => {

// // }
// // const addItem = () => {
// //     prod.push(product[i])
// // }
// class Cart extends React.Component {
// constructor(props){
//     super(props);
//     this.state= {
//         cart: []
//     }
// }

// deleteItem(product) {
//     let newArr = [];
//     let newState = this.state.cart.splice;
// if ( !== { product }) {
//         newArr.push({ product });
//         this.setState({
//             cart: newArr
//         });
//     }


// render() {
    
//     }
//     return (
//         <div>
//             <h4 > Delete item </h4>
//         </div>
//     )
// };
// }
// // // const itemAmount = () => {

// // // }

export default Cart