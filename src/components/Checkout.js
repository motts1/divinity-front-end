// import uuid from 'uuid/v4'
// import {StripeCheckout} from "react-stripe-elements";
// import React, { useState, useEffect } from 'react'

// const Payment = (props) => {
//     const [stripeHandler, setStripeHandler]= useState([]);
//     const [isProcessing, setIsProcessing] = useState(false);
//     const [isCardComplete, setIsCardComplete] = useState(false);
//     const [isLoading, SetIsLoading] = useState(false);
// }
// async function onLoad() {
//   try {
//     const stripeHandler = StripeCheckout.configure({
//       key: 'pk_test_WPorAbqHjxBVJr3xJnagyiOq00Dv9VmK41'
//   })
//   }
//   catch (e) {
//     if (e !== "No current") {
//       alert(e)
//     }
//   }
// }
// let openStripeCheckout = (stripeHandler) => {
//  stripeHandler.open({
//       name: 'boo',
//       token: token => {
//           fetch(`https://4m5jfeec48.execute-api.us-east-1.amazonaws.com/dev/checkout`,
//           {
//           method: 'POST',
//           body: JSON.stringify({
//           token,
//           idempotency_key: uuid(),
//       })
//   })
// }
// })
// return(
//   <button onClick={() => openStripeCheckout(stripeHandler)}> pay</button>
// )
// }
// export default Payment