// Show image after 10 seconds
setTimeout(() => {
  document.getElementById('delayed-img').style.display = 'block';
}, 10000);

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();