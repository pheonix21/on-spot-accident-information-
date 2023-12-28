document.getElementById("logout-btn").addEventListener("click", function() {
  // Perform logout actions here (e.g., clear session, redirect to login page)
  alert("You have been logged out."); // Replace with actual logout actions
});

document.getElementById("cancel-btn").addEventListener("click", function() {
  // Redirect to the previous page or stay on the current page
  window.history.back();
});
