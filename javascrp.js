
const toggler=document.querySelector('#themeToggler');
toggler.addEventListener('click',()=>{
 document.body.classList.toggle('dark-mode');
})
document.getElementById('about-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const bio = document.getElementById('bio').value.trim();

  if (!name || !email || !bio) {
    alert("Please fill in all fields.");
    return;
  }

  
  const aboutData = { name, email, bio };
  localStorage.setItem('aboutFormData', JSON.stringify(aboutData));

  alert("About info saved successfully!");
  this.reset();
});
