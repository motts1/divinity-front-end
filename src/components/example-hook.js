// // import React, { useState, useEffect } from 'react';
// // import Content from '../layout/Content';
// // import Main from '../templates/Main';
// // import client from "../../sanity"
// // import BlockContent from "@sanity/block-content-to-react"
// // import imageUrlBuilder from "@sanity/image-url"
// // import moment from "moment";
// // const builder = imageUrlBuilder(client)
// // function urlFor(_ref) {
// //   return builder.image(_ref)
// // }
// // const Blog = () => {
// //     const [blogs, setBlogs] = useState([])
// //     useEffect(() => {
// //         onLoad()
// //       }, [])
// //       async function onLoad() {
// //         try {
// //             const blogs = await client.fetch(`
// //             *[_type == 'post']`)
    
// //             console.log(" blogs:", blogs)
// //             setBlogs(blogs)
// //         } catch (e) {
// //             if (e !== "No current user") {
// //             alert(e)
// //             }
// //         }
// //     }
    
// //     return (
// //         <Main>
// //             <Content bgcolor="common.white">
// //                 <h1>Blog</h1>
// //                 {blogs.map((blog, index) => {
// //                     let newPublishedDate = moment(blog.publishedAt).format('MMMM Do YYYY, h:mm:ss a')
// //                     return(
// //                         <div key={index}>
// //                             <h1>{blog.title}</h1>
// //                             <BlockContent 
// //                             blocks={blog.body}
// //                             projectId="t6srdxi3"
// //                             dataset="production"
// //                             />
// //                             <h4>{newPublishedDate}</h4>
// //                             <hr />
// //                         </div>
                       
// //                     )
// //                 })}
// //             </Content>
// //         </Main>
// //     );
// // }
// // export default Blog;

// // // lock {
// // //     /* padding: 20px; */
// // //     border: none;
// // //     border-radius: 3px;
// // //     border-color: rgb(17, 16, 16);
// // //     background: white;
// // //     /* padding-top: 20px; */
// // //     /* margin-top: 20px; */
// // //     /* padding-bottom: 20px; */
// // //     box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px 0px;
// // //   }


// import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import client from "../client"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import myConfiguredSanityClient from "../client"
// import imageUrlBuilder from "@sanity/image-url"
// const builder = imageUrlBuilder(myConfiguredSanityClient)
// class BlogPostTemplate extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       brands: [],
//     }
//   }
//   async componentDidMount() {
//     console.log("Hello world", window.location.pathname)
//     const brand = window.location.pathname.slice(1, -1)
//     const result = await client.fetch(`*[_type == 'product' && vendorTitle == '${brand}']
//     `)
//     this.setState({ brands: result })
//     console.log(result)
//   }
//   render() {
//     const post = this.props.data.markdownRemark
//     const siteTitle = this.props.data.site.siteMetadata.title
//     console.log(this.state.brands)
//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO
//           title={post.frontmatter.title}
//           description={post.frontmatter.description || post.excerpt}
//         />
//         <article
//           className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
//         >
//           <header className="post-content-header">
//             <h1 className="post-content-title">{post.frontmatter.title}</h1>
//           </header>
//           <div>
//             {this.state.brands.map(brand => {
//               function urlFor(_ref) {
//                 return builder.image(_ref)
//               }
//               return (
//                 <React.Fragment>
//                   <p>{brand.title}</p>
//                   {/* <p>{brand.defaultProductVariant.images[0].asset._ref}</p> */}
//                   <img
//                     src={urlFor(
//                       brand.defaultProductVariant.images[0].asset._ref
//                     )
//                       .width(200)
//                       .url()}
//                   />
//                 </React.Fragment>
//               )
//             })}
//           </div>