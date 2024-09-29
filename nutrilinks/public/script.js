console.log("NutriLinks script loaded!");

// Function to handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Here you can add your login logic (e.g., validation, API call)
    console.log("Login attempted with:", email, password);
    alert("Login successful!"); // Replace this with actual login logic
});

// Function to handle signup
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Here you can add your signup logic (e.g., validation, API call)
    console.log("Signup attempted with:", email, password);
    alert("Signup successful!"); // Replace this with actual signup logic
});

// Function to handle profile setup
document.getElementById('profileSetupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Here you can add your profile setup logic (e.g., validation, API call)
    console.log("Profile setup attempted with:", fullName, phone, address);
    alert("Profile setup successful!"); // Replace this with actual profile setup logic
});

// Include this in your existing script.js
document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch('/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = 'Prediction: ' + data.prediction;
    })
    .catch(error => console.error('Error:', error));
});