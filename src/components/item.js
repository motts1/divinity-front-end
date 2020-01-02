import React from 'react';
import imageUrlBuilder from "@sanity/image-url"
import client from '../sanity'
import BlockContent from "@sanity/block-content-to-react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col} from 'react-bootstrap'

const builder= imageUrlBuilder(client)
function urlFor(_ref) {
  return builder.image(_ref)
}

const Prod = (props) => {

    const {product} = props;
        return ( 
            <Col xs= {12} md={4}>
            <React.Fragment>
                <div style={{ 
                    border: 'none',
                    borderRadius: '3px',
                    backgroundColor: 'white',
                    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px 0px",
                    fontSize: "20px",
                    paddingLeft: 6,
                    paddingRight: 6,
                    minWidth: 400,
                    maxWidth: 400,
                    textAlign: 'center',
                    marginLeft: 6,
                    marginRight: 6,
                    marginBottom: 2,
                    maxHeight: 700,
                    minHeight: 600,
                    color: 'black',
                }}> 
            <div>
                <div style={{fontSize: '30px', fontWeight: 'bold'}}> {product.title}</div>
                <div> 
                <img id="productimage" src={urlFor(product.image.asset).height(400).width(300)} alt="productimage" /></div>
                <div> ${product.price}.</div>
                <div> {product.color}</div>
                <div> {product.size} </div>
                <div style = {{maxHeight: 200}}> <BlockContent blocks={product.description} projectId ="rws2i9gu" dataset="whitney" /></div>
                <div> id: {product.id}</div>
                <div> # {product.sku}</div>
                <button style={{backgroundColor: 'black'}} onClick=""> add to cart </button>
                <div> {product.categories}</div>
                </div>
                </div>
                </React.Fragment> 
                </Col>
    )
   }
   export default Prod;