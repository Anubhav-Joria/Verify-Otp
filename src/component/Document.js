import React, { useState,useEffect } from 'react'
import { db } from '../firebase';
import {collection ,  doc} from 'firebase/firestore'
import { getDoc } from 'firebase/firestore';

function Document() {

    const[res, setRes] = useState({});
    const handleFetchData = async () => {
          var docRef = doc(
              db,
              'Price List',
              'Dry Clean',
              'Kids',
              'Kids Shirt'
            );
        
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
              setRes( docSnap.data());
              console.log('Document data:', docSnap.data());
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!');
            }
          }
  return (
    <div style={{marginTop : "20px"}}>
      <button onClick={ handleFetchData } >  Fetch Data </button>
      {/* <a href="" onClick={handleFetchData}>Fetch Data</a> */}
      {res.Name !== null ? <h2> Name : {res.Name} Price: {res.Price}</h2> : <></>}
    </div>
  )
}


export default Document;

// import React, { useState } from "react";
// import { db } from "../firebase";
// import { collection, Firestore, getDocs } from "firebase/firestore";

// function Document() {
//   const handleFetchData = async () => {};
// }

// return (
//   <div>
//     <button onClick={handleFetchData}> Fetch Data </button>
//   </div>
// );

// export default Document;


// useEffect(async () => {
//     var docRef = doc(
//       db,
//       'User',
//       'YnXAz9N8Hp7zLwQ0NBSw',
//       'Test2',
//       'GkfqJlwmlUeBlcdjrf3j'
//     );

//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       console.log('Document data:', docSnap.data());
//     } else {
//       // doc.data() will be undefined in this case
//       console.log('No such document!');
//     }
//   }, []);

  
// export default Document;



// import React, {useEffect} from 'react';
// import {  doc, getDoc,  } from 'firebase/firestore';
// import { db } from '../Firebase';
// import firebase from '../Firebase';
// function Document() {


//   useEffect(async () => {
//         var docRef = doc(
//           db,
//           'User',
//           'YnXAz9N8Hp7zLwQ0NBSw',
//           'Test2',
//           'GkfqJlwmlUeBlcdjrf3j'
//         );
    
//         const docSnap = await getDoc(docRef);
    
//         if (docSnap.exists()) {
//           console.log('Document data:', docSnap.data());
//         } else {
//           // doc.data() will be undefined in this case
//           console.log('No such document!');
//         }
//       }, []);

//   return (
//     <div><button > click</button></div>
//   )
// }

// export default Document;