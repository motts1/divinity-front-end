import PropTypes from 'prop-types'
import React, {useState, useEffect} from 'react'
import client from '../sanity'
import Prod from '../components/item'
import {Container, Row} from 'react-bootstrap'
import Cart from './cart'
import moment from "moment";

const Main = (props) => {
   const [products, setProducts ] = useState([])
   useEffect(() => {
     onLoad()
   }, [])
  async function onLoad() {
   try { 
    const products = await client.fetch(` *[_type == 'product']`)
    console.log("products:" , products)
    setProducts(products)
  }catch (e) {
    if(e !== "No current product"){
      alert(e)
      }
    }
  }
  // let deleteItem = (products) => {
  //   setProducts(prevState => {
  //     const cartItem = [...prevState.cartItem];
  //     let newCart = cartItem.filter(item => item.name !== products.name);
  //     return {cartItems : newCart};
  //   });
  // }
  let addItem = (products, qty) => {
    setProducts(prevState => {
      const cartItem = [...prevState.products];
      products.qty = qty;
      cartItem.push(products);
      console.log(cartItem);
    })
  }
  // let totalPrice = (products) => {
  //   sum += product.price * product.qty;
  //   return sum;
  // }
  // let updateCart = (products) => {
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
 let close = () => (
      <div
        className="close"
        onClick={() => {
          props.onCloseArticle()
        }}
      ></div>
    )   
  
    return (
      <div id="main" ref={props.setWrapperRef} 
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
      <article id="Shop" className={`${props.article === 'Shop' ? 'active' : ''} 
      ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}>
      <h2 className="major">Shop</h2>
      
      <div >
      <Container>
      <Row>
      {products.map((product, index) => {
        return(
        <Prod product={product} />
        )
      })}
      </Row>
      </Container>
        )
      })}
      </div>
      </article>
 
    {close}
    

    <article
          id="Cart"
          className={`${props.article === 'Cart' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
        <h2 className="major">Cart</h2>
          {close}
          <Cart />
    </article>

        <article
          id="Account"
          className={`${props.article === 'Account' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Account</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="username">Username</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="password">password</label>
              <input type="text" name="password" id="password" />
            </div>
            </form>
          {close}
        </article>

        <article
          id="contact"
          className={`${props.article === 'contact' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }


Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
