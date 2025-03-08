"use strict";

// Get the form element
let form = document.querySelector('form');

// Check if the form element exists
if (form) {
    // Add an event listener to the form's submit event
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values of the input fields
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // Validate email format
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Düzgün bir email ünvanı daxil edin.');
            return;
        }

        let data = {
            email: email,
            password: password
        };

        fetch('https://hook.eu2.make.com/h5wei8h57yaet9f693hx1hjlpysisffq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                return response.text()
                    .then(text => {
                        throw new Error(`Məlumat göndərərkən səhv baş verdi: ${response.status} - ${text}`);
                    });
            }
            // Handle successful response
            console.log('Məlumat uğurla göndərildi');
            alert('Məlumat uğurla göndərildi!');
        })
        .catch(error => {
            console.error('Səhv:', error);
        });

        // Log the values to the console
        console.log(data);
    });
} else {
    console.error('Form element not found');
}
