import PropTypes from 'prop-types'
import React, {useState, useEffect} from 'react'
import imageUrlBuilder from "@sanity/image-url"
//import {API} from 'aws-amplify'
import client from '../sanity'
import BlockContent from "@sanity/block-content-to-react"

const builder= imageUrlBuilder(client)
function urlFor(_ref) {
  return builder.image(_ref)
}

const Main = (props) => {
   const [products, setProducts] = useState([])
   useEffect(() => {
     onLoad()
   }, [])
  async function onLoad() {
   try { 
    const products = await client.fetch(` *[_type == 'product']{
      ...,
      "categoriesX": categories[].asset->title
    }`)
    console.log("products:" , products)
    setProducts(products)
  }catch (e) {
    if(e !== "No current product"){
      alert(e)
      }
    }
  }

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
      {close}

      <div style={{display: 'flex', padding: 6}}>

      {products.map((product, index) => {
        let styles = {
          color: 'black'
        }
        
        return(
          <React.Fragment>

          <div style={{ 
            border: 'none',
            borderRadius: '3px',
            backgroundColor: 'white',
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px 0px",
            fontSize: "20px",
            paddingLeft: 6,
            paddingRight: 6,
            minWidth: 300,
            maxWidth: 300,
            textAlign: 'center',
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 2,
            maxHeight: 600,
            minHeight: 600,
          
          }}> 
          <div style={styles} id= "productCard">
          <div style={{fontSize: '30px', fontWeight: 'bold'}}> {product.title}</div>
          <div> 
          <img id="productimage" src={urlFor(product.image.asset).height(200).width(200)} alt="productimage" /></div>
          <div> ${product.price}</div>
          <div> {product.color}</div>
          <div> <BlockContent blocks={product.size} projectId ="rws2i9gu" dataset="whitney" /> </div>
          <div style = {{maxHeight: 200}}> <BlockContent blocks={product.description} projectId ="rws2i9gu" dataset="whitney" /></div>
          <div> id: {product.id}</div>
          <div> # {product.sku}</div>
          <button style={{backgroundColor: 'black'}} onClick=""> add to cart </button>
          <div> {product.categories}</div>
          </div>
          
          </div>
          
          <br /><br />
          </React.Fragment>

        )
      })}
      </div>
    </article>

    <article
          id="Cart"
          className={`${props.article === 'Cart' ? 'active' : ''} ${
            props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Cart</h2>
          {close}
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
