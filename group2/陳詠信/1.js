// JavaScript for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // For demonstration purposes, log form values to console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Here you can add code to send the form data to a server or perform other actions
    // For now, let's just alert the user that the form was submitted successfully
    alert('Form submitted successfully!');
});
