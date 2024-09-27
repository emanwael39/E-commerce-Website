// var love=document.getElementsByClassName("love")[0];
// var addBtn=document.getElementsByClassName("add-to-cart")
// love.style.color="red";
// var userName=document.getElementsByClassName("user-name")[0];
// var fName=document.getElementsByClassName("fName")[0]
// var btnSub=document.getElementsByClassName("submit")[0]
// btnSub.style.backgroundColor="red"
// userName.innerHTML=window.localStorage.email
// btnSub.onclick=function(){
//     alert("Form submitted successfully");
//     userName.innerHTML=window.localStorage.fisrtName
// }
// // userName.style.backgroundColor="red"

// window.localStorage.fisrtName=fName.value

// fName.onkeyup=function(){
//     window.localStorage.clear()
//     window.localStorage.fisrtName=fName.value
//     userName.innerHTML="Welcome "+window.localStorage.fisrtName+" !"
//     // userName.innerHTML=window.localStorage.fisrtName
// }
// function write(){
//     userName.innerHTML="welcome"
// }
var addCart=document.getElementById("addCart")
var cart=document.getElementById("cart")
var parentCart=document.getElementById("parent-cart")
var fav=[]
///////////////////////////////////
function show(){
  if(parentCart.style.display=="none"){
    parentCart.style.display="block";
  }else{
      parentCart.style.display="none";
  }
}

///////////////////////////////////////////////////////////

// function change(id,item){
//    if(localStorage.fName){
//     if(item.style.color=="red"){
//       item.style.color="#999";
//   }else{
//       item.style.color="red";
//       let choosenItem=data.find((item)=>   item.id==id );
//       fav.push(choosenItem)
//   }
//    }else{
//     window.open("login.html")
//    }
// }
////////////////////////////////////////////////
function add(item,item2){
    if(localStorage.fName){
      if(item.innerHTML== "Add to cart"){
        item.innerHTML= "Remove from cart";
        item.style.backgroundColor="red"
        addCart.innerHTML+=`
        <div class="flex-between">
          <p class="c-blue">${item2}</p>
          <input type="number" value="1"  min="1" id="" class="c-blue fw-bold">
        </div>`
    }else{
        item.innerHTML= "Add to cart";
        item.style.backgroundColor="var(--blue-color)"
    }
    }else{
      window.open("login.html")
    }
   
}
////////////////////////////////////////////////////////////
// const myForm = document.getElementById("myForm");
// myForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     userName.innerHTML="welcome"
//     window.open("index.html")
    
//     // userName.innerHTML="welcome"
//     // Prevent the default form submission
//     // Your validation and data handling logic here

// });
/////////////////////////////////////////
// const loginForm = document.getElementById('login-form');
// const usernameDisplay = document.getElementById('username-display');

// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   // Simulate authentication (in a real app, you'd send a request to a server)
//   if (username === 'john' && password === 'doe') {
//     // Store the username in local storage
//     localStorage.setItem('username', username);

//     // Display the username on the page
//     usernameDisplay.textContent = `Welcome, ${username}!`;
//   } else {
//     alert('Invalid credentials');
//   }
// });

// // Check if the username is already stored in local storage
// if (localStorage.getItem('username')) {
//   const storedUsername = localStorage.getItem('username');
//   usernameDisplay.textContent = `Welcome, ${storedUsername}!`;
// }
/////////////////////////////////////////
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Login Example</title>
//   <style>
//     /* Add some basic styling */
//     body {
//       font-family: Arial, sans-serif;
//     }
//   </style>
// </head>
// <body>
//   <h1>Login Example</h1>
//   <form id="login-form">
//     <label for="username">Username:</label>
//     <input type="text" id="username" name="username"><br><br>
//     <label for="password">Password:</label>
//     <input type="password" id="password" name="password"><br><br>
//     <button type="submit">Login</button>
//   </form>
//   <div id="username-display"></div>

//   <script src="script.js"></script>
// </body>
// </html>
/////////////////////////////////////////////////////////////////////////////

//////////////////////
// const registerForm = document.getElementById('register-form');
// const registerBtn = document.getElementById('register-btn');

// registerBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
//   const user = { username, password };
//   localStorage.setItem('user', JSON.stringify(user));
// });
// /////////////////////////
// const loginForm = document.getElementById('login-form');
// const loginBtn = document.getElementById('login-btn');

// loginBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
//   const storedUser = JSON.parse(localStorage.getItem('user'));
//   if (storedUser && storedUser.username === username && storedUser.password === password) {
//     sessionStorage.setItem('username', username);
//     // redirect to protected page or display username on page
//   } else {
//     alert('Invalid credentials');
//   }
// });
// ////////////////////////////////////</br>
// const usernameElement = document.getElementById('username-display');

// if (sessionStorage.getItem('username')) {
//   const username = sessionStorage.getItem('username');
//   usernameElement.textContent = `Welcome, ${username}!`;
// } else {
//   usernameElement.textContent = 'Please log in to view this page';
// }
// /////////////////////////////////////////////////////////
var fisrtName=document.getElementById("firstName");
var secondName=document.getElementById("secondName");
var email=document.getElementById("email");
var password=document.getElementById("password");
var registerBtn=document.getElementById("register-btn");
var loginEmail=document.getElementById("loginEmail");
var loginPassword=document.getElementById("loginPassword");
var loginBtn=document.getElementById("login-btn")
var loginForm=document.getElementById("login-form")
var usernameDisplay=document.getElementById("username-display")
usernameDisplay.innerHTML="Welcome "+window.localStorage.fName.toUpperCase()+" !"
function saveData(){
  window.localStorage.fName=fisrtName.value;
  window.localStorage.sName=secondName.value;
  window.localStorage.email=email.value;
  window.localStorage.password=password.value
}
  // loginForm.action="login.html"
function saveLoginData(){
  window.localStorage.loginEmail=loginEmail.value;
  window.localStorage.loginPassword=loginPassword.value
  if(window.localStorage.password==window.localStorage.loginPassword && window.localStorage.email==window.localStorage.loginEmail){
    // usernameDisplay.style.backgroundColor="red";
    loginForm.action="main.html"
    // usernameDisplay.style.backgroundColor="red";
    // window.open("index.html")

    // window.location.href="index.html"
  }else{
    alert("your email or password is not correct")
    loginForm.action="login.html"
  }
}

function logout(){
  window.localStorage.removeItem(loginEmail);
  window.localStorage.removeItem(loginPassword);
  window.open("login.html")
}