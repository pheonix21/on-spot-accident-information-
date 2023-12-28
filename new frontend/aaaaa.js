const loginForm = document.getElementById('login-form');
const otpForm = document.getElementById('otp-form');
const userDetailsDiv = document.getElementById('user-details');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const phoneNumber = document.getElementById('phone-number').value;
  const policyNumber = document.getElementById('policy-number').value;

  // Send data to server for OTP generation
  try {
    const response = await fetch('/generate-otp', {
      method: 'POST',
      body: JSON.stringify({ phoneNumber, policyNumber }),
    });

    if (response.ok) {
      // Hide login form and show OTP form
      loginForm.style.display = 'none';
      otpForm.style.display = 'block';
    } else {
      // Handle errors from server
    }
  } catch (error) {
    console.error(error);
    // Handle network errors
  }
});

otpForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const otp = document.getElementById('otp').value;

  // Send OTP to server for verification
  try {
    const response = await fetch('/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ otp }),
    });

    if (response.ok) {
      const userDetails = await response.json();

      // Display user details
      userDetailsDiv.innerHTML = `
        <h2>User Details</h2>
        <p>Phone Number: ${userDetails.phoneNumber}</p>
        <p>Policy Number: ${userDetails.policyNumber}</p>
        // Add other details as needed
      `;
    } else {
      // Handle OTP verification failure
    }
  } catch (error) {
    console.error(error);
    // Handle network errors
  }
});
