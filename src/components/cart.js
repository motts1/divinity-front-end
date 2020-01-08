import React, {useState, useEffect} from 'react'

let cartData = {
    item1 :{
        color: 'blue',
        price: 10.99,
        size: 'L',
        quantity: 1
    },
    item2 :{
        color: 'black',
        price: 15.00,
        size: 'S',
        quantity:1
    },
    item3 : {
        color: 'pink',
        price: 25.50,
        size: 'M',
        quantity:1
    }
};

const Cart = (props) => {
    const quantity = cartData.item1.quantity;
    console.log(quantity);
    const newCartQuantity = quantity + 1;
    console.log(newCartQuantity);

    const[cart , setCart ] = useState([])
   useEffect(() => {
            onLoad()
        }, [])
        async function onLoad() {
            try {
                const cart = cartData;
                console.log('cart:' , cart);
                setCart(cart)
                const cartQuantity = setCart(quantity);
                console.log(cartQuantity);
            }catch (e) {
                if(e !== " Add an item to your cart"){
                    alert(e)
                }
            }
        }
      
//contain business logic/ functions
//pass them down into cart item component

// let deleteItem = (products) => {
  //   setProducts(prevState => {
  //     const cartItem = [...prevState.cartItem];
  //     let newCart = cartItem.filter(item => item.name !== products.name);
  //     return {cartItems : newCart};
  //cart.delete(cartItem[i])
  //   });
  // }
    // let addItem = (products, qty) => {
  //   setProducts(prevState => {
  //     const cartItem = [...prevState.products];
  //     products.qty = qty;
  //     cartItem.push(products);
  //     console.log(cartItem);
  //   })
  // }
    // let totalPrice = (products) => {
  //   sum += product.price * product.qty;
  //   return sum;
  // }
  // let updateQuantity = (products) => {
  //   let productQuantity = cartProducts.reduce((sum, product) => {
  //     sum += p.quantity;
  //     return sum;
  //   }, 0);
  // }

    
    // let qty=(product) => {
    //   setProducts(prevState => {
    //     const ol
    //   })
    // }
    // let cartItem = (products) => {

    // }
    return(
        <div style={{color: 'white'}}>
            <p > hi</p>
            <h3> <Cart  /></h3>
            {/* <div>
                <Cart />
            </div> */}
        {/* <h3 onClick = {this.props.deleteItem} > delete item </h3> */}
        </div>
    )
}

export default Cart