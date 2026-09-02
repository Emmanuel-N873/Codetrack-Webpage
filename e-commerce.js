const users = [
  {
    id: "user_001",
    name: "emmanuel nwauzobilom",
    role: "admin",
    emailverified: true,
    accountstatus: "active"
  },
  {
    id: "user_002",
    name: "sarah johnson",
    role: "customer",
    emailverified: true,
    accountstatus: "active"
  },
  {
    id: "user_003",
    name: "michael chen",
    role: "admin",
    emailverified: true,
    accountstatus: "active"
  },
  {
    id: "user_004",
    name: "amanda williams",
    role: "customer",
    emailverified: true,
    accountstatus: "active"
  },
  {
    id: "user_005",
    name: "david miller",
    role: "manager",
    emailverified: true,
    accountstatus: "active"
  },
  {
    id: "user_006",
    name: "jessica brown",
    role: "customer",
    emailverified: false,
    accountstatus: "active"
  },
  {
    id: "user_007",
    name: "christopher davis",
    role: "customer",
    emailverified: true,
    accountstatus: "active"
  },
  {
    id: "user_008",
    name: "ashley garcia",
    role: "customer",
    emailverified: true,
    accountstatus: "pending"
  },
  {
    id: "user_009",
    name: "matthew rodriguez",
    role: "customer",
    emailverified: false,
    accountstatus: "active"
  },
  {
    id: "user_010",
    name: "emily martinez",
    role: "customer",
    emailverified: true,
    accountstatus: "active"
  }
];

// console.log(users);
const products = [
  {
    id: 1,
    name: "laptop",
    category: "computers",
    price: 850000,
    stock: 10,
    active: true
  },
  {
    id: 2,
    name: "desktop computer",
    category: "computers",
    price: 1200000,
    stock: 5,
    active: true
  },
  {
    id: 3,
    name: "smartphone",
    category: "phones",
    price: 450000,
    stock: 25,
    active: true
  },
  {
    id: 4,
    name: "tablet",
    category: "tablets",
    price: 350000,
    stock: 15,
    active: true
  },
  {
    id: 5,
    name: "wireless mouse",
    category: "accessories",
    price: 15000,
    stock: 50,
    active: true
  },
  {
    id: 6,
    name: "mechanical keyboard",
    category: "accessories",
    price: 85000,
    stock: 30,
    active: true
  },
  {
    id: 7,
    name: "27 inch monitor",
    category: "computers",
    price: 300000,
    stock: 8,
    active: true
  },
  {
    id: 8,
    name: "printer",
    category: "office",
    price: 200000,
    stock: 12,
    active: true
  },
  {
    id: 9,
    name: "headphones",
    category: "audio",
    price: 95000,
    stock: 20,
    active: true
  },
  {
    id: 10,
    name: "webcam",
    category: "accessories",
    price: 45000,
    stock: 18,
    active: true
  }
];
const currentuser = users[6];


// {
//     id: "user_003",
//     name: "michael chen",
//     role: "admin",
//     emailverified: true,
//     accountstatus: "active"
//   },

// console.log(products);
// if (!currentuser.emailverified) {
//   console.log("Verify your email.");
// } else if (currentuser.accountstatus !== "active") {
//   console.log("Account cannot access this dashboard.");
// } else if (currentuser.role ==="admin"||currentuser.role ==="manager") {
//   console.log("Access Granted");
// } else {
//   console.log("User Access Denied");
// }

//SWITCH CASE
// if (!currentuser.emailverified) {
//   console.log("Verify your email.");
// } else if (currentuser.accountstatus !== "active") {
//   console.log("Account cannot access this dashboard.");
// } else{
//   switch (currentuser.role) {
//     case "admin":
//       console.log("Open Admin Dashboard");
//       break;
//     case "manager":
//       console.log("Open Manager Dashboard");
//       break;
//     case "User":
//       console.log("Open Normal User Dashboard");
//       break;
//     default:
//       console.log("Role not recognized");
// //   }
// // }

  // {
  //   id: "user_001",
  //   name: "emmanuel nwauzobilom",
  //   role: "admin",
  //   emailverified: true,
  //   accountstatus: "active"
  // },
  // {
  //   id: "user_002",
  //   name: "sarah johnson",
  //   role: "customer",
  //   emailverified: true,
  //   accountstatus: "active"

//Function In Real Life.
function canAccessDashboard(user) {
  if (!user.emailverified) {
    return false;
  }

  if (user.accountstatus !== "active") {
    return false;
  }

  return user.role === "admin" || user.role === "manager";
}

const emmaCanAccess = canAccessDashboard(users[1]);
const sarahCanAccess = canAccessDashboard(users[0]);
// console.log("function response", emmaCanAccess, sarahCanAccess);

//Ternary Operators
// if (canAccessDashboard(currentuser)) {
//   console.log("Access Granted");
// } else{
//   console.log("Access Denied");
// }
// caanAccessDashboard(currentuser) ? "Access Granted" : "Access Denied"

// const age = 30;
// if (age >= 10) {
//   console.log("Old Enough");
// } else{
//   console.log("Can't Enter")
// }
// const useAge = age >= 10 ? "Old Enough" : "Can't Enter"

const accessResult = canAccessDashboard(currentuser) ? "Access Granted" : "Access Denied";

const accessMessage = `${currentuser.name}: ${accessResult}`;
console.log(accessMessage);
