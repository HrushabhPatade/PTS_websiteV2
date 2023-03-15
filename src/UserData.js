// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import db from './FirebaseConfig';
// import 'firebase/database';



// function UserData() {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Get the current user object from Firebase Authentication
//     const user = firebase.auth().currentUser;

//     // Get a reference to the Firebase database
//     const database = firebase.database();

//     // Get a reference to the user data in the database using their UID
//     const userRef = database.ref('registrations/' + user.uid);

//     // Retrieve the user data
//     userRef.once('value').then((snapshot) => {
//       const userData = snapshot.val();
//       setUserData(userData);
//     });
//   }, []);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{userData.name}</h1>
//       <p>Email: {userData.email}</p>
//       <p>Age: {userData.age}</p>
//       {/* Display other user data as needed */}
//     </div>
//   );
// }

// export default UserData;
