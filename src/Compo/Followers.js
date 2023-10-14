// import React, { useState, useEffect } from 'react';

// function Followers() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('../userData.json') // Replace with your JSON file URL
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((json) => {
//         setData(json); // Set the data in your component's state
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   if (!data) {
//     return <div>Loading data...</div>;
//   }

//   return (
//     <div>
//       <h1>JSON Data Example</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

// export default Followers;
