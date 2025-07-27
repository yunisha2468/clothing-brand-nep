
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

  
  let users = JSON.parse(localStorage.getItem('users')) || [];


  const newUser = { username, email, password };


  users.push(newUser);

  
  localStorage.setItem('users', JSON.stringify(users));
   window.location.href = "sign-in.html";

});








 document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

   
    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
     
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));

      console.log("Login successful!");

    
      window.location.href = "index.html";
    } else {
      console.warn("Invalid email or password.");
      alert("Login failed: Incorrect email or password.");
    }
  });


  
  const logStatus = document.getElementById('log-status');
  const logoutContainer = document.getElementById('logout-container');
    const loggedInUser=localStorage.getItem('loggedInUser');

 
  if (loggedInUser) {
    

    const currentUser=JSON.parse(loggedInUser);
    logStatus.textContent = `Logged in as ${currentUser.username}`;
    logStatus.href = "#"; 

    
    logoutContainer.style.display = "inline";
  }
  else{
     document.getElementById('logout-btn').style.display="none";
  }


  document.getElementById('logout-btn').addEventListener('click', function (e) {
    e.preventDefault();

    
    localStorage.removeItem('loggedInUser');

  
    window.location.href = "sign-in.html";
  });
