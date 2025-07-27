
const toggler=document.querySelector('#themeToggler');
toggler.addEventListener('click',()=>{
 document.body.classList.toggle('dark-mode');
})


const navbar= document.getElementById("navbar");
const openMenu= document.getElementById("open_menu");
const closeMenu= document.getElementById("close_menu");
openMenu.addEventListener("click",()=>{
    navbar.classList.add("active");
});
closeMenu.addEventListener("click",()=>{
    navbar.classList.remove("active");

});
const login= document.querySelector('.login');
const loginLink= document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');

registerLink?.addEventListener('click', ()=>{
    login.classList.add('active');

});
loginLink?.addEventListener('click', ()=>{
    login.classList.add('active');});

   


const users=localStorage.getItem('users');



document.getElementById('register-form')?.addEventListener('submit', function (e) {
  e.preventDefault(); 
  
  const username = document.querySelector('#register-form #username').value.trim();
  const email = document.querySelector('#register-form #email').value.trim();
  const password = document.querySelector('#register-form #password').value;

  
  if (!username || !email || !password) {
    console.warn("Please fill in all fields.");
    return;
  }

  // Retrieve users from localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Create new user object
  const newUser = { username, email, password };

  // Push new user into users array
  users.push(newUser);

  // Save updated users array back to localStorage
  localStorage.setItem('users', JSON.stringify(users));
   window.location.href = "sign-in.html";

});








 document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop default form action

    // Get input values
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists with matching credentials
    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
      // Store logged-in user info (optional)
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));

      console.log("Login successful!");

      // Redirect to dashboard or homepage
      window.location.href = "index.html"; // Change this to your desired page
    } else {
      console.warn("Invalid email or password.");
      alert("Login failed: Incorrect email or password.");
    }
  });


  // Check if user is logged in
  const logStatus = document.getElementById('log-status');
  const logoutContainer = document.getElementById('logout-container');
    const loggedInUser=localStorage.getItem('loggedInUser');

 
  if (loggedInUser) {
    // Change nav link to show username

    const currentUser=JSON.parse(loggedInUser);
    logStatus.textContent = `Logged in as ${currentUser.username}`;
    logStatus.href = "#"; // Disable sign-in link if already logged in

    // Show logout button
    logoutContainer.style.display = "inline";
  }
  else{
     document.getElementById('logout-btn').style.display="none";
  }

  // Handle logout
  document.getElementById('logout-btn').addEventListener('click', function (e) {
    e.preventDefault();

    // Clear logged-in user from localStorage
    localStorage.removeItem('loggedInUser');

    // Optionally redirect to home or login page
    window.location.href = "sign-in.html";
  });