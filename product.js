// const container = document.getElementById("container");

// console.dir(container);

// //We have 2 ways to take data from server and bring it to the front end.
// //FE sends request and the BE responds with data. This is called API (Application Programming Interface). We can use fetch() to get data from the server.

// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");
const usernameError = document.querySelector("#usernameError");
const passwordError = document.querySelector("#passwordError");
const loginStatus = document.querySelector("#loginStatus");
const LoginSection = document.querySelector("#loginSection");
const Dashboard = document.querySelector("#dashboard");
const profile = document.querySelector("#profile");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
//--------
const productStatus = document.querySelector("#productStatus");
const productContainer = document.querySelector("#productContainer");
const productForm = document.querySelector("#productForm");
const productTittle = document.querySelector("#productTittle");
const productPrice = document.querySelector("#productPrice");
const productFormStatus = document.querySelector("#productFormStatus");

let allProducts = [];

//Form validation
//Arror function.

const validateLogin = () => {
    let isValid = true;

//Set usename error to empty string
    usernameError.textContent = "";
    passwordError.textContent = "";

    //We now collect the inputs (username and password) from the user
    // Value is the key that allows us to collect the actual written input of the user
    //and trim helps us to cut empty spaces
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

//Conditions 1 - If username has  empty value at submit
if (!username) {
    usernameError.textContent = "Username is required";
    isValid = false;
}
//Condition 2 - If the password has empty value at submit
if (!password) {
    passwordError.textContent = "Password is required";
    isValid = false;
}

//Condition 3 - Password cheacks for lenght and value
if (password && password.length < 6) {
    passwordError.textContent = "Password  is too short";
    isValid = false;
}

return isValid;
}

//Fetching data from the server and displaying it on the front end
const loginWithFetch = async (credentials) => {

}

