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




import React, { useState, useEffect } from "react";

const CryptoTracker = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
      }
    };

    fetchCryptoPrices();
    const interval = setInterval(fetchCryptoPrices, 10000); // Auto-update every 10 sec

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Crypto Price Tracker</h1>
      
      <input
        type="text"
        placeholder="Search Cryptocurrency..."
        className="w-full p-2 mb-4 text-black rounded-md"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-4">
        {cryptoData
          .filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
          .map((coin) => (
            <div key={coin.id} className="flex justify-between bg-gray-800 p-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                <span className="font-semibold">{coin.name} ({coin.symbol.toUpperCase()})</span>
              </div>
              <span className="text-green-400 font-bold">${coin.current_price.toFixed(2)}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CryptoTracker;