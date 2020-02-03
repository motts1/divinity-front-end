// import React, { useState } from "react";
// import { API } from "aws-amplify";
// import { Elements, StripeProvider } from "react-stripe-elements";
// import BillingForm from "../components/BillingForm";
// import config from "../config";
// import "./Settings.css";

// export default function Settings(props) {
//   const [isLoading, setIsLoading] = useState(false);

//   function billUser(details) {
//     return API.post("notes", "/billing", {
//       body: {
//           storage: '',
//           cardnumber: fields.cardNumber,
//           firstName: '',
//           lastName: '',
//           expDate: '',
//           cvc: ''
//       }
//     });
//   }
//   async function handleFormSubmit(storage, { token, error }) {
//     if (error) {
//       alert(error);
//       return;
//     }
  
//     setIsLoading(true);
  
//     try {
//       await billUser({
//         storage,
//         cardNumber: token.fields.cardNumber,
//         firstName: token.fields.cardName,
//         lastName: token.fields.lastName,
//         expDate: token.fields.expDate,
//         cvc : token.fields.cvc,
//       });
  
//       alert("Your card has been charged successfully!");
//       props.history.push("/");
//     } catch (e) {
//       alert(e);
//       setIsLoading(false);
//     }
//   }
  
//   return (
//     <div className="Settings">
//       <StripeProvider apiKey={config.pk_test_WPorAbqHjxBVJr3xJnagyiOq00Dv9VmK41}>
//         <Elements>
//           <BillingForm
//             isLoading={isLoading}
//             onSubmit={handleFormSubmit}
//           />
//         </Elements>
//       </StripeProvider>
//     </div>
//   );
// }