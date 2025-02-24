// import { useEffect } from "react";

// function Example() {
//   useEffect(() => {
//     console.log("Component Rendered!");
//   });

//   return <h1>Hello World</h1>;
// } 

// export default Example;

// import { useEffect } from "react";

// function Example() {
//   useEffect(() => {
//     console.log("Component Mounted!");
//   }, []); 

//   return <h1>Welcome</h1>;
// }

// export default Example


// import { useState, useEffect } from "react";

// function Counting() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`count changed: ${count}`);
//   }, [count]); 

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//     </div>
//   );
// }

// export default Counting;



// import { useEffect } from "react";

// function WindowSize() {
//   useEffect(() => {
//     const handleResize = () => {
//       console.log("Window resized:", window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize); 
//       console.log("Cleanup done!");
//     };
//   }, []);

//   return <h1>Resize the Window</h1>;
// }

// export default WindowSize;

// API call method

// import React, { useState, useEffect } from "react";

// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => setUsers(data));
//   }, []); 

//   return (
//     <div>
//       <h2>Users List</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;

// cleanup function 

// import React, { useState, useEffect } from "react";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 1000);

//     return () => {
//       clearInterval(interval); 
//     };
//   }, []);

//   return <h2>Timer: {count}</h2>;
// }

// export default Timer;




// import { useEffect, useState } from "react";

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setFilteredUsers(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     const filtered = users.filter((user) =>
//       user.name.toLowerCase().includes(search.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   }, [search, users]);

//   return (
//     <div>
//       <h2>User List</h2>

      
//       <input
//         type="text"
//         placeholder="Search users..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

    
//       {error && <p style={{ color: "red" }}>{error}</p>}

    
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user) => (
//               <li key={user.id}>
//                 <strong>{user.name}</strong> - {user.email} ({user.address.city})
//               </li>
//             ))
//           ) : (
//             <p className="my-6">No users found</p>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default UserList;



import React from "react";
import ThemeSwitcher from "./assets/components/ThemeSwitcher";

function App() {
  return <ThemeSwitcher />;
}

export default App;