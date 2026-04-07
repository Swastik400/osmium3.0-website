// Contact Form Handler - Uses Secure API
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitSpinner = document.getElementById('submit-spinner');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            submitBtn.disabled = true;
            submitText.textContent = 'Sending...';
            submitSpinner.classList.remove('hidden');
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Submit using secure API
            SecureAPI.submitForm(formData, {
                success: function(response) {
                    // Reset form
                    form.reset();
                    
                    // Show success message
                    showMessage('Thank you! Your message has been sent successfully.', 'success');
                    
                    // Reset button
                    resetButton();
                },
                error: function(status, response) {
                    console.error('Form submission failed:', status, response);
                    showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
                    resetButton();
                }
            });
        });
    }
    
    function resetButton() {
        submitBtn.disabled = false;
        submitText.textContent = 'Send Message';
        submitSpinner.classList.add('hidden');
    }
    
    function showMessage(message, type) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
            type === 'success' 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 text-white'
        }`;
        messageEl.textContent = message;
        
        document.body.appendChild(messageEl);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
});